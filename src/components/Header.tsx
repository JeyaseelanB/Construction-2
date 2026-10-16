import { useEffect, useRef, useState } from 'react'
import {
  NAV,
  PHONE_DISPLAY,
  PHONE_HREF,
  SOCIALS,
  TRENDING_SEARCHES,
  type NavItem,
} from '../data/site'
import {
  ChevronDown,
  ChevronRight,
  CloseIcon,
  FlameIcon,
  HomeIcon,
  MenuIcon,
  PhoneIcon,
  SearchIcon,
} from './Icons'
import { SOCIAL_ICONS } from './socialIcons'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'

/* ------------------------------------------------------------------ */
/* Top utility bar                                                     */
/* ------------------------------------------------------------------ */

function TopBar() {
  return (
    <div className="hidden bg-navy lg:block">
      <div className="mx-auto flex w-full max-w-[1360px] items-center justify-between gap-6 px-5 py-[9px] sm:px-8 min-[1381px]:max-w-[1440px] min-[1381px]:px-10">
        <div className="flex items-center gap-3">
          <span className="text-[13px] leading-none text-[#a0a0a0]">Have any questions? call us</span>
          <a
            href={PHONE_HREF}
            className="group flex items-center gap-2.5 transition-colors hover:text-gold"
          >
            <PhoneIcon className="h-[15px] w-[15px] text-gold" />
            <span className="text-[14px] font-bold leading-none text-white transition-colors group-hover:text-gold">
              {PHONE_DISPLAY}
            </span>
          </a>
        </div>

        <div className="flex items-center">
          {SOCIALS.map((s) => {
            const Icon = SOCIAL_ICONS[s.icon]
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label={s.label}
                className="group relative px-[14px] py-[9px] text-white transition-colors hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Desktop navigation                                                  */
/* ------------------------------------------------------------------ */

function DesktopSubMenu({ items, nested = false }: { items: NavItem[]; nested?: boolean }) {
  return (
    <ul
      className={`invisible absolute z-20 min-w-[220px] translate-y-2 bg-navy py-2.5 opacity-0 shadow-[0_10px_50px_rgba(0,0,0,0.18)] transition-all duration-200 group-hover/item:visible group-hover/item:translate-y-0 group-hover/item:opacity-100 group-focus-within/item:visible group-focus-within/item:translate-y-0 group-focus-within/item:opacity-100 ${
        nested
          ? // leftwards by default; rightwards from xl, where there is room
            'top-0 left-auto right-full xl:left-full xl:right-auto'
          : 'left-0 top-full'
      }`}
    >
      {items.map((child) => (
        <li key={child.label} className="group/item relative">
          <a
            href={child.href}
            className="flex items-center justify-between gap-4 px-5 py-2.5 text-[15px] text-[#e2e2e2] transition-colors hover:bg-gold hover:text-navy"
          >
            {child.label}
            {child.children && <ChevronRight className="h-3.5 w-3.5" />}
          </a>
          {child.children && <DesktopSubMenu items={child.children} nested />}
        </li>
      ))}
    </ul>
  )
}

function DesktopNav({ active }: { active: string }) {
  return (
    <nav aria-label="Primary">
      <ul className="flex items-center">
        {NAV.map((item) => {
          const isActive = active === item.href
          return (
            <li
              key={item.label}
              className="group/item relative ml-6 flex items-center xl:ml-10"
            >
              <a
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                aria-haspopup={item.children ? true : undefined}
                className="relative my-7 flex min-h-[28px] items-center gap-1.5 font-display text-[16px] font-medium leading-[28px] text-navy"
              >
                <span className="relative z-[1] inline-flex items-center gap-1.5">
                  {item.label === 'Home' ? (
                    <>
                      <HomeIcon className="h-[18px] w-[18px]" />
                      <span className="sr-only">Home</span>
                    </>
                  ) : (
                    item.label
                  )}
                  {item.children && (
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover/item:rotate-180 group-focus-within/item:rotate-180" />
                  )}
                </span>
                {/* gold highlight that grows upward on hover, tracking the label width */}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute bottom-[1px] left-[-7px] right-[-7px] z-0 origin-bottom bg-gold/50 transition-[height] duration-300 ease-out ${
                    isActive ? 'h-2' : 'h-0 group-hover/item:h-2'
                  }`}
                />
              </a>
              {item.children && <DesktopSubMenu items={item.children} />}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

/* ------------------------------------------------------------------ */
/* Search dropdown                                                     */
/* ------------------------------------------------------------------ */

function HeaderSearch() {
  const [open, setOpen] = useState(false)
  const [term, setTerm] = useState('')
  const wrapRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const t = window.setTimeout(() => inputRef.current?.focus(), 80)

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      setOpen(false)
      buttonRef.current?.focus()
    }
    const onPointerDown = (e: PointerEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false)
    }
    // the static and sticky headers swap on scroll - never leave a panel behind
    const onScroll = () => setOpen(false)

    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.clearTimeout(t)
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('scroll', onScroll)
    }
  }, [open])

  return (
    <div ref={wrapRef} className="relative mx-5 flex items-center xl:mx-8">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Search box"
        aria-expanded={open}
        className={`transition-colors hover:text-gold ${open ? 'text-gold' : 'text-navy'}`}
      >
        <SearchIcon className="h-5 w-5" />
      </button>

      {/* panel geometry taken from the reference: 380x182, 5px radius, 30px padding */}
      <div
        className={`absolute right-[-30px] top-full z-50 mt-5 w-[min(380px,calc(100vw-40px))] origin-top-right rounded-[5px] bg-white/95 p-[30px] shadow-[1px_6px_20px_rgba(17,17,17,0.1)] backdrop-blur-sm transition-all duration-200 ease-out ${
          open ? 'visible scale-100 opacity-100' : 'invisible scale-95 opacity-0'
        }`}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setOpen(false)
          }}
          className="flex items-center border border-gold bg-white pl-2.5 pr-3"
        >
          <input
            ref={inputRef}
            type="search"
            name="s"
            required
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Type keyword to search ..."
            aria-label="Type keyword to search ..."
            className="w-full bg-transparent py-2.5 text-[13px] text-[#5b5b5b] outline-none placeholder:text-[#5b5b5b] [&::-webkit-search-cancel-button]:hidden"
          />
          <button
            type="submit"
            aria-label="Search"
            className="shrink-0 py-2.5 pl-3 text-navy transition-colors hover:text-gold"
          >
            <SearchIcon className="h-[18px] w-[18px]" />
          </button>
        </form>

        <p className="mt-[22px] flex items-center gap-1.5 font-display text-[14px] font-bold text-navy">
          <FlameIcon className="h-4 w-4" />
          Trending searches:
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          {TRENDING_SEARCHES.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => {
                setTerm(t)
                inputRef.current?.focus()
              }}
              className="rounded-[3px] border border-[#e4e4e4] px-2.5 py-1 text-[13px] text-navy transition-colors hover:border-gold hover:bg-gold hover:text-navy"
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Off-canvas mobile menu                                              */
/* ------------------------------------------------------------------ */

function MobileMenuItem({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const [open, setOpen] = useState(false)

  if (!item.children) {
    return (
      <li>
        <a
          href={item.href}
          onClick={onNavigate}
          className="flex items-center gap-2 border-b border-white/10 py-3.5 text-[15px] text-[#eaeaea] transition-colors hover:text-gold"
        >
          {item.label === 'Home' ? (
            <>
              <HomeIcon className="h-[18px] w-[18px]" />
              <span className="sr-only">Home</span>
            </>
          ) : (
            item.label
          )}
        </a>
      </li>
    )
  }

  return (
    <li>
      <div className="flex items-center justify-between border-b border-white/10">
        <a
          href={item.href}
          onClick={onNavigate}
          className="block py-3.5 text-[15px] text-[#eaeaea] transition-colors hover:text-gold"
        >
          {item.label}
        </a>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={`${open ? 'Collapse' : 'Expand'} ${item.label} submenu`}
          className="p-2 text-gold"
        >
          <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
      </div>
      <ul
        inert={!open}
        className={`grid overflow-hidden pl-4 transition-all duration-300 ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <li className="min-h-0 overflow-hidden">
          <ul>
            {item.children.map((c) => (
              <MobileMenuItem key={c.label} item={c} onNavigate={onNavigate} />
            ))}
          </ul>
        </li>
      </ul>
    </li>
  )
}

function OffCanvas({ open, onClose }: { open: boolean; onClose: () => void }) {
  useLockBodyScroll(open)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[95] bg-black/50 transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-[96] flex h-full w-[min(320px,85vw)] flex-col overflow-y-auto bg-linear-to-b from-navy to-[#191919] px-7 py-8 transition-transform duration-400 ease-out lg:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile navigation"
        inert={!open}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close hidden menu"
          className="self-end p-1 text-gold"
        >
          <CloseIcon className="h-6 w-6" />
        </button>

        <nav className="mt-4">
          <ul>
            {NAV.map((item) => (
              <MobileMenuItem key={item.label} item={item} onNavigate={onClose} />
            ))}
          </ul>
        </nav>

        <div className="mt-auto pt-10">
          <div className="flex items-center gap-2">
            {SOCIALS.map((s) => {
              const Icon = SOCIAL_ICONS[s.icon]
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center bg-white/10 text-white transition-colors hover:bg-gold hover:text-navy"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
          <p className="mt-6 text-[13px] text-white/50">© Copyright 2026</p>
        </div>
      </aside>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Header                                                              */
/* ------------------------------------------------------------------ */

export function Header() {
  const [stuck, setStuck] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 240)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the nav entry matching the section currently on screen.
  useEffect(() => {
    const ids = ['home', 'about', 'services', 'faq', 'blog', 'quote']
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))
    if (!sections.length) return

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      {/* ---- static header layered over the hero ---- */}
      <header
        inert={stuck}
        className={`absolute inset-x-0 top-0 z-50 transition-opacity duration-300 ${
          stuck ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
      >
        <TopBar />
        <HeaderRow compact={false} onMenu={() => setMenuOpen(true)} active={active} />
      </header>

      {/* ---- sticky header revealed on scroll ---- */}
      <div
        inert={!stuck}
        className={`fixed inset-x-0 top-0 z-50 bg-white shadow-[0_10px_50px_rgba(0,0,0,0.1)] transition-transform duration-400 ${
          stuck ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <HeaderRow compact onMenu={() => setMenuOpen(true)} active={active} />
      </div>

      <OffCanvas open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}

function HeaderRow({
  compact,
  onMenu,
  active,
}: {
  compact: boolean
  onMenu: () => void
  active: string
}) {
  return (
    <div className={compact ? '' : 'bg-white lg:bg-transparent'}>
      <div
        className={`mx-auto flex w-full max-w-[1360px] items-center justify-between gap-6 px-5 sm:px-8 min-[1381px]:max-w-[1440px] min-[1381px]:px-10 ${
          compact ? '' : 'lg:min-h-[204px]'
        }`}
      >
        <a
          href="#home"
          className={`block shrink-0 ${compact ? '' : 'lg:self-start'}`}
          aria-label="XTRA Construction — home"
        >
          <img
            src="/images/logo-construction.webp"
            alt="XTRA Construction"
            width={270}
            height={100}
            className={`h-auto transition-all duration-300 ${
              compact
                ? 'w-[120px] py-3 lg:w-[150px] xl:w-[180px]'
                : 'w-[120px] py-3 lg:w-[200px] lg:py-10 xl:w-[270px]'
            }`}
          />
        </a>

        {/* desktop */}
        <div className="hidden items-center lg:flex">
          <DesktopNav active={active} />

          <HeaderSearch />

          <a
            href="#quote"
            className="whitespace-nowrap bg-white px-5 py-4 font-display text-[15px] font-bold text-navy shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-colors duration-300 hover:bg-navy hover:text-gold xl:px-[30px] xl:py-[15px] xl:text-[16px]"
          >
            Free Consultation
          </a>
        </div>

        {/* mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={PHONE_HREF}
            aria-label={`Call ${PHONE_DISPLAY}`}
            className="grid h-11 w-11 place-items-center bg-gold text-navy transition-colors hover:bg-navy hover:text-gold"
          >
            <PhoneIcon className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={onMenu}
            aria-label="Open menu"
            className="grid h-11 w-11 place-items-center bg-navy text-gold transition-colors hover:bg-gold hover:text-navy"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
