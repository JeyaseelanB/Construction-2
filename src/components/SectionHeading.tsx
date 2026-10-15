type Props = {
  /** Oversized word ghosted behind the heading block. */
  watermark: string
  /** Small gold label. */
  eyebrow: string
  /** Main headline — strings split on `|` render as separate lines. */
  title: string
  align?: 'center' | 'left'
  tone?: 'dark' | 'light'
  className?: string
}

export function SectionHeading({
  watermark,
  eyebrow,
  title,
  align = 'center',
  tone = 'dark',
  className = '',
}: Props) {
  const centered = align === 'center'

  return (
    <div
      className={`relative ${centered ? 'text-center' : 'text-center lg:text-left'} ${className}`}
    >
      <span
        aria-hidden="true"
        className={`watermark ${centered ? 'text-center' : 'text-center lg:text-left'} ${
          tone === 'light' ? 'text-white/5' : 'text-gold/15'
        }`}
        style={{ top: '0.1em' }}
      >
        {watermark}
      </span>

      <p className="relative z-[1] font-display text-[17px] font-medium uppercase tracking-[0.04em] text-gold sm:text-[20px]">
        {eyebrow}
      </p>

      <h2
        className={`relative z-[1] mt-3 text-[30px] font-bold leading-[1.25] sm:text-[36px] lg:text-[42px] ${
          tone === 'light' ? 'text-white' : 'text-[#111]'
        }`}
      >
        {title.split('|').map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </h2>
    </div>
  )
}
