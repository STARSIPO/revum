import { useEffect, useState, type RefObject } from 'react'

/** True once the page has scrolled past `threshold` px. */
export function useScrolled(threshold = 8): boolean {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return scrolled
}

/** Lock body scroll while `locked` is true (mobile menu / modal). */
export function useLockBody(locked: boolean): void {
  useEffect(() => {
    if (!locked) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [locked])
}

/** Close handler on Escape key. */
export function useEscape(active: boolean, onClose: () => void): void {
  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, onClose])
}

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])'

/** Trap Tab focus inside `ref` while active; restore focus on close. */
export function useFocusTrap(active: boolean, ref: RefObject<HTMLElement | null>): void {
  useEffect(() => {
    const el = ref.current
    if (!active || !el) return
    const prev = document.activeElement as HTMLElement | null
    const visible = () =>
      Array.from(el.querySelectorAll<HTMLElement>(FOCUSABLE)).filter((n) => n.offsetParent !== null)
    // Move focus into the dialog: first focusable, or the container itself.
    // Force a reflow first so freshly-revealed dialogs (visibility toggle)
    // are focusable, and use a setTimeout backup (fires even when the tab
    // is backgrounded, unlike requestAnimationFrame).
    const focusFirst = () => (visible()[0] ?? el).focus?.()
    void el.offsetHeight
    focusFirst()
    const timer = window.setTimeout(focusFirst, 40)
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      const f = visible()
      if (!f.length) return
      const first = f[0]
      const last = f[f.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    el.addEventListener('keydown', onKey)
    return () => {
      window.clearTimeout(timer)
      el.removeEventListener('keydown', onKey)
      prev?.focus?.()
    }
  }, [active, ref])
}
