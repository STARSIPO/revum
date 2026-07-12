import { useI18n } from '../i18n/LanguageContext'
import { useScrolled } from '../lib/hooks'
import { BookLink } from './BookLink'

/** Mobile-only sticky booking button (revealed after scrolling). */
export function StickyBook({ suppressed = false }: { suppressed?: boolean }) {
  const { t } = useI18n()
  const scrolled = useScrolled(680)
  const show = scrolled && !suppressed
  return (
    <div className={`stickybook ${show ? 'is-visible' : ''}`}>
      <BookLink className="btn btn--primary btn--block" ariaLabel={t.common.toBooking} withArrow>
        {t.common.bookLong}
      </BookLink>
    </div>
  )
}
