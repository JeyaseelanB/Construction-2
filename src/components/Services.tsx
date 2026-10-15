import { SERVICES } from '../data/site'
import { SectionHeading } from './SectionHeading'

function ServiceCard({ item, index }: { item: (typeof SERVICES)[number]; index: number }) {
  return (
    <article
      className="fx-reveal group relative flex flex-col items-center bg-white px-6 pb-20 pt-10 text-center shadow-[0_10px_50px_rgba(36,51,68,0.2)] transition-transform duration-500 hover:-translate-y-2 sm:px-10 sm:pt-[50px]"
      data-reveal-delay={index * 130}
    >
      <div className="relative mb-6 grid h-[125px] w-[180px] max-w-full place-items-center">
        <span
          aria-hidden="true"
          className="absolute inset-x-6 bottom-2 top-2 bg-gold/25 transition-transform duration-500 group-hover:scale-110"
          style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}
        />
        <img
          src={item.icon}
          alt=""
          aria-hidden="true"
          width={180}
          height={125}
          loading="lazy"
          className="relative h-auto w-[110px] transition-transform duration-500 group-hover:-translate-y-1.5 sm:w-[130px]"
        />
      </div>

      <h3 className="font-display text-[20px] font-bold text-navy sm:text-[24px]">{item.title}</h3>
      <span aria-hidden="true" className="mt-3 block h-[3px] w-[90px] bg-gold" />

      <p className="mt-6 text-[16px] leading-[1.8] text-ink sm:text-[18px]">{item.body}</p>

      <a
        href="#services"
        className="absolute bottom-0 left-1/2 inline-block -translate-x-1/2 translate-y-[34px] whitespace-nowrap bg-navy px-10 py-[15px] font-display text-[16px] font-bold text-white shadow-[0_15px_50px_rgba(36,51,68,0.15)] transition-colors duration-300 hover:bg-gold hover:text-navy"
      >
        Read More
      </a>
    </article>
  )
}

export function Services({ children }: { children?: React.ReactNode }) {
  return (
    <section id="services" className="relative">
      <div className="shell pb-[160px] pt-16 lg:pb-[200px] lg:pt-[110px]">
        <SectionHeading
          watermark="SERVICES"
          eyebrow="WHAT WE CAN DO FOR YOU"
          title="Our construction services"
          className="fx-reveal"
        />
      </div>

      {/* `flow-root` keeps the cards' negative offset from collapsing the panel */}
      <div className="flow-root bg-mist pb-16 lg:pb-24">
        <div className="shell">
          <div className="-mt-[130px] grid gap-14 sm:gap-16 lg:-mt-[155px] lg:grid-cols-[26fr_46fr_26fr] lg:gap-[25px]">
            {SERVICES.map((item, i) => (
              <ServiceCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>

        {children}
      </div>
    </section>
  )
}
