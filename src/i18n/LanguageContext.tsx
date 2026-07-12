import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react'
import { STRINGS, type Lang, type Strings } from './strings'

const STORAGE_KEY = 'revum.lang'

interface I18nValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: Strings
}

const I18nContext = createContext<I18nValue | null>(null)

function initialLang(): Lang {
  // Remember the visitor's explicit choice; otherwise open in Romanian
  // (the clinic's primary language).
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'ro' || stored === 'ru') return stored
  } catch { /* ignore */ }
  return 'ro'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    try { localStorage.setItem(STORAGE_KEY, l) } catch { /* ignore */ }
  }, [])

  useEffect(() => {
    const t = STRINGS[lang]
    document.documentElement.lang = lang
    document.title = t.meta.title
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', t.meta.description)
    const ogLocale = document.querySelector('meta[property="og:locale"]')
    if (ogLocale) ogLocale.setAttribute('content', lang === 'ru' ? 'ru_RU' : 'ro_RO')
    const ogLocaleAlt = document.querySelector('meta[property="og:locale:alternate"]')
    if (ogLocaleAlt) ogLocaleAlt.setAttribute('content', lang === 'ru' ? 'ro_RO' : 'ru_RU')
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', t.meta.title)
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', t.meta.description)
  }, [lang])

  return (
    <I18nContext.Provider value={{ lang, setLang, t: STRINGS[lang] }}>
      {children}
    </I18nContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within LanguageProvider')
  return ctx
}
