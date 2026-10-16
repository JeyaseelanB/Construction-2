import { useState } from 'react'
import { FEATURES } from '../data/site'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { ChevronUp } from './Icons'
import { SectionHeading } from './SectionHeading'

function FeatureCard({ item, index }: { item: (typeof FEATURES)[number]; index: number }) {
  const [flipped, setFlipped] = useState(false)
  // Where hover exists the back face flips into view on focus, so its link must stay
  // tabbable. Where it does not, the "View details" button is the only way in — keep
  // the hidden face out of the tab order until it is actually showing.
  const canHover = useMediaQuery('(hover: hover)')

  return (
    <div
      className="fx-reveal group/card [perspective:1600px]"
      data-reveal-delay={index * 140}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className={`relative min-h-[420px] w-full transition-transform duration-700 [transform-style:preserve-3d] sm:min-h-[500px] lg:min-h-[520px] group-hover/card:[transform:rotateY(180deg)] lg:group-focus-within/card:[transform:rotateY(180deg)] ${
          flipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* ---------- front ---------- */}
        <div className="absolute inset-0 flex flex-col justify-end overflow-hidden [backface-visibility:hidden]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${item.image})` }}
          />
          <div className="relative flex items-center justify-between gap-4 bg-navy/70 px-5 py-5 sm:px-[50px] sm:py-[34px]">
            <h3 className="font-display text-[18px] font-medium text-white sm:text-[22px] lg:text-[24px] lg:leading-[42px]">
              {item.title}
            </h3>
            <ChevronUp className="h-5 w-5 shrink-0 text-white" />
          </div>
        </div>

        {/* ---------- back ---------- */}
        <div
          inert={!canHover && !flipped}
          className="absolute inset-0 flex flex-col items-center justify-center bg-gold/95 px-6 py-12 text-center shadow-[0_10px_50px_rgba(36,51,68,0.2)] [backface-visibility:hidden] [transform:rotateY(180deg)] sm:px-[25px] sm:py-20"
        >
          <p className="mb-8 font-display text-[20px] font-medium text-navy sm:mb-[50px] sm:text-[24px]">
            {item.title}
          </p>
          <p className="text-[15px] leading-[1.6] text-navy sm:text-[18px]">{item.body}</p>
          <a
            href="#services"
            className="mt-8 inline-block bg-white px-[35px] py-[15px] font-display text-[16px] font-medium text-navy shadow-[0_10px_50px_rgba(36,51,68,0.15)] transition-colors duration-300 hover:bg-navy hover:text-gold sm:mt-[50px]"
          >
            Learn More ...
          </a>
        </div>
      </div>

      {/* keyboard / touch affordance */}
      <button
        type="button"
        onClick={() => setFlipped((v) => !v)}
        aria-expanded={flipped}
        className="mt-3 block w-full text-center text-[13px] uppercase tracking-wider text-white/60 transition-colors hover:text-gold lg:hidden"
      >
        {flipped ? 'Hide details' : 'View details'}
      </button>
    </div>
  )
}

export function Features() {
  return (
    <section id="features" className="relative py-20 lg:py-[110px]">
      {/* the band stops short of the section bottom so the cards overhang onto the white */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 top-0 bg-navy bg-cover bg-center lg:bottom-[191px]"
        style={{ backgroundImage: 'url(/images/row-bg.webp)' }}
      />

      <div className="shell relative">
        <img
          src="/images/safety-icon.webp"
          alt=""
          aria-hidden="true"
          width={80}
          height={67}
          className="fx-reveal mx-auto mb-8 h-auto w-[62px] lg:mb-14 lg:w-[80px]"
        />

        <SectionHeading
          watermark=""
          eyebrow="FEATURES AT A GLANCE"
          title="We know what your needs are"
          tone="light"
          className="fx-reveal"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-[110px] lg:grid-cols-3 lg:gap-10">
          {FEATURES.map((item, i) => (
            <FeatureCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
