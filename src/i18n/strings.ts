// ============================================================
// REVUM — UI copy (RO / RU). RO is primary.
// Service & technology copy lives in src/data/*.
// ============================================================
export type Lang = 'ro' | 'ru'

const ro = {
  meta: {
    title: 'RÉVUM Aesthetic Clinic — Tratamente estetice în Chișinău',
    description:
      'RÉVUM Face & Body Clinic — tratamente estetice moderne, tehnologii avansate și îngrijire personalizată într-un spațiu elegant din Chișinău. Programează o consultație.',
    ogAlt: 'RÉVUM Aesthetic Clinic',
  },
  brand: { name: 'RÉVUM', tagline: 'Face & Body Clinic' },
  nav: {
    home: 'Acasă',
    about: 'Despre clinică',
    services: 'Servicii',
    technologies: 'Tehnologii',
    gallery: 'Atmosferă',
    contact: 'Contact',
  },
  common: {
    book: 'Programare',
    bookLong: 'Programează-te',
    learnMore: 'Află mai multe',
    consultation: 'Consultație personalizată',
    viewProcedures: 'Vezi procedurile',
    openMenu: 'Deschide meniul',
    closeMenu: 'Închide meniul',
    toBooking: 'Deschide sistemul de programare',
    langLabel: 'Limbă',
    skip: 'Sari la conținut',
    close: 'Închide',
    menuLabel: 'Meniu',
    navPrimary: 'Navigare principală',
    cookieLabel: 'Consimțământ cookie',
  },
  hero: {
    eyebrow: 'RÉVUM Aesthetic Clinic',
    line1: 'Frumusețea ta.',
    line2pre: 'Abordarea noastră ',
    line2accent: 'personalizată.',
    sub: 'Tratamente estetice moderne, tehnologii avansate și îngrijire atentă într-un spațiu creat pentru confortul și încrederea ta.',
    ctaPrimary: 'Descoperă serviciile',
    ctaSecondary: 'Programează-te',
    scroll: 'Derulează',
  },
  advantages: {
    heading: 'De ce RÉVUM',
    items: [
      {
        title: 'Tehnologii moderne',
        text: 'Echipamente profesionale și protocoale adaptate fiecărui client.',
      },
      {
        title: 'Abordare personalizată',
        text: 'Fiecare procedură este selectată în funcție de nevoile și obiectivele individuale.',
      },
      {
        title: 'Confort și atenție',
        text: 'Un spațiu elegant, o atmosferă calmă și grijă la fiecare etapă.',
      },
    ],
  },
  about: {
    eyebrow: 'Despre clinică',
    heading: 'Un spațiu dedicat esteticii moderne',
    p1: 'RÉVUM este un spațiu dedicat esteticii moderne, unde tehnologia, atenția la detalii și abordarea personalizată se întâlnesc într-o atmosferă elegantă și confortabilă.',
    p2: 'Fiecare vizită începe cu înțelegerea nevoilor clientului și alegerea procedurii potrivite — pentru un rezultat armonios, natural și în echilibru cu tine.',
    points: [
      'Consultație atentă înainte de fiecare procedură',
      'Tehnologii și aparatură profesională',
      'Protocoale individuale pentru față și corp',
      'Un mediu discret, curat și primitor',
    ],
    badge: 'Aesthetic Clinic · Chișinău',
    mediaAlt: 'Interiorul elegant al clinicii RÉVUM',
    media2Alt: 'Cabinet de proceduri RÉVUM',
  },
  services: {
    eyebrow: 'Servicii',
    heading: 'Proceduri pentru față și corp',
    lead: 'Trei direcții principale, fiecare procedură fiind aleasă după o consultație individuală.',
    filters: { all: 'Toate', devices: 'Aparate', aesthetics: 'Estetică', injectables: 'Injectabile' },
    procedureAria: (name: string) => `Programează-te pentru ${name} prin sistemul Altegio`,
  },
  technologies: {
    eyebrow: 'Tehnologii',
    heading: 'Echipamente și tehnologii',
    lead: 'Aparatură profesională pentru îngrijirea pielii, lifting și modelare — folosită după evaluarea specialistului.',
    applications: 'Aplicații',
    note: 'Selecția procedurii și a parametrilor se realizează individual, după o consultație cu specialistul. Rezultatele pot varia în funcție de particularitățile fiecărei persoane.',
    placeholder: 'Foto echipament',
  },
  gallery: {
    eyebrow: 'Atmosferă',
    heading: 'Atmosfera RÉVUM',
    lead: 'Interior, detalii și spații create pentru liniște și confort.',
    alts: {
      salon: 'Zonă de așteptare elegantă în clinica RÉVUM',
      room: 'Cabinet de proceduri luminos',
      team1: 'Specialist RÉVUM în cabinet',
      team2: 'Specialist RÉVUM',
      art1: 'Detaliu decorativ auriu',
      art2: 'Textură crem elegantă',
      art3: 'Motiv auriu abstract',
    },
  },
  cta: {
    heading: 'Descoperă procedura potrivită pentru tine',
    text: 'Programează o consultație și află ce opțiuni corespund nevoilor tale.',
    button: 'Programează-te',
  },
  contact: {
    eyebrow: 'Contact',
    heading: 'Vino să ne cunoști',
    lead: 'Suntem în Botanica, Chișinău. Scrie-ne sau programează-te online.',
    labels: {
      address: 'Adresă',
      phone: 'Telefon',
      email: 'Email',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      hours: 'Program',
      followUs: 'Urmărește-ne',
    },
    whatsappValue: 'Scrie pe WhatsApp',
    instagramValue: 'Vezi pe Instagram',
    mapCta: 'Deschide harta',
    mapHint: 'Vezi locația pe hartă',
  },
  footer: {
    desc: 'Clinică de estetică facială și corporală în Chișinău. Tehnologii moderne și îngrijire personalizată.',
    cols: { navigation: 'Navigare', services: 'Servicii', contact: 'Contact' },
    legal: { privacy: 'Politica de confidențialitate', terms: 'Termeni și condiții', cookies: 'Politica de cookie' },
    rights: 'Toate drepturile rezervate.',
  },
  cookie: {
    text: 'Folosim cookie-uri pentru funcționarea corectă a site-ului și pentru a analiza traficul.',
    more: 'Detalii',
    accept: 'Accept',
    decline: 'Refuz',
  },
  policies: {
    updatedLabel: 'Ultima actualizare',
    updated: '2026',
    privacy: {
      title: 'Politica de confidențialitate',
      intro:
        'Această politică descrie modul în care RÉVUM Face & Body Clinic colectează și utilizează datele cu caracter personal atunci când vizitezi site-ul sau ne contactezi.',
      sections: [
        { h: 'Operatorul de date', p: 'Operator: [DENUMIRE JURIDICĂ / IDNO — de completat]. Adresă: Strada Ghică Vodă 3A, Chișinău, Moldova. Contact: contact@revumclinic.com.' },
        { h: 'Ce date colectăm', p: 'Datele pe care ni le oferi direct (nume, telefon, email) la programare sau la contact, precum și date tehnice minime (cookie-uri) pentru funcționarea site-ului.' },
        { h: 'Scopul prelucrării', p: 'Programarea și oferirea serviciilor, comunicarea cu tine și îmbunătățirea site-ului. Nu vindem datele tale terților.' },
        { h: 'Programări online', p: 'Programările sunt gestionate prin platforma Altegio; datele introduse acolo sunt prelucrate conform politicii furnizorului respectiv.' },
        { h: 'Drepturile tale', p: 'Poți solicita accesul, corectarea sau ștergerea datelor tale scriind la contact@revumclinic.com.' },
      ],
    },
    terms: {
      title: 'Termeni și condiții',
      intro: 'Prin utilizarea acestui site ești de acord cu termenii de mai jos.',
      sections: [
        { h: 'Informații generale', p: 'Conținutul site-ului are caracter informativ și nu constituie sfat medical. Orice procedură se stabilește după o consultație individuală.' },
        { h: 'Programări', p: 'Programările se efectuează prin sistemul Altegio. Te rugăm să anunți din timp eventualele modificări.' },
        { h: 'Proprietate intelectuală', p: 'Marca, logo-ul și conținutul RÉVUM aparțin clinicii și nu pot fi utilizate fără acord.' },
        { h: 'Limitarea răspunderii', p: 'Rezultatele procedurilor pot varia individual. Detaliile legale complete: [DE COMPLETAT DE CĂTRE PROPRIETAR].' },
      ],
    },
    cookies: {
      title: 'Politica de cookie',
      intro: 'Folosim un număr minim de cookie-uri pentru funcționarea site-ului și pentru statistici anonime.',
      sections: [
        { h: 'Ce sunt cookie-urile', p: 'Fișiere mici stocate în browserul tău care ajută site-ul să funcționeze și să rețină preferințe (de exemplu, limba selectată).' },
        { h: 'Cookie-uri esențiale', p: 'Necesare pentru funcționarea de bază — de exemplu memorarea limbii și a acordului privind cookie-urile.' },
        { h: 'Controlul cookie-urilor', p: 'Poți șterge sau bloca cookie-urile din setările browserului. Unele funcții pot fi afectate.' },
      ],
    },
  },
} as const

const ru = {
  meta: {
    title: 'RÉVUM Aesthetic Clinic — эстетическая клиника в Кишинёве',
    description:
      'RÉVUM Face & Body Clinic — современные эстетические процедуры, передовые технологии и индивидуальный уход в элегантном пространстве в Кишинёве. Запишитесь на консультацию.',
    ogAlt: 'RÉVUM Aesthetic Clinic',
  },
  brand: { name: 'RÉVUM', tagline: 'Face & Body Clinic' },
  nav: {
    home: 'Главная',
    about: 'О клинике',
    services: 'Услуги',
    technologies: 'Технологии',
    gallery: 'Атмосфера',
    contact: 'Контакты',
  },
  common: {
    book: 'Записаться',
    bookLong: 'Записаться',
    learnMore: 'Узнать подробнее',
    consultation: 'Индивидуальная консультация',
    viewProcedures: 'Смотреть процедуры',
    openMenu: 'Открыть меню',
    closeMenu: 'Закрыть меню',
    toBooking: 'Открыть систему записи',
    langLabel: 'Язык',
    skip: 'Перейти к содержимому',
    close: 'Закрыть',
    menuLabel: 'Меню',
    navPrimary: 'Основная навигация',
    cookieLabel: 'Согласие на использование cookie',
  },
  hero: {
    eyebrow: 'RÉVUM Aesthetic Clinic',
    line1: 'Ваша красота.',
    line2pre: 'Наш индивидуальный ',
    line2accent: 'подход.',
    sub: 'Современные эстетические процедуры, передовые технологии и внимательный уход в пространстве, созданном для вашего комфорта и доверия.',
    ctaPrimary: 'Смотреть услуги',
    ctaSecondary: 'Записаться',
    scroll: 'Листайте',
  },
  advantages: {
    heading: 'Почему RÉVUM',
    items: [
      {
        title: 'Современные технологии',
        text: 'Профессиональное оборудование и протоколы, адаптированные под каждого клиента.',
      },
      {
        title: 'Индивидуальный подход',
        text: 'Каждая процедура подбирается с учётом личных потребностей и пожеланий.',
      },
      {
        title: 'Комфорт и внимание',
        text: 'Элегантное пространство, спокойная атмосфера и забота на каждом этапе.',
      },
    ],
  },
  about: {
    eyebrow: 'О клинике',
    heading: 'Пространство современной эстетики',
    p1: 'RÉVUM — пространство современной эстетики, где технологии, внимание к деталям и индивидуальный подход объединяются в элегантной и комфортной атмосфере.',
    p2: 'Каждый визит начинается с понимания потребностей клиента и подбора подходящей процедуры — ради гармоничного, естественного результата в гармонии с собой.',
    points: [
      'Внимательная консультация перед каждой процедурой',
      'Профессиональные технологии и аппаратура',
      'Индивидуальные протоколы для лица и тела',
      'Уютная, чистая и спокойная обстановка',
    ],
    badge: 'Aesthetic Clinic · Кишинёв',
    mediaAlt: 'Элегантный интерьер клиники RÉVUM',
    media2Alt: 'Кабинет процедур RÉVUM',
  },
  services: {
    eyebrow: 'Услуги',
    heading: 'Процедуры для лица и тела',
    lead: 'Три основных направления; каждая процедура подбирается после индивидуальной консультации.',
    filters: { all: 'Все', devices: 'Аппаратные', aesthetics: 'Эстетика', injectables: 'Инъекционные' },
    procedureAria: (name: string) => `Записаться на «${name}» через систему Altegio`,
  },
  technologies: {
    eyebrow: 'Технологии',
    heading: 'Оборудование и технологии',
    lead: 'Профессиональная аппаратура для ухода за кожей, лифтинга и моделирования — применяется после оценки специалиста.',
    applications: 'Применение',
    note: 'Выбор процедуры и параметров осуществляется индивидуально, после консультации со специалистом. Результаты могут отличаться в зависимости от особенностей каждого человека.',
    placeholder: 'Фото оборудования',
  },
  gallery: {
    eyebrow: 'Атмосфера',
    heading: 'Атмосфера RÉVUM',
    lead: 'Интерьер, детали и пространства, созданные для спокойствия и комфорта.',
    alts: {
      salon: 'Элегантная зона ожидания в клинике RÉVUM',
      room: 'Светлый кабинет процедур',
      team1: 'Специалист RÉVUM в кабинете',
      team2: 'Специалист RÉVUM',
      art1: 'Золотистый декоративный акцент',
      art2: 'Элегантная кремовая текстура',
      art3: 'Абстрактный золотой мотив',
    },
  },
  cta: {
    heading: 'Подберите процедуру, подходящую именно вам',
    text: 'Запишитесь на консультацию и узнайте, какие варианты соответствуют вашим потребностям.',
    button: 'Записаться',
  },
  contact: {
    eyebrow: 'Контакты',
    heading: 'Приходите к нам',
    lead: 'Мы находимся в Ботанике, Кишинёв. Напишите нам или запишитесь онлайн.',
    labels: {
      address: 'Адрес',
      phone: 'Телефон',
      email: 'Email',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      hours: 'График',
      followUs: 'Мы в соцсетях',
    },
    whatsappValue: 'Написать в WhatsApp',
    instagramValue: 'Смотреть в Instagram',
    mapCta: 'Открыть карту',
    mapHint: 'Посмотреть локацию на карте',
  },
  footer: {
    desc: 'Клиника эстетики лица и тела в Кишинёве. Современные технологии и индивидуальный уход.',
    cols: { navigation: 'Навигация', services: 'Услуги', contact: 'Контакты' },
    legal: { privacy: 'Политика конфиденциальности', terms: 'Условия использования', cookies: 'Политика cookies' },
    rights: 'Все права защищены.',
  },
  cookie: {
    text: 'Мы используем файлы cookie для корректной работы сайта и анализа трафика.',
    more: 'Подробнее',
    accept: 'Принять',
    decline: 'Отклонить',
  },
  policies: {
    updatedLabel: 'Последнее обновление',
    updated: '2026',
    privacy: {
      title: 'Политика конфиденциальности',
      intro:
        'Эта политика описывает, как RÉVUM Face & Body Clinic собирает и использует персональные данные при посещении сайта или обращении к нам.',
      sections: [
        { h: 'Оператор данных', p: 'Оператор: [ЮРИДИЧЕСКОЕ НАЗВАНИЕ / IDNO — заполнить]. Адрес: Strada Ghică Vodă 3A, Кишинёв, Молдова. Контакт: contact@revumclinic.com.' },
        { h: 'Какие данные мы собираем', p: 'Данные, которые вы предоставляете напрямую (имя, телефон, email) при записи или обращении, а также минимальные технические данные (cookie) для работы сайта.' },
        { h: 'Цель обработки', p: 'Запись и оказание услуг, общение с вами и улучшение сайта. Мы не продаём ваши данные третьим лицам.' },
        { h: 'Онлайн-запись', p: 'Запись осуществляется через платформу Altegio; введённые там данные обрабатываются согласно политике соответствующего поставщика.' },
        { h: 'Ваши права', p: 'Вы можете запросить доступ, исправление или удаление ваших данных, написав на contact@revumclinic.com.' },
      ],
    },
    terms: {
      title: 'Условия использования',
      intro: 'Используя этот сайт, вы соглашаетесь с приведёнными ниже условиями.',
      sections: [
        { h: 'Общая информация', p: 'Содержание сайта носит информационный характер и не является медицинской рекомендацией. Любая процедура определяется после индивидуальной консультации.' },
        { h: 'Запись', p: 'Запись осуществляется через систему Altegio. Пожалуйста, заранее сообщайте о возможных изменениях.' },
        { h: 'Интеллектуальная собственность', p: 'Марка, логотип и содержание RÉVUM принадлежат клинике и не могут использоваться без согласия.' },
        { h: 'Ограничение ответственности', p: 'Результаты процедур могут отличаться индивидуально. Полные юридические сведения: [ЗАПОЛНИТ ВЛАДЕЛЕЦ].' },
      ],
    },
    cookies: {
      title: 'Политика cookies',
      intro: 'Мы используем минимальное количество cookie для работы сайта и анонимной статистики.',
      sections: [
        { h: 'Что такое cookie', p: 'Небольшие файлы в вашем браузере, которые помогают сайту работать и запоминать предпочтения (например, выбранный язык).' },
        { h: 'Необходимые cookie', p: 'Нужны для базовой работы — например, запоминание языка и согласия на cookie.' },
        { h: 'Управление cookie', p: 'Вы можете удалить или заблокировать cookie в настройках браузера. Некоторые функции могут работать иначе.' },
      ],
    },
  },
} as const

export const STRINGS: Record<Lang, typeof ro> = { ro, ru: ru as unknown as typeof ro }
export type Strings = typeof ro
