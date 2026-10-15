import { useEffect } from 'react'

/**
 * Adds `is-in` to every `.fx-reveal` element once it scrolls into view,
 * mirroring the entrance animations used across the reference page.
 */
export function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('.fx-reveal:not(.is-in)'))
    if (!nodes.length) return

    if (!('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          const delay = Number(el.dataset.revealDelay ?? 0)
          window.setTimeout(() => el.classList.add('is-in'), delay)
          io.unobserve(el)
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    )

    nodes.forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [])
}
