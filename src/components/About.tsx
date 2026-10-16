import { ABOUT_POINTS } from '../data/site'
import { CheckIcon } from './Icons'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-16 lg:py-[110px]">
      <div className="shell">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ---------- image, bleeding to the left viewport edge on desktop ---------- */}
          <div className="fx-reveal relative order-2 lg:order-1 lg:-ml-[calc((100vw-min(100vw,1360px))/2+2rem)]">
            <span
              aria-hidden="true"
              className="absolute -bottom-5 left-0 right-[14%] top-0 bg-gold lg:bottom-[-80px] lg:right-[16%] lg:top-[-80px]"
            />
            <img
              src="/images/about-company.webp"
              alt="Two engineers reviewing plans on a construction site"
              width={800}
              height={765}
              loading="lazy"
              className="relative m-5 block h-auto w-[calc(100%-2.5rem)] object-cover shadow-[0_15px_60px_rgba(36,51,68,0.18)] lg:m-0 lg:w-full"
            />
          </div>

          {/* ---------- copy ---------- */}
          <div className="relative z-[1] order-1 lg:order-2">
            <SectionHeading
              watermark="ABOUT"
              eyebrow="ABOUT OUR COMPANY"
              title="Always dedicated and devoted"
              align="left"
              className="fx-reveal"
            />

            <p className="fx-reveal mt-8 text-center text-[17px] leading-[1.9] text-ink lg:text-left lg:text-[20px]">
              Slogan creation for your construction company is crucial for the overall branding. And
              branding in today’s world can’t be ignored, We hope that the above Construction Slogans.
              Don’t forget to share it on social media and related building communities.
            </p>

            <ul className="fx-reveal mt-10 grid gap-x-8 gap-y-5 xs:grid-cols-2 lg:mt-12">
              {ABOUT_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-4">
                  <CheckIcon className="h-5 w-5 shrink-0 text-gold" />
                  <span className="font-display text-[15px] font-semibold leading-snug text-navy lg:text-[17px]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
