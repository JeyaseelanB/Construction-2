# XTRA Construction — Home Page UI

A pixel-focused recreation of the home page of the **Construction 2** Elementor demo
([xtratheme.com/elementor/construction-2](https://xtratheme.com/elementor/construction-2/)),
rebuilt from scratch as a modern React + Vite single-page application.

---

## Project overview

The brief was to reproduce the complete first page of the reference site — not just the
hero — matching layout, typography, colour, spacing, imagery, iconography, components,
animation, interaction and responsive behaviour.

Every section of the reference page is implemented, top to bottom:

| #  | Section                | Notes                                                                                  |
| -- | ---------------------- | -------------------------------------------------------------------------------------- |
| 1  | Top utility bar        | Phone number, social links (desktop only, matching the reference)                       |
| 2  | Header                 | Logo, 7-item menu with two levels of dropdowns, search, CTA — plus a sticky variant      |
| 3  | Hero slider            | 2 auto-rotating slides: skewed gold panels + cut-out model, and a photo slide           |
| 4  | Features at a glance   | 3 flip cards over a dark photographic band                                               |
| 5  | About our company      | Full-bleed photo with gold offset block, ghost "ABOUT" watermark, checklist             |
| 6  | Our construction services | 3 cards (wide centre column, as in the reference) overlapping a grey panel            |
| 7  | CTA banner             | "Building a dream shouldn't be a nightmare!" + Free Consultation                        |
| 8  | Process of construction | Numbered steps on a right-bleeding navy panel, photo with gold offset block            |
| 9  | Our latest projects    | 4-column portfolio grid with zoom + overlay hover                                        |
| 10 | Request a quote        | Navy bleed panel + overlapping gold form card                                            |
| 11 | Testimonials           | Auto-playing carousel with avatar frame, dots, swipe and keyboard support                |
| 12 | Client logos           | Gold strip straddling the page/footer boundary                                           |
| 13 | Footer                 | Logo, about copy, social icons, bottom bar                                               |
| —  | Global                 | Cookie notice, back-to-top button, scroll reveal animations                              |

### Interactions implemented

- **Hero slider** — autoplays every 7 s, pauses on hover and keyboard focus, has dot
  controls to jump between slides, and re-runs its entrance choreography on each change.
- **Header** — transparent and layered over the hero at the top of the page; a white
  sticky bar slides down past 240 px of scroll. The active nav item is tracked with an
  `IntersectionObserver` and underlined in gold.
- **Dropdown menus** — two levels deep on desktop (hover), accordion-style on mobile (tap).
- **Search** — dropdown panel anchored to the header icon (as on the reference),
  autofocuses the input, closes on <kbd>Esc</kbd>, outside click or scroll, and returns
  focus to the trigger. The "trending searches" chips fill the input.
- **Off-canvas mobile menu** — slides in from the right, closes on backdrop click,
  <kbd>Esc</kbd>, or selecting a link.
- **Feature cards** — 3D flip on hover or keyboard focus, with an explicit "View details"
  toggle below 1024 px, where hover is not available.
- **Portfolio tiles** — image zoom plus a navy overlay with icon, title and categories.
- **Quote form** — real HTML5 validation, submitting state, polite live-region status.
- **Testimonials** — autoplay (pauses on hover/focus), dot navigation, touch swipe,
  <kbd>←</kbd>/<kbd>→</kbd> keys.
- **Cookie notice** — dismissal persisted in `localStorage`.
- **Scroll reveal** — sections fade and rise into view once, with per-item stagger.
- **Reduced motion** — all animation is disabled under `prefers-reduced-motion: reduce`.

---

## Technology used

| Layer      | Choice                                                                   |
| ---------- | ------------------------------------------------------------------------ |
| Framework  | React 19                                                                 |
| Language   | TypeScript 6                                                             |
| Build tool | Vite 8                                                                   |
| Styling    | Tailwind CSS 4 (`@tailwindcss/vite`), design tokens in `src/index.css`   |
| Fonts      | Poppins (headings) + Roboto (body), via Google Fonts                     |
| Icons      | Hand-authored inline SVG (`src/components/Icons.tsx`) — no icon library  |
| Linting    | oxlint                                                                   |

No UI kit, CSS framework theme, animation library or carousel dependency is used — the
slider, carousel, dropdowns, overlays and reveal animations are all written for this project.

### Project structure

```
public/images/           Theme imagery from the reference demo, converted to WebP
src/
  components/            One file per section, plus Icons / SectionHeading / BackToTop …
  data/site.ts           Navigation, cards, projects, testimonials and footer data
  hooks/                 useReveal (scroll animations), useLockBodyScroll (overlays)
  index.css              Tailwind import, design tokens, base styles, keyframes
  App.tsx                Section composition
```

Page data — navigation, feature/service cards, projects, testimonials and footer copy —
lives in `src/data/site.ts`. Section headings and static labels stay with their components,
because several carry presentation markers (a `|` line break, a responsive `<br>`).

---

## Getting started

### Prerequisites

- **Node.js 20.19+ or 22.12+** (developed on Node 22)
- npm 10+

### Installation

```bash
git clone <repository-url>
cd <repository-folder>
npm install
```

### Development command

```bash
npm run dev
```

Starts the Vite dev server with hot module replacement at <http://localhost:5173>.

### Build command

```bash
npm run build
```

Type-checks with `tsc -b`, then emits an optimised production bundle to `dist/`.

### Other commands

```bash
npm run preview   # serve the production build locally
npm run lint      # oxlint
```

---

## Environment configuration

> A standalone, more detailed version of this section and the API documentation below
> is available in [ENVIRONMENT-AND-API.md](ENVIRONMENT-AND-API.md).

The site renders with **no environment variables** — every value needed to build and run
is committed. One optional variable exists:

| Variable                  | Required | Default | Purpose                                                       |
| ------------------------- | -------- | ------- | ------------------------------------------------------------- |
| `VITE_CONTACT_ENDPOINT`   | No       | _unset_ | URL the "Request a quote" form POSTs to. Unset ⇒ local-only.  |

To enable real submissions, copy `.env.example` to `.env` and set the value:

```bash
cp .env.example .env
# .env
VITE_CONTACT_ENDPOINT=https://formspree.io/f/xxxxxxxx
```

Vite only exposes variables prefixed with `VITE_` to client code, and they are inlined at
build time — set the variable in your hosting provider's build settings, not at runtime.

---

## API documentation

This is a front-end-only build; there is no server component and no API is called at
runtime. The single outbound request the app can make is the optional contact-form
submission described above.

**`POST $VITE_CONTACT_ENDPOINT`**

| | |
| ----------------- | ----------------------------------------------------------- |
| **Content-Type**  | `multipart/form-data` (browser-generated `FormData`)         |
| **Headers**       | `Accept: application/json`                                   |
| **Body fields**   | `your-name` (string, required), `your-email` (string, required), `your-subject` (string, optional), `menu-178` (department, one of `Business Departemant` / `Personal Departemant` / `Support Departemant` / `Others`), `your-message` (string, optional) |
| **Success**       | Any `2xx` — the form resets and shows "Thanks — your message has been received." |
| **Failure**       | Non-`2xx` or a network error — the form shows "Something went wrong. Please try again." and keeps the entered values |

Field names intentionally mirror the reference site's Contact Form 7 field names so an
existing endpoint can be reused unchanged.

---

## Deployment instructions

The output in `dist/` is fully static and can be hosted anywhere.

### Vercel

`vercel.json` is included (framework `vite`, output `dist`, SPA rewrite).

1. Import the repository at <https://vercel.com/new>.
2. Vercel detects Vite automatically — build command `npm run build`, output `dist`.
3. Optionally add `VITE_CONTACT_ENDPOINT` under *Settings → Environment Variables*.
4. Deploy.

Or from the CLI:

```bash
npx vercel --prod
```

### Netlify

`netlify.toml` is included (build `npm run build`, publish `dist`, SPA redirect, Node 22).

1. *Add new site → Import an existing project* and pick the repository.
2. The settings are read from `netlify.toml`; add `VITE_CONTACT_ENDPOINT` if needed.
3. Deploy.

Or from the CLI:

```bash
npm run build
npx netlify deploy --prod --dir=dist
```

### Any static host

```bash
npm run build
# upload the contents of dist/
```

The app is a single page, so no rewrite rules are strictly required; the configs include
one so that deep links never 404.

---

## Dependencies

### Runtime

| Package             | Version | Why                              |
| ------------------- | ------- | -------------------------------- |
| `react`             | ^19.2   | UI library                       |
| `react-dom`         | ^19.2   | DOM renderer                     |
| `tailwindcss`       | ^4.3    | Styling                          |
| `@tailwindcss/vite` | ^4.3    | Tailwind's Vite integration      |

### Development

| Package              | Version | Why                       |
| -------------------- | ------- | ------------------------- |
| `vite`               | ^8.3    | Dev server and bundler    |
| `@vitejs/plugin-react` | ^6.1  | React Fast Refresh / JSX  |
| `typescript`         | ~6.0    | Type checking             |
| `@types/react`, `@types/react-dom`, `@types/node` | — | Type definitions |
| `oxlint`             | ^1.81   | Linting                   |

Google Fonts (Poppins, Roboto) are the only external runtime request.

---

## Assumptions

- **Scope is the home page.** The reference is a multi-page WordPress demo; the brief asks
  for the first page only. Navigation entries, "Read More", "Learn More", portfolio tiles
  and footer links therefore point at in-page anchors rather than separate routes.
- **Imagery is the reference's own.** Photographs, logos and icon artwork are copied from
  the public demo so the recreation is visually faithful. They belong to XtraTheme /
  their respective owners and are included for this evaluation exercise only.
- **Fonts.** The reference loads Poppins and Roboto; both are used here via Google Fonts.
  The decorative `czicons` icon font is replaced with equivalent inline SVG icons.
- **Measurements were taken from the live site.** Section heights, container widths
  (1360 px), the hero's 1280 × 1000 stage, the skew angle (−33°), card paddings, panel
  offsets and colours (`#243344`, `#f4c03b`, `#f1f1f1`) were read from the rendered DOM
  rather than estimated by eye.
- **The Envato promotional banner** pinned above the reference demo is part of the demo
  wrapper, not the theme, and is intentionally omitted.
- **The contact form has no backend** by default; see *Environment configuration*.
- **Hero slide ordering.** The reference autoplays both slides with no visible controls;
  discreet dot controls were added so the second slide is reachable on demand, which the
  brief's "all visible interactive elements should function" requirement favours.

## Known limitations

- **Not a byte-for-byte clone.** Section heights can differ from the reference by a few
  pixels because the original is composed of Elementor rows with WordPress-generated
  spacing; the recreation uses equivalent, rounder values.
- **Hero slider** uses a cross-fade rather than reproducing the reference's per-layer
  Slider Revolution timeline exactly. Layer entrance directions and delays are matched;
  individual layer easing curves are approximations.
- **Mobile hero** is laid out for legibility rather than copying the reference's absolute
  mobile layer coordinates, where the model image sits on top of the headline.
- **Search is presentational.** There is no index to query, so submitting the overlay
  simply closes it. Trending search terms are static, as on the reference.
- **Secondary pages do not exist** — links resolve to in-page anchors (see *Assumptions*).
- **Images are served at a single size.** The theme's JPEG/PNG assets were converted to
  WebP (3.3 MB → 1.2 MB; the three service icons stayed PNG, where WebP was larger), and
  `loading="lazy"` is applied below the fold, but no responsive `srcset` or AVIF variants
  are generated, so large viewports download the same file as small ones. WebP requires a
  2020-or-later browser, which matches the support target below.
- **No automated tests.** Layout and interaction were verified manually and with scripted
  headless-browser checks at 1440 / 768 / 390 px, but no test suite is committed.
- **Browser support** targets current evergreen browsers. The layout relies on CSS
  `clip-path`, 3D transforms, `:has`-free modern selectors and container-less fluid
  sizing; IE and pre-2021 Safari are out of scope.
