import { useI18n } from '../i18n/LanguageContext'
import type { Lang } from '../i18n/strings'

const LANGS: Lang[] = ['ro', 'ru']

export function LangSwitch({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const { lang, setLang, t } = useI18n()
  return (
    <div
      className={`langswitch ${variant === 'dark' ? 'langswitch--dark' : ''}`}
      role="group"
      aria-label={t.common.langLabel}
    >
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          className="langswitch__btn"
          aria-pressed={lang === l}
          onClick={() => setLang(l)}
          lang={l}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
