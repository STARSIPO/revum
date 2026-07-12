// ============================================================
// REVUM — Central clinic information & Altegio booking links.
// Edit contact details, hours and social links in ONE place here.
// ============================================================

/**
 * Altegio online-booking endpoints.
 *
 *  base — the RÉVUM "select services" menu. Every service in services.ts
 *         defaults to this link. It drops the visitor straight on the
 *         service picker (better than the bare Altegio root).
 *  menu — the full personal menu view.
 *
 * ► To deep-link a specific service: Altegio's public booking widget is a
 *   single-page app and does not currently expose per-service URLs. If the
 *   owner enables direct service links (or shares service IDs), paste them
 *   into the `altegioUrl` field of the matching service in services.ts.
 *   Everything routes through this one config — no links are hard-coded
 *   in components.
 */
export const ALTEGIO = {
  base: 'https://n1380197.alteg.io/company/1315525/personal/select-services?o=',
  menu: 'https://n1380197.alteg.io/company/1315525/personal/menu?o=',
} as const

export const clinicInfo = {
  name: 'RÉVUM Face & Body Clinic',
  shortName: 'RÉVUM',

  phone: '+373 61 292 786',
  phoneHref: 'tel:+37361292786',

  email: 'contact@revumclinic.com',
  emailHref: 'mailto:contact@revumclinic.com',

  // Real clinic number → WhatsApp (the previous site used a placeholder number).
  whatsapp: 'https://wa.me/37361292786',

  // Confirmed handle @revum_clinic.md. Set to '' to hide Instagram links.
  instagram: 'https://www.instagram.com/revum_clinic.md/',

  address: 'Strada Ghică Vodă 3A',
  addressFull: 'Strada Ghică Vodă 3A, Botanica, Chișinău, Moldova',
  city: 'Chișinău',

  // ⚠ PLACEHOLDER — working hours must be confirmed by the owner.
  //   The old site showed conflicting hours; do not publish until verified.
  hoursRO: 'Program: de confirmat cu clinica',
  hoursRU: 'График: уточняется у клиники',

  // ⚠ NOTE: Altegio lists the address as "Ghică Vodă 5"; the brand brief
  //   and old site say "3A". Confirm the exact number before launch.
  mapQuery: 'RÉVUM Clinic, Strada Ghică Vodă, Chișinău, Moldova',
} as const

// Google Maps embed + link derived from the address (no API key required).
export const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  clinicInfo.mapQuery
)}&t=&z=16&ie=UTF8&iwloc=&output=embed`

export const mapLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  clinicInfo.mapQuery
)}`
