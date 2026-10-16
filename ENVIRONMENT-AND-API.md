# Environment Configuration & API Documentation

Supporting document for the **XTRA Construction — Home Page UI** submission.

- Repository: <https://github.com/JeyaseelanB/Construction-2>
- Reference site: <https://xtratheme.com/elementor/construction-2/>

> This project is a front-end-only single-page application (React 19 + Vite 8 + Tailwind CSS 4).
> It has no server component, no database and no authentication. The two sections below
> document the only configuration it accepts and the only network request it can originate.

---

## 1. Environment configuration details

### Summary

The site builds and runs with **no environment variables**. Every value needed to install,
develop, build and deploy is committed to the repository, so a clean clone works with:

```bash
npm install
npm run dev      # or: npm run build
```

There is exactly **one optional** variable.

### Variables

| Variable | Required | Default | Scope | Purpose |
| --- | --- | --- | --- | --- |
| `VITE_CONTACT_ENDPOINT` | No | _unset_ | Client (build-time) | URL that the "Request a quote" form POSTs to. When unset, the form validates and acknowledges entirely client-side. |

### Enabling real form submissions

```bash
cp .env.example .env
```

Then edit `.env`:

```dotenv
# Optional. When set, the "Request a quote" form POSTs its FormData here.
VITE_CONTACT_ENDPOINT=https://formspree.io/f/xxxxxxxx
```

Any endpoint that accepts `multipart/form-data` works — Formspree, Getform, Basin,
Netlify Forms, or your own API.

### Two constraints that matter for deployment

1. **Only `VITE_`-prefixed variables reach client code.** Vite deliberately withholds every
   other variable from the bundle so server secrets cannot leak into the browser. Renaming
   this variable without the `VITE_` prefix would silently disable the feature.
2. **The value is inlined at build time, not read at runtime.** It must be set in the
   hosting provider's *build* environment and the site rebuilt. Changing it on the server
   after deployment has no effect.

| Host | Where to set it |
| --- | --- |
| Vercel | Settings → Environment Variables → redeploy |
| Netlify | Site configuration → Environment variables → redeploy |
| Any static host | Export it in the shell before `npm run build` |

### Files

| File | Committed | Purpose |
| --- | --- | --- |
| `.env.example` | Yes | Template documenting the variable |
| `.env` | No — gitignored | Your local value |

### Related build configuration (no variables required)

| File | Purpose |
| --- | --- |
| `vercel.json` | Framework `vite`, build `npm run build`, output `dist`, SPA rewrite |
| `netlify.toml` | Build `npm run build`, publish `dist`, `NODE_VERSION = "22"`, SPA redirect |

Because both config files are committed, importing the repository into Vercel or Netlify
requires **no manual configuration at all**.

---

## 2. Brief API documentation

### Scope

There is **no backend API** in this project. No API is called when the page loads, and no
data is fetched at runtime. The page is fully static once built.

The only request the application can originate is the optional contact-form submission
below, and it is only made when `VITE_CONTACT_ENDPOINT` is configured.

Outbound requests in the default build:

| Request | When | Purpose |
| --- | --- | --- |
| `https://fonts.googleapis.com` + `https://fonts.gstatic.com` | Page load | Poppins and Roboto webfonts |
| `POST $VITE_CONTACT_ENDPOINT` | Quote form submit | Only if the variable is configured |

---

### `POST $VITE_CONTACT_ENDPOINT`

Submits the *Request a free and fair quote* form.

**Implementation:** [`src/components/Quote.tsx`](src/components/Quote.tsx)

#### Request

| | |
| --- | --- |
| **Method** | `POST` |
| **URL** | The value of `VITE_CONTACT_ENDPOINT` |
| **Content-Type** | `multipart/form-data` (browser-generated `FormData`; the boundary is set by the browser) |
| **Headers** | `Accept: application/json` |
| **Credentials** | None — no cookies, tokens or auth headers are sent |
| **Trigger** | The user presses **Send** and native HTML5 validation passes |

#### Body fields

| Field | Type | Required | Constraints |
| --- | --- | --- | --- |
| `your-name` | string | **Yes** | max 400 characters |
| `your-email` | string | **Yes** | `type="email"`, browser-validated, max 400 characters |
| `your-subject` | string | No | max 400 characters |
| `menu-178` | string | **Yes** | Department select. One of: `Business Departemant`, `Personal Departemant`, `Support Departemant`, `Others`. Defaults to `Business Departemant`. |
| `your-message` | string | No | max 2000 characters |

> **On the field names:** they intentionally mirror the reference site's Contact Form 7
> field names — including its own misspelling of "Departemant" and the generated `menu-178`
> select id — so an endpoint already wired to the reference form can be pointed at this one
> with no changes.

#### Example request

```http
POST /f/xxxxxxxx HTTP/1.1
Host: formspree.io
Accept: application/json
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary

your-name=Jane Doe
your-email=jane@example.com
your-subject=New office block
menu-178=Business Departemant
your-message=We would like a quote for a three-storey office build.
```

#### Responses

The client only inspects `response.ok`; no response body is parsed.

| Condition | UI behaviour |
| --- | --- |
| **`2xx`** | Form resets. A polite ARIA live region announces **"Thanks — your message has been received."** The message clears after 6 seconds. |
| **Non-`2xx`** | **"Something went wrong. Please try again."** Entered values are preserved so the user can retry. |
| **Network / CORS error** | Same as non-`2xx` — the `fetch` rejection is caught. |
| **In flight** | The submit button is disabled and reads **"Sending…"**, preventing double submission. |

#### Behaviour with no endpoint configured (default)

No request is made. The form still validates, shows the success message and resets — so
every interactive element on the page is fully exercisable without any backend.

#### Error handling notes

- Validation is native HTML5 (`required`, `type="email"`, `maxLength`) surfaced through
  `reportValidity()`; submission is blocked until the form is valid.
- The `fetch` call is wrapped in `try/catch`, so a DNS failure, CORS rejection or offline
  client degrades to the same visible error state rather than an unhandled rejection.
- Status messages are rendered into a `role="status"` / `aria-live="polite"` region, so
  screen-reader users receive the outcome without a focus change.

---

## Quick reference

```bash
# Install
npm install

# Develop            → http://localhost:5173
npm run dev

# Production build   → dist/
npm run build

# Preview the build locally
npm run preview

# Lint
npm run lint
```

No environment variable is required for any of the above.
