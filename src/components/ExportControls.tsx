import { useEffect, useId, useRef, useState } from 'react'
import type { AuraStyle, CardTheme } from './HunterLicense'
import type { ExportFormat } from '../utils/exportLicense'
import './ExportControls.css'

const OPTIONS: { format: ExportFormat; label: string }[] = [
  { format: 'plain', label: 'PNG — Plain' },
  { format: 'holographic', label: 'PNG — Holographic' },
  { format: 'animated', label: 'GIF — Animated' },
]

type Props = {
  name: string
  licenseNumber: string
  theme: CardTheme
  aura: AuraStyle
}

export default function ExportControls(props: Props) {
  const [open, setOpen] = useState(false)
  const [openAbove, setOpenAbove] = useState(true)
  const [processing, setProcessing] = useState(false)
  const [progress, setProgress] = useState({ value: 0, label: '' })
  const [error, setError] = useState('')
  const container = useRef<HTMLDivElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)
  const busy = useRef(false)
  const menuId = useId()

  function openMenu() {
    const bounds = trigger.current?.getBoundingClientRect()
    setOpenAbove(!bounds || bounds.top >= 160)
    setOpen(true)
  }

  useEffect(() => {
    if (!open) return
    const outside = (event: PointerEvent) => {
      if (!container.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('pointerdown', outside)
    return () => document.removeEventListener('pointerdown', outside)
  }, [open])

  async function handleExport(format: ExportFormat) {
    if (busy.current) return
    busy.current = true
    setOpen(false)
    setError('')
    setProcessing(true)
    setProgress({ value: 0, label: 'Preparing export…' })
    trigger.current?.focus()
    try {
      const { exportLicense, downloadExport } = await import('../utils/exportLicense')
      const blob = await exportLicense(props, format, (value, label) => {
        setProgress({ value, label })
      })
      downloadExport(blob, format)
      setProgress({ value: 100, label: 'Download ready.' })
    } catch (cause) {
      console.error('License export failed:', cause)
      setError(format === 'animated'
        ? 'Export failed. Please try again or choose a PNG export.'
        : 'Export failed. Please try again.')
    } finally {
      busy.current = false
      setProcessing(false)
    }
  }

  return (
    <div
      className="export-controls"
      ref={container}
      aria-busy={processing}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false)
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          setOpen(false)
          trigger.current?.focus()
        }
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
          event.preventDefault()
          if (!open) {
            if (processing) return
            openMenu()
            requestAnimationFrame(() => {
              const items = container.current?.querySelectorAll<HTMLButtonElement>('.export-menu button')
              items?.[event.key === 'ArrowUp' ? items.length - 1 : 0]?.focus()
            })
          } else {
            const items = Array.from(container.current?.querySelectorAll<HTMLButtonElement>('.export-menu button') ?? [])
            const current = items.indexOf(document.activeElement as HTMLButtonElement)
            const next = current === -1
              ? event.key === 'ArrowDown' ? 0 : items.length - 1
              : (current + (event.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length
            items[next]?.focus()
          }
        }
      }}
    >
      <button
        ref={trigger}
        type="button"
        className="export-button export-trigger"
        aria-expanded={open}
        aria-controls={menuId}
        disabled={processing}
        onClick={() => open ? setOpen(false) : openMenu()}
      >
        {processing ? 'Exporting…' : 'Export'}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="m3 4.5 3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div
        className={`export-menu${open ? ' export-menu--open' : ''}${openAbove ? '' : ' export-menu--below'}`}
        id={menuId}
        role="group"
        aria-label="Export options"
        inert={!open}
      >
        {OPTIONS.map(({ format, label }) => (
          <button key={format} type="button" disabled={processing} onClick={() => void handleExport(format)}>
            {label}
          </button>
        ))}
      </div>
      <div className="export-status" role="status" aria-live="polite">
        {processing && (
          <>
            <span>{progress.label}</span>
            <progress max="100" value={progress.value} aria-label="Export progress" />
          </>
        )}
      </div>
      {error && <p className="export-error" role="alert">{error}</p>}
    </div>
  )
}
