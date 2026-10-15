import { PROCESS_STEPS } from '../data/site'
import { SectionHeading } from './SectionHeading'

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-16 lg:py-[110px]">
      <div className="shell">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* ---------- intro + photo ---------- */}
          <div>
            <SectionHeading
              watermark="HOW?"
              eyebrow="PROCESS OF CONSTRUCTION"
              title="How it works |in construction?"
              align="left"
              className="fx-reveal"
            />

            <p className="fx-reveal mt-6 text-center text-[17px] leading-[1.9] text-ink lg:text-left lg:text-[20px]">
              Slogan creation for your construction company is
              <br className="hidden lg:block" /> crucial for the overall branding.
            </p>

            <div className="fx-reveal relative mt-12">
              <span
                aria-hidden="true"
                className="absolute -bottom-10 left-0 right-[10%] top-[30%] bg-gold lg:-left-[calc((100vw-100%)/2)]"
              />
              <img
                src="/images/process.jpg"
                alt="Workers tying rebar on site"
                width={650}
                height={370}
                loading="lazy"
                className="relative m-5 block h-auto w-[calc(100%-2.5rem)] shadow-[0_15px_60px_rgba(36,51,68,0.2)] lg:m-0 lg:w-full"
              />
            </div>
          </div>

          {/* ---------- steps on a bleeding navy panel ---------- */}
          <div className="relative py-14 lg:py-24">
            <span
              aria-hidden="true"
              className="absolute inset-y-0 left-[60px] right-0 bg-navy lg:-right-[calc((100vw-100%)/2)] lg:left-0"
            />

            <ol className="relative space-y-12 lg:space-y-16">
              {PROCESS_STEPS.map((step, i) => (
                <li
                  key={step.number}
                  className="fx-reveal flex items-center gap-6 lg:-ml-[68px] lg:gap-10"
                  data-reveal-delay={i * 150}
                >
                  <span className="grid h-[92px] w-[92px] shrink-0 place-items-center bg-gold font-display text-[30px] font-light text-white shadow-[0_10px_40px_rgba(36,51,68,0.2)] lg:h-[135px] lg:w-[135px] lg:text-[44px]">
                    {step.number}
                  </span>
                  <div className="pr-5 lg:pr-10">
                    <h3 className="font-display text-[20px] font-bold text-white lg:text-[28px]">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-[14px] leading-relaxed text-white/55 lg:text-[16px]">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
