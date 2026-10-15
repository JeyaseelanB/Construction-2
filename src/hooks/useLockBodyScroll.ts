import { useEffect } from 'react'

/** Freezes page scrolling (without layout shift) while an overlay is open. */
export function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return
    const { body } = document
    const scrollbar = window.innerWidth - document.documentElement.clientWidth
    const prevOverflow = body.style.overflow
    const prevPadding = body.style.paddingRight

    body.style.overflow = 'hidden'
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`

    return () => {
      body.style.overflow = prevOverflow
      body.style.paddingRight = prevPadding
    }
  }, [locked])
}
