# Placeholders to confirm before launch

Everything below is **intentionally not invented**. Confirm with the clinic owner, then update the referenced file.

## 1. Working hours ⛔ (required)
The old site showed **conflicting** hours (Mon–Sun 9–20 in one place, Mon–Fri 10–20 / weekend 10–18 in another), so no schedule was assumed.

- **File:** `src/data/clinicInfo.ts` → `hoursRO`, `hoursRU`
- Current value: `"Program: de confirmat cu clinica"` / `"График: уточняется у клиники"`

## 2. Exact address / street number ⚠️
- The brand brief and old site say **Ghică Vodă 3A**; the clinic's **Altegio** page shows **Ghică Vodă 5**.
- Currently using **3A** (from the brief).
- **File:** `src/data/clinicInfo.ts` → `address`, `addressFull`, `mapQuery`

## 3. Legal entity details (policy pages) ⚠️
- Privacy / Terms contain bracketed placeholders like `[DENUMIRE JURIDICĂ / IDNO — de completat]` and `[DE COMPLETAT DE CĂTRE PROPRIETAR]`, highlighted in the modal.
- **File:** `src/i18n/strings.ts` → `policies.privacy`, `policies.terms`

## 4. Altegio per‑service deep links (optional)
- All bookings currently open the Altegio **service menu** (`ALTEGIO.base`). Altegio's widget doesn't expose per‑service URLs; if the owner provides direct links/IDs, add them per service.
- **File:** `src/data/services.ts` → `altegioUrl` on each service.

## 5. Equipment photos (optional, recommended)
- The **Technologies** cards use a branded emblem placeholder (no stock device photos were invented). Add real device photos for ULTRACEL Q+, VIVACE, Stellar M22, Volnewmer, BTL, Geneo X.
- **How:** drop photos in `_raw/`, run `npm run assets`, import in `src/assets/images.ts`, then set `image` on the matching entry in `src/data/technologies.ts`.

## 6. Confirmed, but double‑check
- **Instagram:** `@revum_clinic.md` → `https://www.instagram.com/revum_clinic.md/` (from public search). Verify it's the official account. Set to `''` in `clinicInfo.ts` to hide Instagram links.
- **WhatsApp:** built from the real phone `+373 61 292 786` → `wa.me/37361292786` (the old site linked a placeholder number).
- **Social/OG image domain:** `index.html` uses `https://revumclinic.com/…` absolute URLs — update if deploying elsewhere.

## 7. Russian SEO indexing (optional)
- RU is served at the **same URL** via a client-side toggle (SPA i18n), so search engines index the RO content only. If RU search visibility matters, add a distinct crawlable route (e.g. `/ru/`) with its own `<link rel="alternate" hreflang="ru">` + canonical. The OG `og:locale:alternate` already advertises RU.

## 8. Device brand name (ULTRACEL Q+)
- The brief and old site name the HIFU/SMAS device **ULTRACEL Q+**; the Altegio menu only says "HIFU SMAS‑Lifting". Kept as **ULTRACEL Q+** per the brief — confirm the current device model.
