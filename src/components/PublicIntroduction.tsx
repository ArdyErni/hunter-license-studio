import { useLayoutEffect, useRef } from 'react'

/** Reuse the public HTML in its existing editor position, with one source of copy. */
export default function PublicIntroduction() {
  const slotRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const introduction = document.getElementById('public-introduction')
    const slot = slotRef.current
    if (!introduction || !slot) return

    const originalParent = introduction.parentNode
    const nextSibling = introduction.nextSibling
    slot.appendChild(introduction)
    document.documentElement.classList.remove('js-starting')

    // Also supports StrictMode's setup/cleanup cycle and a clean app unmount.
    return () => {
      if (introduction.parentNode === slot && originalParent) {
        originalParent.insertBefore(
          introduction,
          nextSibling?.parentNode === originalParent ? nextSibling : null,
        )
      }
    }
  }, [])

  return <div className="public-introduction-slot" ref={slotRef} />
}
