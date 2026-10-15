import { useState } from 'react'
import { CookieIcon } from './Icons'

const STORAGE_KEY = 'xtra-cookie-notice'

/** Private browsing can throw on access, so every read is guarded. */
function alreadyDismissed() {
  try {
    return Boolean(localStorage.getItem(STORAGE_KEY))
  } catch {
    return false
  }
}

export function CookieBar() {
  const [open, setOpen] = useState(() => !alreadyDismissed())

  if (!open) return null

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      /* private mode — dismiss for this session only */
    }
    setOpen(false)
  }

  return (
    <div
      role="region"
      aria-label="Cookie notice"
      className="fixed bottom-4 left-4 right-4 z-40 flex items-center gap-3 rounded-full bg-white p-2 shadow-[0_10px_40px_rgba(36,51,68,0.18)] sm:right-auto sm:max-w-[560px]"
    >
      <span className="hidden h-9 w-9 shrink-0 place-items-center rounded-full bg-mist text-navy xs:grid">
        <CookieIcon className="h-5 w-5" />
      </span>
      <p className="min-w-0 flex-1 text-[12px] leading-snug text-navy sm:text-[15px]">
        This website uses cookies to improve user experience.
      </p>
      <button
        type="button"
        onClick={dismiss}
        className="shrink-0 rounded-full bg-navy px-4 py-2.5 text-[13px] font-bold text-white transition-colors duration-300 hover:bg-gold hover:text-navy sm:px-5 sm:text-[14px]"
      >
        Accept and close
      </button>
    </div>
  )
}
