import { CLIENT_LOGOS } from '../data/site'

export function Clients() {
  return (
    <section aria-label="Clients" className="relative">
      {/* the gold strip straddles the white page and the navy footer */}
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white" />
      <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-navy" />

      <div className="shell relative">
        <ul className="fx-reveal grid grid-cols-2 items-center justify-items-center gap-x-6 gap-y-8 bg-gold px-8 py-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-10 lg:px-12 lg:py-[55px]">
          {CLIENT_LOGOS.map((logo) => (
            <li key={logo.src} className="flex items-center justify-center">
              <a
                href="#portfolio"
                aria-label={logo.alt}
                className="block transition-transform duration-500 hover:-translate-y-1.5"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  width={193}
                  height={80}
                  loading="lazy"
                  className="h-auto w-[120px] opacity-85 transition-opacity duration-300 hover:opacity-100 lg:w-[160px]"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
