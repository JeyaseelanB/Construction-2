import { useCallback, useEffect, useRef, useState } from 'react'
import { TESTIMONIALS } from '../data/site'
import { QuoteGlyph } from './Icons'
import { SectionHeading } from './SectionHeading'

const AUTOPLAY_MS = 8000

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchX = useRef<number | null>(null)

  const go = useCallback((next: number) => {
    const len = TESTIMONIALS.length
    setIndex(((next % len) + len) % len)
  }, [])

  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = window.setTimeout(() => go(index + 1), AUTOPLAY_MS)
    return () => window.clearTimeout(t)
  }, [index, paused, go])

  return (
    <section id="testimonials" className="relative overflow-hidden py-16 lg:py-[110px]">
      <div className="shell">
        <SectionHeading
          watermark="TESTIMONIALS"
          eyebrow="SEE WHAT SAYS OUR HAPPY CLIENTS"
          title="Our happy customers"
          className="fx-reveal"
        />

        <div
          className="fx-reveal relative mt-14 lg:mt-24"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return
            const delta = e.changedTouches[0].clientX - touchX.current
            if (Math.abs(delta) > 50) go(index + (delta < 0 ? 1 : -1))
            touchX.current = null
          }}
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight') go(index + 1)
            if (e.key === 'ArrowLeft') go(index - 1)
          }}
          role="group"
          aria-roledescription="carousel"
          aria-label="Customer testimonials"
          tabIndex={0}
        >
          <div className="relative lg:ml-[110px]">
            {TESTIMONIALS.map((t, i) => (
              <article
                key={t.author}
                aria-hidden={index !== i}
                className={`bg-white px-6 py-10 shadow-[0_20px_70px_rgba(36,51,68,0.13)] transition-opacity duration-500 sm:px-14 sm:py-16 lg:pl-[150px] lg:pr-20 ${
                  index === i
                    ? 'relative z-[1] opacity-100'
                    : 'pointer-events-none absolute inset-0 opacity-0'
                }`}
              >
                {/* avatar with the offset gold frame */}
                <div className="relative mb-7 lg:absolute lg:-left-[95px] lg:top-14 lg:mb-0">
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-4 -left-4 h-full w-full border-[6px] border-gold"
                  />
                  <img
                    src={t.avatar}
                    alt=""
                    aria-hidden="true"
                    width={190}
                    height={190}
                    loading="lazy"
                    className="relative h-[110px] w-[110px] object-cover shadow-[0_15px_40px_rgba(36,51,68,0.15)] lg:h-[190px] lg:w-[185px]"
                  />
                </div>

                <blockquote>
                  <p className="text-[16px] leading-[1.9] text-navy sm:text-[19px] sm:leading-[2.1]">
                    {t.quote}
                  </p>
                  <footer className="mt-7 font-body text-[15px] italic text-ink">{t.author}</footer>
                </blockquote>

                <QuoteGlyph
                  className="pointer-events-none absolute bottom-6 right-6 h-10 w-14 text-gold/30 sm:bottom-10 sm:right-10 sm:h-14 sm:w-20"
                  aria-hidden="true"
                />
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center gap-2.5">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.author}
                type="button"
                onClick={() => go(i)}
                aria-label={`Show testimonial ${i + 1}`}
                aria-current={index === i}
                className={`h-[3px] transition-all duration-300 ${
                  index === i ? 'w-10 bg-gold' : 'w-5 bg-navy/20 hover:bg-navy/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
