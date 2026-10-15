import { FOOTER_ABOUT, FOOTER_LINKS, FOOTER_SOCIALS } from '../data/site'
import { SOCIAL_ICONS } from './socialIcons'

export function Footer() {
  return (
    <footer className="relative">
      <div className="bg-navy pb-16 pt-14 lg:pb-[70px] lg:pt-[60px]">
        <div className="shell text-center">
          <img
            src="/images/footer-logo-construction.png"
            alt="XTRA Construction"
            width={540}
            height={100}
            loading="lazy"
            className="mx-auto mb-8 h-auto w-[200px] lg:mb-[50px] lg:w-[270px]"
          />

          <p className="mx-auto max-w-[760px] text-[14px] leading-[1.9] text-white/85 lg:text-[20px] lg:leading-[2]">
            {FOOTER_ABOUT.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>

          <ul className="mt-8 flex items-center justify-center gap-3 lg:mt-[50px]">
            {FOOTER_SOCIALS.map((s) => {
              const Icon = SOCIAL_ICONS[s.icon]
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-9 w-9 place-items-center bg-gold text-navy transition-colors duration-300 hover:bg-white hover:text-navy lg:h-[38px] lg:w-[38px]"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className="bg-white">
        <div className="shell flex flex-col items-center justify-between gap-4 py-7 text-center sm:flex-row sm:text-left">
          <p className="text-[14px] text-navy/60 lg:text-[16px]">© 2026 XTRA, Powered by WordPress</p>

          <ul className="flex items-center gap-4 lg:gap-6">
            {FOOTER_LINKS.map((link, i) => (
              <li key={link.label} className="flex items-center gap-4 lg:gap-6">
                {i > 0 && <span aria-hidden="true" className="h-4 w-px bg-navy/10" />}
                <a
                  href={link.href}
                  className="text-[14px] text-navy/65 transition-colors duration-200 hover:text-gold lg:text-[16px]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
