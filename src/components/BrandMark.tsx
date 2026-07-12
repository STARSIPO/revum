import { EMBLEM } from '../assets/images'
import { useI18n } from '../i18n/LanguageContext'

interface BrandMarkProps {
  withSub?: boolean
  className?: string
}

/** Emblem + RÉVUM wordmark lockup (used in header, footer, mobile menu). */
export function BrandMark({ withSub = true, className = '' }: BrandMarkProps) {
  const { t } = useI18n()
  return (
    <span className={`brand ${className}`}>
      <img className="brand__emblem" src={EMBLEM.gold} alt="" width={38} height={38} />
      <span>
        <span className="brand__word">{t.brand.name}</span>
        {withSub && <span className="brand__sub">{t.brand.tagline}</span>}
      </span>
    </span>
  )
}
