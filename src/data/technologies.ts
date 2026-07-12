// ============================================================
// REVUM — Featured technologies / equipment.
// `image` is optional: when empty, the card shows a branded
// placeholder (add a real device photo to _raw/ + images.ts).
// ============================================================

export interface Technology {
  id: string
  name: string
  kickerRO: string
  kickerRU: string
  descRO: string
  descRU: string
  appsRO: string[]
  appsRU: string[]
  image?: string
}

export const TECHNOLOGIES: Technology[] = [
  {
    id: 'ultracel',
    name: 'ULTRACEL Q+',
    kickerRO: 'HIFU · SMAS-lifting',
    kickerRU: 'HIFU · SMAS-лифтинг',
    descRO:
      'Lifting neinvaziv cu ultrasunete focalizate, care acționează asupra straturilor profunde pentru un contur mai definit al feței.',
    descRU:
      'Безоперационный лифтинг сфокусированным ультразвуком, воздействующий на глубокие слои для более чёткого овала лица.',
    appsRO: ['Lifting oval facial', 'Stimularea colagenului', 'Reducerea laxității'],
    appsRU: ['Лифтинг овала лица', 'Стимуляция коллагена', 'Уменьшение дряблости'],
  },
  {
    id: 'vivace',
    name: 'VIVACE',
    kickerRO: 'RF Microneedling',
    kickerRU: 'RF-микронидлинг',
    descRO:
      'Combinație de microneedling și radiofrecvență pentru îmbunătățirea texturii, fermității și aspectului general al pielii.',
    descRU:
      'Сочетание микронидлинга и радиочастоты для улучшения текстуры, упругости и общего вида кожи.',
    appsRO: ['Textura pielii', 'Pori dilatați', 'Fermitate & lifting fin'],
    appsRU: ['Текстура кожи', 'Расширенные поры', 'Упругость и мягкий лифтинг'],
  },
  {
    id: 'stellar-m22',
    name: 'Stellar M22',
    kickerRO: 'IPL · Fotoîntinerire',
    kickerRU: 'IPL · Фотоомоложение',
    descRO:
      'Platformă multi-aplicație cu lumină intensă pulsată pentru pigmentație, manifestări vasculare și fotoîntinerire.',
    descRU:
      'Многофункциональная платформа с интенсивным импульсным светом для пигментации, сосудистых проявлений и фотоомоложения.',
    appsRO: ['Pigmentație', 'Manifestări vasculare', 'Fotoîntinerire', 'Acnee'],
    appsRU: ['Пигментация', 'Сосудистые проявления', 'Фотоомоложение', 'Акне'],
  },
  {
    id: 'volnewmer',
    name: 'Volnewmer',
    kickerRO: 'RF lifting',
    kickerRU: 'RF-лифтинг',
    descRO:
      'Radiofrecvență de ultimă generație pentru fermitate și un aspect mai tonifiat al pielii feței și gâtului.',
    descRU:
      'Радиочастотная технология нового поколения для упругости и более подтянутого вида кожи лица и шеи.',
    appsRO: ['Fermitatea pielii', 'Conturul feței', 'Tonifiere'],
    appsRU: ['Упругость кожи', 'Контур лица', 'Тонизирование'],
  },
  {
    id: 'btl',
    name: 'BTL Emsculpt · EmTone',
    kickerRO: 'Modelare corporală',
    kickerRU: 'Коррекция фигуры',
    descRO:
      'Tehnologii aparative pentru modelarea siluetei, tonifierea musculară și îmbunătățirea aspectului pielii corpului.',
    descRU:
      'Аппаратные технологии для моделирования силуэта, тонуса мышц и улучшения вида кожи тела.',
    appsRO: ['Modelarea siluetei', 'Tonus muscular', 'Aspect celulită'],
    appsRU: ['Моделирование силуэта', 'Тонус мышц', 'Проявления целлюлита'],
  },
  {
    id: 'geneo',
    name: 'Geneo X',
    kickerRO: 'Îngrijire avansată',
    kickerRU: 'Продвинутый уход',
    descRO:
      'Îngrijire facială complexă cu oxigenare, radiofrecvență și ultrasunet pentru un ten luminos și hidratat.',
    descRU:
      'Комплексный уход за лицом с оксигенацией, радиочастотой и ультразвуком для сияющей и увлажнённой кожи.',
    appsRO: ['Luminozitate', 'Hidratare', 'Împrospătarea tenului'],
    appsRU: ['Сияние', 'Увлажнение', 'Обновление кожи'],
  },
]
