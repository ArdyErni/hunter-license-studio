import type { AuraStyle } from '../components/HunterLicense'

// Retain the existing two-face PNG layout and each card's 420:600 ratio.
export const EXPORT_LAYOUT = { panelWidth: 420, panelHeight: 600, padding: 12, gap: 16, width: 880, height: 624 }
export const GIF_FPS = 15
export const GIF_FRAMES = GIF_FPS * 4

// Colors and strengths mirror the preview's .hl-aura-* definitions.
const AURAS = {
  ten: { color: '210, 170, 60', secondary: '220, 180, 60', strength: 0.35 },
  zetsu: { color: '0, 0, 0', secondary: '0, 0, 0', strength: 0 },
  ren: { color: '200, 30, 30', secondary: '200, 30, 30', strength: 0.5 },
  hatsu: { color: '150, 50, 210', secondary: '200, 40, 160', strength: 0.4 },
} satisfies Record<AuraStyle, { color: string; secondary: string; strength: number }>

/** Apply ZETSU once to the fixed artwork without relying on canvas filters. */
export function prepareAuraBase(base: HTMLCanvasElement, aura: AuraStyle) {
  if (aura !== 'zetsu') return
  const context = base.getContext('2d')
  if (!context) throw new Error('Canvas rendering is unavailable.')
  const image = context.getImageData(0, 0, base.width, base.height)
  for (let offset = 0; offset < image.data.length; offset += 4) {
    const luminance = image.data[offset] * 0.2126 + image.data[offset + 1] * 0.7152 + image.data[offset + 2] * 0.0722
    for (let channel = 0; channel < 3; channel++) {
      image.data[offset + channel] = (luminance * 0.3 + image.data[offset + channel] * 0.7) * 0.96
    }
  }
  context.putImageData(image, 0, 0)
}

/** Render a deterministic frame. No live CSS animations or changing card text. */
export function renderExportFrame(
  base: HTMLCanvasElement,
  target: HTMLCanvasElement,
  aura: AuraStyle,
  phase: number,
) {
  const context = target.getContext('2d')
  if (!context) throw new Error('Canvas rendering is unavailable.')
  const { panelWidth, panelHeight, padding, gap, width } = EXPORT_LAYOUT
  const scale = target.width / width
  const angle = phase * Math.PI * 2
  const hx = 0.5 + Math.cos(angle) * 0.34
  const hy = 0.5 + Math.sin(angle) * 0.34
  const pulse = (1 - Math.cos(angle)) / 2
  const style = AURAS[aura]

  context.clearRect(0, 0, target.width, target.height)
  context.drawImage(base, 0, 0, target.width, target.height)
  context.save()
  context.scale(scale, scale)

  for (let side = 0; side < 2; side++) {
    const x = padding + side * (panelWidth + gap)
    const y = padding
    const shape = new Path2D()
    shape.roundRect(x, y, panelWidth, panelHeight, panelWidth * 0.045)

    if (style.strength > 0) {
      context.save()
      // Keep the ambient glow outside both faces so it cannot wash out text.
      const outside = new Path2D()
      outside.rect(0, 0, width, EXPORT_LAYOUT.height)
      for (let face = 0; face < 2; face++) {
        outside.roundRect(padding + face * (panelWidth + gap), y, panelWidth, panelHeight, panelWidth * 0.045)
      }
      context.clip(outside, 'evenodd')
      context.shadowColor = `rgba(${style.color}, ${style.strength * (0.7 + 0.3 * pulse)})`
      context.shadowBlur = (34 + 12 * pulse) * scale
      context.fillStyle = `rgb(${style.secondary})`
      context.fill(shape)
      context.restore()
    }

    context.save()
    context.clip(shape)
    // Same conic rainbow and directional gloss as the preview. The periodic
    // orbit samples [0, 1), so the final frame leads naturally into the first.
    const rainbow = context.createConicGradient(hx * Math.PI * 2, x + hx * panelWidth, y + hy * panelHeight)
    for (let stop = 0; stop <= 6; stop++) rainbow.addColorStop(stop / 6, `hsla(${stop * 60}, 80%, 60%, 0.18)`)
    context.globalCompositeOperation = 'color-dodge'
    context.globalAlpha = aura === 'zetsu' ? 0.4 : 1
    context.fillStyle = rainbow
    context.fill(shape)

    const gloss = context.createLinearGradient(x + (1 - hx) * panelWidth, y, x + hx * panelWidth, y + panelHeight)
    gloss.addColorStop(0, 'rgba(255, 255, 255, 0.22)')
    gloss.addColorStop(0.5, 'rgba(255, 255, 255, 0)')
    gloss.addColorStop(1, 'rgba(0, 0, 0, 0.08)')
    context.globalCompositeOperation = 'overlay'
    context.fillStyle = gloss
    context.fill(shape)
    context.restore()
  }
  context.restore()
  return context
}
