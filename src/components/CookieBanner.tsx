import { useI18n } from '../i18n/LanguageContext'

interface CookieBannerProps {
  open: boolean
  onAccept: () => void
  onDecline: () => void
  onMore: () => void
}

export function CookieBanner({ open, onAccept, onDecline, onMore }: CookieBannerProps) {
  const { t } = useI18n()
  if (!open) return null

  return (
    <div className="cookie" role="region" aria-label="cookie">
      <p>
        {t.cookie.text}{' '}
        <button type="button" className="cookie__more" onClick={onMore}>
          {t.cookie.more}
        </button>
      </p>
      <div className="cookie__actions">
        <button type="button" className="btn btn--outline btn--sm" onClick={onDecline}>
          {t.cookie.decline}
        </button>
        <button type="button" className="btn btn--primary btn--sm" onClick={onAccept}>
          {t.cookie.accept}
        </button>
      </div>
    </div>
  )
}
