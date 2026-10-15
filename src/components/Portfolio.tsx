import { PROJECTS } from '../data/site'
import { ExpandIcon } from './Icons'
import { SectionHeading } from './SectionHeading'

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-16 lg:py-[110px]">
      <div className="shell">
        <SectionHeading
          watermark="SERVICES"
          eyebrow="WE ARE PROFESSIONAL"
          title="Our latest projects"
          className="fx-reveal"
        />

        <ul className="mt-12 grid grid-cols-2 gap-5 lg:mt-20 lg:grid-cols-4">
          {PROJECTS.map((project, i) => (
            <li key={project.title} className="fx-reveal" data-reveal-delay={(i % 4) * 110}>
              <a
                href="#portfolio"
                className="group relative block aspect-square overflow-hidden"
                aria-label={`${project.title} — ${project.cats}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-navy/85 px-4 text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <ExpandIcon className="h-7 w-7 translate-y-3 text-gold transition-transform duration-500 group-hover:translate-y-0" />
                  <h3 className="translate-y-3 font-display text-[15px] font-semibold text-white transition-transform duration-500 group-hover:translate-y-0 lg:text-[18px]">
                    {project.title}
                  </h3>
                  <small className="block translate-y-3 text-[12px] text-white/65 transition-transform duration-500 group-hover:translate-y-0 lg:text-[13px]">
                    {project.cats}
                  </small>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
