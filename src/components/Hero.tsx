import { useCallback, useEffect, useRef, useState } from 'react'
import { HERO_SLIDE_ONE, HERO_SLIDE_TWO } from '../data/site'
import { PlayIcon } from './Icons'

const SLIDE_COUNT = 2
const AUTOPLAY_MS = 7000

/** Angled gold panels that fan across the right half of the first slide. */
function SkewPanels() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="relative mx-auto h-full w-full max-w-[1280px]">
        {[
          { left: '63.8%', bg: 'rgba(244,192,59,0.25)', delay: '0.15s' },
          { left: '75.5%', bg: 'rgba(244,192,59,0.25)', delay: '0s' },
          { left: '87.3%', bg: '#f4c03b', delay: '0.3s' },
        ].map((panel) => (
          <span
            key={panel.left}
            className="hero-panel absolute -top-[1%] block h-[110%] w-[200vw] origin-center"
            style={{
              left: panel.left,
              background: panel.bg,
              transform: 'skewX(-33deg)',
              animationDelay: panel.delay,
            }}
          />
        ))}
      </div>
    </div>
  )
}

function SlideOne({ activeKey }: { activeKey: number }) {
  const s = HERO_SLIDE_ONE
  return (
    <div className="absolute inset-0 bg-white" key={activeKey}>
      <SkewPanels />

      {/* centred 1280px stage, mirroring the reference slider grid */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="relative mx-auto h-full w-full max-w-[1280px]">
          <img
            src={s.image}
            alt=""
            aria-hidden="true"
            width={900}
            height={830}
            fetchPriority="high"
            className="hero-model absolute bottom-0 right-[-14%] h-[38%] w-auto max-w-none select-none xs:h-[44%] sm:right-[-4%] sm:h-[64%] lg:bottom-[-1%] lg:left-[27.3%] lg:right-auto lg:h-[83%]"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1280px] flex-col justify-start px-5 pt-[100px] sm:justify-center sm:px-8 sm:pt-0 lg:justify-start lg:pt-[357px] xl:px-0">
        <div className="w-full max-w-[300px] xs:max-w-[340px] sm:max-w-none">
          <p className="hero-in hero-d1 mb-3 font-body text-[15px] font-medium leading-[25px] text-navy lg:hidden">
            {s.kicker}
          </p>

          <h1 className="hero-in hero-d2 font-display text-[36px] font-bold uppercase leading-[0.78] tracking-[-0.01em] text-navy xs:text-[42px] sm:text-[56px] lg:text-[80px] lg:leading-[62px]">
            {s.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <span className="block text-gold">{s.titleAccent}</span>
          </h1>

          <p className="hero-in hero-d3 mt-4 font-body text-[15px] leading-[1.45] text-navy xs:text-[16px] sm:text-[22px] lg:mt-[54px] lg:text-[30px] lg:leading-[40px]">
            {s.text.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>

          <a
            href={s.videoHref}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="hero-in hero-d4 group mt-7 inline-flex items-center gap-4 lg:ml-[6px] lg:mt-[88px] lg:gap-[44px]"
          >
            <span className="grid h-[54px] w-[54px] shrink-0 place-items-center rounded-full bg-[#384043] text-gold shadow-[0_0_0_4px_#e9eaec] transition-all duration-300 group-hover:scale-105 group-hover:bg-gold group-hover:text-navy sm:shadow-[0_0_0_6px_#e9eaec] lg:h-[90px] lg:w-[90px] lg:shadow-[0_0_0_10px_#e9eaec]">
              <PlayIcon className="ml-1 h-4 w-4 lg:h-6 lg:w-6" />
            </span>
            <span className="block leading-[32px]">
              <span className="block text-[14px] text-[#6b829d] lg:text-[18px]">{s.videoLabel}</span>
              <span className="block font-body text-[17px] font-bold text-navy lg:text-[22px]">
                {s.videoTitle}
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

function SlideTwo({ activeKey }: { activeKey: number }) {
  const s = HERO_SLIDE_TWO
  return (
    <div className="absolute inset-0" key={activeKey}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${s.background})` }}
        aria-hidden="true"
      />
      <div className="shell relative z-10 flex h-full flex-col items-center justify-center text-center lg:pt-[104px]">
        <p className="hero-in hero-d1 max-w-[1060px] bg-navy px-6 py-5 font-body text-[19px] font-bold leading-tight text-gold sm:px-10 sm:py-7 sm:text-[32px] lg:max-w-none lg:px-[60px] lg:pb-[80px] lg:pt-10 lg:text-[44px] lg:leading-[44px] xl:text-[52px] xl:leading-[52px]">
          {s.top}
        </p>
        <p className="hero-in hero-d2 -mt-4 max-w-[900px] bg-gold px-6 py-4 font-body text-[16px] font-bold leading-tight text-navy sm:px-10 sm:py-6 sm:text-[26px] lg:-mt-[36px] lg:px-[60px] lg:py-10 lg:text-[40px] lg:leading-[40px]">
          {s.bottom}
        </p>
      </div>
    </div>
  )
}

export function Hero() {
  const [index, setIndex] = useState(0)
  const [tick, setTick] = useState(0)
  const [paused, setPaused] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  const go = useCallback((next: number) => {
    setIndex(((next % SLIDE_COUNT) + SLIDE_COUNT) % SLIDE_COUNT)
    setTick((t) => t + 1)
  }, [])

  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    timer.current = window.setTimeout(() => go(index + 1), AUTOPLAY_MS)
    return () => window.clearTimeout(timer.current)
  }, [index, paused, go])

  return (
    <section
      id="home"
      aria-label="Highlights"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      className="relative h-[540px] overflow-hidden bg-white sm:h-[640px] lg:h-[1000px]"
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          role="group"
          aria-roledescription="slide"
          aria-label={`Slide ${i + 1} of ${SLIDE_COUNT}`}
          aria-hidden={index !== i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === i ? 'z-[2] opacity-100' : 'z-[1] opacity-0'
          }`}
        >
          {index === i &&
            (i === 0 ? <SlideOne activeKey={tick} /> : <SlideTwo activeKey={tick} />)}
        </div>
      ))}

      <div className="absolute inset-x-0 bottom-5 z-10 flex justify-center gap-2.5">
        {[0, 1].map((i) => (
          <button
            key={i}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={index === i}
            className={`h-[3px] transition-all duration-300 ${
              index === i ? 'w-10 bg-navy' : 'w-5 bg-navy/30 hover:bg-navy/60'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
