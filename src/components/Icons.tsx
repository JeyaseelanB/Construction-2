import type { SVGProps } from 'react'

export type IconProps = SVGProps<SVGSVGElement>

const base = (props: IconProps) => ({
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  'aria-hidden': true,
  focusable: false,
  ...props,
})

export const FacebookIcon = (props: IconProps) => (
  <svg {...base(props)} fill="currentColor">
    <path d="M14.5 8.5h2.3V5.6c-.4-.06-1.76-.18-3.34-.18-3.3 0-5.56 2.08-5.56 5.9V14H4.9v3.3h3v8.3h3.6v-8.3h3l.46-3.3h-3.46v-2.35c0-.95.26-1.6 1.62-1.6Z" />
  </svg>
)

export const TwitterIcon = (props: IconProps) => (
  <svg {...base(props)} fill="currentColor">
    <path d="M17.7 3h3.1l-6.77 7.74L22 21h-6.23l-4.88-6.38L5.3 21H2.2l7.24-8.28L2 3h6.39l4.41 5.83L17.7 3Zm-1.09 16.14h1.72L7.47 4.77H5.63l10.98 14.37Z" />
  </svg>
)

export const InstagramIcon = (props: IconProps) => (
  <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth={1.9}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
  </svg>
)

export const LinkedinIcon = (props: IconProps) => (
  <svg {...base(props)} fill="currentColor">
    <path d="M6.94 5.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.3 20.5h3.4V9.2H3.3v11.3Zm6 0h3.4v-6.1c0-1.63.91-2.46 2.07-2.46 1.1 0 1.83.75 1.83 2.49v6.07h3.4v-6.6c0-3.3-1.73-4.85-4.03-4.85-1.86 0-2.8 1.03-3.27 1.8V9.2H9.3v11.3Z" />
  </svg>
)

export const YoutubeIcon = (props: IconProps) => (
  <svg {...base(props)} fill="currentColor">
    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.27 5 12 5 12 5s-6.27 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2C2 8.78 2 12 2 12s0 3.22.4 4.8a2.5 2.5 0 0 0 1.76 1.77C5.73 19 12 19 12 19s6.27 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77C22 15.22 22 12 22 12s0-3.22-.4-4.8ZM10 15.1V8.9l5.2 3.1-5.2 3.1Z" />
  </svg>
)

export const PhoneIcon = (props: IconProps) => (
  <svg {...base(props)} fill="currentColor">
    <path d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.6 21 3 13.4 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.46.57 3.58.11.35.03.75-.25 1.02l-2.22 2.2Z" />
  </svg>
)

export const SearchIcon = (props: IconProps) => (
  <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round">
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.6-3.6" />
  </svg>
)

export const CloseIcon = (props: IconProps) => (
  <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round">
    <path d="M6 6 18 18M18 6 6 18" />
  </svg>
)

export const MenuIcon = (props: IconProps) => (
  <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round">
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const HomeIcon = (props: IconProps) => (
  <svg {...base(props)} fill="currentColor">
    <path d="M12 3.2 2.6 11.1a1 1 0 0 0 .64 1.77H5v7.3c0 .5.4.9.9.9h3.4v-5.2h5.4v5.2h3.4c.5 0 .9-.4.9-.9v-7.3h1.76a1 1 0 0 0 .64-1.77L12 3.2Z" />
  </svg>
)

export const ChevronDown = (props: IconProps) => (
  <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
)

export const ChevronUp = (props: IconProps) => (
  <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 15 6-6 6 6" />
  </svg>
)

export const ChevronRight = (props: IconProps) => (
  <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 6 6 6-6 6" />
  </svg>
)

export const CheckIcon = (props: IconProps) => (
  <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
    <path d="m4 12.5 5.2 5.5L20 6.5" />
  </svg>
)

export const PlayIcon = (props: IconProps) => (
  <svg {...base(props)} fill="currentColor">
    <path d="M8 5.2v13.6a.8.8 0 0 0 1.22.68l11-6.8a.8.8 0 0 0 0-1.36l-11-6.8A.8.8 0 0 0 8 5.2Z" />
  </svg>
)

export const ExpandIcon = (props: IconProps) => (
  <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 4h6v6M20 4l-7.5 7.5M10 20H4v-6M4 20l7.5-7.5" />
  </svg>
)

export const ArrowUpIcon = (props: IconProps) => (
  <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
)

export const QuoteGlyph = (props: IconProps) => (
  <svg {...base({ viewBox: '0 0 48 36', ...props })} fill="currentColor">
    <path d="M20.8 0v10.1c-2.6 0-4.5.6-5.6 1.9-1.1 1.2-1.7 3.2-1.8 5.9h7.4V36H0V19.6C0 12.9 1.7 8 5 4.8 8.4 1.6 13.6 0 20.8 0Zm27.2 0v10.1c-2.6 0-4.5.6-5.6 1.9-1.1 1.2-1.7 3.2-1.8 5.9H48V36H27.2V19.6c0-6.7 1.7-11.6 5-14.8C35.6 1.6 40.8 0 48 0Z" />
  </svg>
)

export const CookieIcon = (props: IconProps) => (
  <svg {...base(props)} fill="currentColor">
    <path d="M21.9 11.1a4 4 0 0 1-4.8-4.9A4 4 0 0 1 12.6 2 10 10 0 1 0 22 11.4v-.3ZM8 15.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1.5-6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm5.5 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
  </svg>
)
