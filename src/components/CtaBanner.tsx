export function CtaBanner() {
  return (
    <div className="shell mt-20 lg:mt-[120px]">
      <div className="fx-reveal flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:gap-10 lg:text-left">
        <div className="flex flex-col items-center gap-5 lg:flex-row lg:items-start lg:gap-7">
          <img
            src="/images/safety-icon.png"
            alt=""
            aria-hidden="true"
            width={80}
            height={67}
            loading="lazy"
            className="h-auto w-[66px] shrink-0 lg:mt-1 lg:w-[80px]"
          />
          <div>
            <h2 className="font-display text-[23px] font-bold leading-snug sm:text-[28px] lg:text-[32px]">
              <span className="text-gold">Building a dream</span>{' '}
              <span className="text-navy">shouldn’t be a nightmare!</span>
            </h2>
            <p className="mt-2 text-[16px] leading-relaxed text-[#888] lg:text-[20px]">
              We have transforming the ideas and visions into winning projects.
            </p>
          </div>
        </div>

        <a
          href="#quote"
          className="shrink-0 bg-white px-[42px] py-[22px] font-display text-[16px] font-bold text-navy shadow-[0_10px_40px_rgba(36,51,68,0.1)] transition-colors duration-300 hover:bg-navy hover:text-gold"
        >
          Free Consultation
        </a>
      </div>
    </div>
  )
}
