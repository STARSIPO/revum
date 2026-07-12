import { useRef, type CSSProperties } from 'react'
import { useI18n } from '../i18n/LanguageContext'
import { useLockBody, useEscape, useFocusTrap } from '../lib/hooks'
import { NAV } from '../data/nav'
import { BrandMark } from './BrandMark'
import { LangSwitch } from './LangSwitch'
import { BookLink } from './BookLink'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const { t } = useI18n()
  const ref = useRef<HTMLDivElement>(null)

  useLockBody(open)
  useEscape(open, onClose)
  useFocusTrap(open, ref)

  return (
    <div
      ref={ref}
      id="mobile-menu"
      className={`mobilemenu ${open ? 'is-open' : ''}`}
      aria-hidden={!open}
      role="dialog"
      aria-modal="true"
      aria-label={t.common.menuLabel}
      tabIndex={-1}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="mobilemenu__top">
        <BrandMark />
        <button type="button" className="mobilemenu__close" aria-label={t.common.closeMenu} onClick={onClose}>
          &times;
        </button>
      </div>

      <nav className="mobilemenu__nav" aria-label={t.common.navPrimary}>
        {NAV.map((item, i) => (
          <a
            key={item.key}
            className="mobilemenu__link"
            href={item.href}
            style={{ '--i': i } as CSSProperties}
            onClick={onClose}
          >
            <span className="idx">{String(i + 1).padStart(2, '0')}</span>
            {t.nav[item.key]}
          </a>
        ))}
      </nav>

      <div className="mobilemenu__footer">
        <LangSwitch />
        <BookLink className="btn btn--primary" ariaLabel={t.common.toBooking} withArrow>
          {t.common.bookLong}
        </BookLink>
      </div>
    </div>
  )
}
