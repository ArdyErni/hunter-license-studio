import { createRoot } from 'react-dom/client'
import { flushSync } from 'react-dom'
import { toCanvas } from 'html-to-image'
import { LicenseExportPanel } from '../components/HunterLicense'
import type { AuraStyle, CardTheme } from '../components/HunterLicense'
import { EXPORT_LAYOUT, GIF_FPS, GIF_FRAMES, prepareAuraBase, renderExportFrame } from './exportFrame'

export type ExportFormat = 'plain' | 'holographic' | 'animated'
type License = { name: string; licenseNumber: string; theme: CardTheme; aura: AuraStyle }
type Progress = (value: number, label: string) => void

async function captureLicense(license: License, pixelRatio: number) {
  const { width, height, panelWidth, panelHeight, padding, gap } = EXPORT_LAYOUT
  const wrapper = document.createElement('div')
  Object.assign(wrapper.style, { position: 'absolute', top: '0', left: '-9999px', width: `${width}px`, height: `${height}px`, overflow: 'hidden', pointerEvents: 'none' })
  wrapper.inert = true
  wrapper.setAttribute('aria-hidden', 'true')
  const host = document.createElement('div')
  Object.assign(host.style, { width: `${width}px`, height: `${height}px`, display: 'flex', gap: `${gap}px`, padding: `${padding}px`, boxSizing: 'border-box', background: '#1a1a18' })
  wrapper.appendChild(host)
  document.body.appendChild(wrapper)
  const roots: ReturnType<typeof createRoot>[] = []

  try {
    for (const side of ['front', 'back'] as const) {
      const slot = document.createElement('div')
      Object.assign(slot.style, { width: `${panelWidth}px`, height: `${panelHeight}px`, flexShrink: '0', position: 'relative', containerType: 'inline-size' })
      host.appendChild(slot)
      const root = createRoot(slot)
      roots.push(root)
      flushSync(() => root.render(<LicenseExportPanel {...license} side={side} />))
    }
    await document.fonts.ready
    await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()))
    return await toCanvas(host, { pixelRatio, width, height, cacheBust: true })
  } finally {
    roots.forEach((root) => root.unmount())
    wrapper.remove()
  }
}

function canvasBlob(canvas: HTMLCanvasElement) {
  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error('PNG encoding failed.')), 'image/png')
  })
}

async function encodeAnimation(base: HTMLCanvasElement, aura: AuraStyle, progress: Progress) {
  const canvas = document.createElement('canvas')
  canvas.width = base.width
  canvas.height = base.height
  const worker = new Worker(new URL('./gif.worker.ts', import.meta.url), { type: 'module' })
  type Response = { type: string; message?: string; buffer?: ArrayBuffer }
  const request = (message: object, transfer: Transferable[] = []) => new Promise<Response>((resolve, reject) => {
    const cleanup = () => {
      clearTimeout(timeout)
      worker.onmessage = null
      worker.onerror = null
      worker.onmessageerror = null
    }
    const fail = () => { cleanup(); reject(new Error('GIF encoding failed. Please try again.')) }
    const timeout = window.setTimeout(fail, 30000)
    worker.onerror = fail
    worker.onmessageerror = fail
    worker.onmessage = ({ data }: MessageEvent<Response>) => {
      cleanup()
      if (data.type === 'error') reject(new Error(data.message))
      else resolve(data)
    }
    try {
      worker.postMessage(message, transfer)
    } catch (error) {
      cleanup()
      reject(error)
    }
  })

  try {
    // One palette sampled across the loop prevents color flicker between frames.
    // Keep only these sparse samples and one RGBA frame in memory, even on mobile.
    const sampleStride = 16
    const perSample = Math.ceil(canvas.width * canvas.height / sampleStride)
    const samples = new Uint8ClampedArray(perSample * 4 * 4)
    for (let sample = 0; sample < 4; sample++) {
      const context = renderExportFrame(base, canvas, aura, sample / 4)
      const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data
      for (let pixel = 0, target = sample * perSample * 4; pixel < pixels.length; pixel += sampleStride * 4, target += 4) {
        samples.set(pixels.subarray(pixel, pixel + 4), target)
      }
      await new Promise((resolve) => setTimeout(resolve, 0))
    }
    progress(15, 'Preparing GIF colors…')
    await request({ type: 'init', samples, width: canvas.width, height: canvas.height }, [samples.buffer])
    for (let index = 0; index < GIF_FRAMES; index++) {
      progress(20 + index / GIF_FRAMES * 75, `Capturing frame ${index + 1}/${GIF_FRAMES}…`)
      await new Promise((resolve) => setTimeout(resolve, 0))
      const context = renderExportFrame(base, canvas, aura, index / GIF_FRAMES)
      const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data
      // GIF delays use centiseconds; distribute rounding for exactly four seconds.
      const delay = (Math.round((index + 1) * 100 / GIF_FPS) - Math.round(index * 100 / GIF_FPS)) * 10
      progress(20 + index / GIF_FRAMES * 75, `Encoding frame ${index + 1}/${GIF_FRAMES}…`)
      await request({ type: 'frame', pixels, index, delay }, [pixels.buffer])
    }
    progress(96, 'Finishing GIF…')
    const { buffer } = await request({ type: 'finish' })
    if (!buffer) throw new Error('GIF encoder returned no data.')
    return new Blob([buffer], { type: 'image/gif' })
  } finally {
    worker.terminate()
  }
}

export async function exportLicense(license: License, format: ExportFormat, progress: Progress) {
  progress(5, 'Rendering license…')
  const base = await captureLicense(license, format === 'animated' ? 1 : 3)
  if (format !== 'plain') prepareAuraBase(base, license.aura)
  let blob: Blob
  if (format === 'animated') {
    blob = await encodeAnimation(base, license.aura, progress)
  } else if (format === 'plain') {
    progress(80, 'Creating PNG…')
    blob = await canvasBlob(base)
  } else {
    progress(70, 'Rendering holographic finish…')
    const canvas = document.createElement('canvas')
    canvas.width = base.width
    canvas.height = base.height
    renderExportFrame(base, canvas, license.aura, 0.125)
    blob = await canvasBlob(canvas)
  }
  progress(100, 'Download ready.')
  return blob
}

export function downloadExport(blob: Blob, format: ExportFormat) {
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `hunter-license-${format}.${format === 'animated' ? 'gif' : 'png'}`
  document.body.appendChild(link)
  link.click()
  link.remove()
  // Allow mobile browsers time to start consuming the download URL.
  window.setTimeout(() => URL.revokeObjectURL(url), 60000)
}
