// ============================================================
// REVUM — Central services catalog (NO prices).
// Add / edit / reorder procedures here; the UI updates automatically.
//
// Prices intentionally live only inside Altegio.
// Each service opens Altegio via `altegioUrl` (defaults to ALTEGIO.base).
// To attach a direct per-service link, set `altegioUrl` on that item.
// ============================================================
import { ALTEGIO } from './clinicInfo'
import { PHOTO, ART } from '../assets/images'

export type CategoryId = 'devices' | 'aesthetics' | 'injectables'

export interface CategoryMeta {
  id: CategoryId
  titleRO: string
  titleRU: string
  descRO: string
  descRU: string
  image: string
  imageAltRO: string
  imageAltRU: string
}

export interface Service {
  id: string
  category: CategoryId
  titleRO: string
  titleRU: string
  /** Direct Altegio link. Defaults to the services menu (ALTEGIO.base). */
  altegioUrl?: string
}

export const CATEGORIES: CategoryMeta[] = [
  {
    id: 'devices',
    titleRO: 'Proceduri cu aparatură',
    titleRU: 'Аппаратные процедуры',
    descRO:
      'Tehnologii moderne pentru îmbunătățirea calității pielii, lifting și corectarea diferitelor imperfecțiuni estetice.',
    descRU:
      'Современные технологии для улучшения качества кожи, лифтинга и коррекции различных эстетических несовершенств.',
    image: PHOTO.roomTreatment,
    imageAltRO: 'Cabinet cu aparatură pentru proceduri estetice',
    imageAltRU: 'Кабинет с аппаратурой для эстетических процедур',
  },
  {
    id: 'aesthetics',
    titleRO: 'Estetică facială',
    titleRU: 'Эстетическая косметология',
    descRO:
      'Îngrijiri profesionale selectate în funcție de tipul și necesitățile pielii.',
    descRU:
      'Профессиональные уходовые процедуры, подобранные с учётом типа и потребностей кожи.',
    image: PHOTO.interiorSalon,
    imageAltRO: 'Spațiu elegant pentru îngrijiri faciale',
    imageAltRU: 'Элегантное пространство для ухода за лицом',
  },
  {
    id: 'injectables',
    titleRO: 'Proceduri injectabile',
    titleRU: 'Инъекционные процедуры',
    descRO:
      'Proceduri estetice personalizate, realizate după o consultație individuală.',
    descRU:
      'Индивидуально подобранные эстетические процедуры, проводимые после консультации.',
    image: ART.champagne,
    imageAltRO: 'Textură crem elegantă, motiv RÉVUM',
    imageAltRU: 'Элегантная кремовая текстура, мотив RÉVUM',
  },
]

export const SERVICES: Service[] = [
  // — Aparate / Devices —
  { id: 'hifu-smas', category: 'devices', titleRO: 'ULTRACEL Q+ · HIFU / SMAS-lifting', titleRU: 'ULTRACEL Q+ · HIFU / SMAS-лифтинг' },
  { id: 'vivace-rf', category: 'devices', titleRO: 'VIVACE — RF Microneedling', titleRU: 'VIVACE — RF-микронидлинг' },
  { id: 'stellar-m22', category: 'devices', titleRO: 'Stellar M22 — IPL & fotoîntinerire', titleRU: 'Stellar M22 — IPL и фотоомоложение' },
  { id: 'volnewmer', category: 'devices', titleRO: 'Volnewmer — RF lifting', titleRU: 'Volnewmer — RF-лифтинг' },
  { id: 'geneo-x', category: 'devices', titleRO: 'Geneo X — oxigenare & îngrijire', titleRU: 'Geneo X — оксигенация и уход' },
  { id: 'btl-emsculpt', category: 'devices', titleRO: 'BTL Emsculpt — modelare corporală', titleRU: 'BTL Emsculpt — коррекция фигуры' },
  { id: 'btl-emtone', category: 'devices', titleRO: 'BTL EmTone — fermitate & celulită', titleRU: 'BTL EmTone — упругость и целлюлит' },
  { id: 'btl-lymphastim', category: 'devices', titleRO: 'BTL Lymphastim — presoterapie', titleRU: 'BTL Lymphastim — прессотерапия' },
  { id: 'arosha', category: 'devices', titleRO: 'Împachetări Arosha', titleRU: 'Обёртывания Arosha' },
  { id: 'pigment-vascular', category: 'devices', titleRO: 'Tratamente pigmentație & vasculare', titleRU: 'Лечение пигментации и сосудов' },

  // — Estetică / Aesthetics —
  { id: 'skin-care', category: 'aesthetics', titleRO: 'Îngrijiri după tipul tenului', titleRU: 'Уходы по типу кожи' },
  { id: 'cleansing', category: 'aesthetics', titleRO: 'Curățare mecanică & cu ultrasunete', titleRU: 'Механическая и ультразвуковая чистка' },
  { id: 'peeling', category: 'aesthetics', titleRO: 'Peelinguri', titleRU: 'Пилинги' },
  { id: 'masks', category: 'aesthetics', titleRO: 'Măști hidratante & regeneratoare', titleRU: 'Увлажняющие и восстанавливающие маски' },
  { id: 'consultation', category: 'aesthetics', titleRO: 'Consultație personalizată', titleRU: 'Индивидуальная консультация' },

  // — Injectabile / Injectables —
  { id: 'botulinum', category: 'injectables', titleRO: 'Botulinoterapie', titleRU: 'Ботулинотерапия' },
  { id: 'biorevitalization', category: 'injectables', titleRO: 'Biorevitalizare', titleRU: 'Биоревитализация' },
  { id: 'mesotherapy', category: 'injectables', titleRO: 'Mezoterapie', titleRU: 'Мезотерапия' },
  { id: 'lips', category: 'injectables', titleRO: 'Conturul & augmentarea buzelor', titleRU: 'Контур и увеличение губ' },
  { id: 'harmonization', category: 'injectables', titleRO: 'Armonizare facială', titleRU: 'Гармонизация лица' },
  { id: 'fillers', category: 'injectables', titleRO: 'Contur facial (fillere)', titleRU: 'Контурная пластика (филлеры)' },
  { id: 'polylactic', category: 'injectables', titleRO: 'Acid polilactic', titleRU: 'Полимолочная кислота' },
  { id: 'polynucleotides', category: 'injectables', titleRO: 'Polinucleotide', titleRU: 'Полинуклеотиды' },
  { id: 'vector-lift', category: 'injectables', titleRO: 'Lifting vectorial', titleRU: 'Векторный лифтинг' },
  { id: 'profiloplasty', category: 'injectables', titleRO: 'Profiloplastie', titleRU: 'Профилопластика' },
]

/** Resolve the Altegio link for a service (falls back to the menu). */
export function serviceLink(s: Service): string {
  return s.altegioUrl ?? ALTEGIO.base
}

export function servicesByCategory(cat: CategoryId): Service[] {
  return SERVICES.filter((s) => s.category === cat)
}
