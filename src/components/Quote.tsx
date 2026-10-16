import { useState, type FormEvent } from 'react'
import { DEPARTMENTS } from '../data/site'
import { SectionHeading } from './SectionHeading'

type Status = 'idle' | 'sending' | 'sent' | 'failed'

/**
 * Optional form endpoint. When `VITE_CONTACT_ENDPOINT` is unset (the default)
 * the form validates and acknowledges locally — this build ships no backend.
 */
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined

const FIELD =
  'w-full bg-white px-4 py-3 text-[15px] text-navy outline-none ring-navy/0 transition-shadow placeholder:text-ink/60 focus:ring-2 focus:ring-navy/40'
const LABEL = 'mb-2 block text-[14px] leading-snug text-navy/80'

export function Quote() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget

    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    if (!ENDPOINT) {
      setStatus('sent')
      form.reset()
      window.setTimeout(() => setStatus('idle'), 6000)
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (!response.ok) throw new Error(`Request failed: ${response.status}`)
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('failed')
    }
    window.setTimeout(() => setStatus('idle'), 6000)
  }

  const message =
    status === 'sent'
      ? 'Thanks — your message has been received.'
      : status === 'failed'
        ? 'Something went wrong. Please try again.'
        : ''

  return (
    <section id="quote" className="relative overflow-hidden py-16 lg:py-[110px]">
      <div className="relative">
        {/* ---------- navy panel, bleeding to the left viewport edge ---------- */}
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 right-0 bg-navy lg:right-[43%]"
        />

        <div className="shell relative grid items-center gap-0 py-14 lg:grid-cols-[53fr_47fr] lg:py-[110px]">
          <div className="relative lg:pr-16">
            <SectionHeading
              watermark="QUOTE"
              eyebrow="INTERESTED IN CONSTRUCTION?"
              title="Request a free and |fair quote"
              align="left"
              tone="light"
              className="fx-reveal"
            />
            <p className="fx-reveal mt-7 text-center text-[16px] leading-[1.9] text-white/55 lg:text-left lg:text-[17px]">
              Slogan creation for your construction company is crucial for the overall branding. And
              branding in today’s world can’t be ignored, We hope that the above Construction Slogans.
              Don’t forget to share it on social media.
            </p>
          </div>

          {/* ---------- gold form card ---------- */}
          <div className="fx-reveal relative z-[1] mt-10 lg:-ml-[28px] lg:mt-0">
            <form
              noValidate
              onSubmit={handleSubmit}
              aria-label="Request a quote"
              className="bg-gold px-6 py-10 shadow-[0_20px_60px_rgba(36,51,68,0.18)] sm:px-[50px] sm:py-[60px]"
            >
              <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
                <div>
                  <label className={LABEL} htmlFor="q-name">
                    Your Name (required)
                  </label>
                  <input id="q-name" name="your-name" type="text" required maxLength={400} className={FIELD} />
                </div>

                <div>
                  <label className={LABEL} htmlFor="q-email">
                    Your Email (required)
                  </label>
                  <input
                    id="q-email"
                    name="your-email"
                    type="email"
                    required
                    maxLength={400}
                    className={FIELD}
                  />
                </div>

                <div>
                  <label className={LABEL} htmlFor="q-subject">
                    Subject
                  </label>
                  <input id="q-subject" name="your-subject" type="text" maxLength={400} className={FIELD} />
                </div>

                <div>
                  <label className={LABEL} htmlFor="q-dept">
                    Departemant
                  </label>
                  <select id="q-dept" name="menu-178" className={`${FIELD} h-[54px]`} defaultValue={DEPARTMENTS[0]}>
                    {DEPARTMENTS.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className={LABEL} htmlFor="q-message">
                    Your Message
                  </label>
                  <textarea
                    id="q-message"
                    name="your-message"
                    rows={6}
                    maxLength={2000}
                    className={`${FIELD} resize-y`}
                  />
                </div>
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-end gap-4">
                <p
                  role="status"
                  aria-live="polite"
                  className={`mr-auto text-[14px] font-medium text-navy ${message ? '' : 'sr-only'}`}
                >
                  {message}
                </p>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="bg-navy px-10 py-[15px] font-display text-[16px] font-bold text-white shadow-[0_15px_50px_rgba(36,51,68,0.2)] transition-colors duration-300 hover:bg-white hover:text-navy disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'sending' ? 'Sending…' : 'Send'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
