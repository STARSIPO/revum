# RÉVUM — Aesthetic Clinic Website

Premium, bilingual (Romanian / Russian) single-page website for **RÉVUM Face & Body Clinic**, Chișinău. Booking‑oriented, with all bookings routed to the clinic's **Altegio** system.

Built from scratch — new design, new code. Deep black + warm cream + restrained champagne‑gold, elegant serif display type, and a mobile‑first, conversion‑focused layout.

---

## ✨ What's inside

- **RO / RU** full interface translation, choice saved to `localStorage`, anchors keep working across languages.
- **Sticky header** — transparent over the hero, compact + blurred after scroll; full‑screen mobile menu (closes on link / ✕ / outside click / `Esc`, with focus trap).
- Sections: Hero → Advantages → About → Service categories (filterable, real procedures, **no prices**) → Technologies → Atmosphere gallery → Booking CTA → Contact + lazy map.
- **Altegio** booking everywhere, centralised in one config.
- Mobile sticky "Book" button (safe‑area aware), cookie banner, and Privacy / Terms / Cookie policy modals.
- Accessibility: keyboard support, focus‑visible, ARIA labels, `prefers-reduced-motion`.
- Performance: self‑hosted fonts (subset to Latin + Latin‑ext + Cyrillic), priority hero image, lazy below‑fold images, WebP.
- SEO: per‑language `<title>`/description, Open Graph, canonical, `hreflang`, and `BeautySalon` JSON‑LD (real data only).

---

## 🧱 Tech stack

React 18 · Vite 5 · TypeScript · plain CSS (design tokens). No UI framework, no heavy animation library.

---

## 🚀 Quick start

```bash
npm install       # install dependencies

npm run dev       # dev server → http://localhost:5173
npm run build     # type-check + production build → dist/
npm run preview   # serve the production build locally
```

Re‑generating assets (only needed if you change source images/fonts):

```bash
npm run fonts     # download + self-host Playfair Display + Manrope (woff2)
npm run assets    # optimize logos/photos, build favicons, OG image, art tiles
```

> After `npm run build`, deploy the **`dist/`** folder to any static host.

---

## 📁 Project structure

```
revum/
├─ _raw/                     # original logos + photos (source for npm run assets)
├─ public/                   # favicons, og-image, robots.txt, sitemap.xml
│  └─ media/                 # responsive hero images (preloaded LCP)
├─ scripts/
│  ├─ fetch-fonts.mjs        # self-host Google fonts
│  └─ process-images.mjs     # image optimization + favicon/OG/art generation
├─ src/
│  ├─ assets/
│  │  ├─ fonts/              # self-hosted woff2 (generated)
│  │  ├─ generated/         # optimized webp/png/jpg (generated)
│  │  └─ images.ts          # ← central image manifest (swap photos here)
│  ├─ data/
│  │  ├─ clinicInfo.ts      # ← contacts, hours, Altegio base links
│  │  ├─ services.ts        # ← service categories + procedures (no prices)
│  │  ├─ technologies.ts    # ← equipment cards
│  │  └─ nav.ts             # nav items
│  ├─ i18n/
│  │  ├─ strings.ts         # ← all RO/RU UI copy + policy texts
│  │  └─ LanguageContext.tsx
│  ├─ components/           # Header, Hero, Services, … , modals
│  ├─ lib/hooks.ts          # scroll / body-lock / escape / focus-trap
│  ├─ styles/               # tokens.css, base.css, components.css, fonts.css
│  ├─ App.tsx / main.tsx
└─ index.html               # meta, OG, JSON-LD
```

---

## 🔧 Where to change things

| I want to change… | Edit |
|---|---|
| **Services / procedures** (add, rename, reorder) | `src/data/services.ts` |
| **Altegio links** (base, or per‑service direct links) | `src/data/clinicInfo.ts` → `ALTEGIO`, and each service's `altegioUrl` in `src/data/services.ts` |
| **Contacts** (phone, email, WhatsApp, Instagram, address) | `src/data/clinicInfo.ts` |
| **Working hours** | `src/data/clinicInfo.ts` → `hoursRO` / `hoursRU` |
| **Technologies / equipment cards** | `src/data/technologies.ts` |
| **Any interface text / policies (RO & RU)** | `src/i18n/strings.ts` |
| **Photos** | replace files in `_raw/`, run `npm run assets`, then map in `src/assets/images.ts` |
| **Colours / fonts / spacing** | `src/styles/tokens.css` |

### Altegio deep links

All booking buttons open the clinic's Altegio **service menu**:

```
https://n1380197.alteg.io/company/1315525/personal/select-services?o=
```

defined once in `src/data/clinicInfo.ts` (`ALTEGIO.base`). Altegio's public widget is a single‑page app and does **not** expose per‑service URLs, so every service defaults to this menu. If the clinic later provides direct service links / IDs, paste them into the `altegioUrl` field of the relevant service in `src/data/services.ts` — nothing else needs to change.

---

## 🌍 Deployment

The build uses a **relative base** (`base: './'` in `vite.config.ts`), so `dist/` works at a domain root **or** in a sub‑folder (e.g. `username.github.io/revum/`).

- **Netlify / Vercel / any static host:** publish directory = `dist`, build command = `npm run build`.
- **GitHub Pages:** push `dist/` (or use an action) — the relative base handles the sub‑path.

> **One manual step for social sharing:** `index.html` sets absolute `og:image` / URLs to `https://revumclinic.com/…`. If you deploy on a different domain, update those absolute URLs (and the JSON‑LD `url`/`image`).

---

## 📸 Photos used

Real material available for this project was the **official RÉVUM logo pack** (used for the wordmark, emblem, favicons and OG image) plus a small set of the clinic's own photos:

| File (in `_raw/`) | Used for |
|---|---|
| `photo-room-treatment.jpg` | Hero background, "Devices" category, gallery |
| `photo-interior-salon.jpg` | About, "Aesthetics" category, booking CTA, gallery |
| `photo-specialist-1.png` / `photo-specialist-2.png` | Atmosphere gallery (unlabeled — no bios) |
| `logo-*` / `emblem-*` (from the logo pack) | Brand mark, favicons, OG image |
| generated `art-noir` / `art-champagne` / `art-gold-arc` | On‑brand abstract tiles (gallery, "Injectables" card) |

See **[PLACEHOLDERS.md](PLACEHOLDERS.md)** for images that should be replaced with real clinic/equipment photos before launch.

---

## ⚠️ Before launch — confirm with the owner

See **[PLACEHOLDERS.md](PLACEHOLDERS.md)**. In short: **working hours**, the exact **street number** (3A vs 5), legal entity details in the policy pages, and (optionally) real **equipment photos**.

---

## ♿ Accessibility & performance notes

- Respects `prefers-reduced-motion`; visible keyboard focus; focus trapped in menu/modals.
- Fonts self‑hosted and subset; hero image prioritized, everything below the fold lazy‑loaded.
- No console errors; no external runtime dependencies or trackers.
