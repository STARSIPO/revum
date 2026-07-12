import { useState } from 'react'
import { useI18n } from '../i18n/LanguageContext'
import { useScrolled } from '../lib/hooks'
import { NAV } from '../data/nav'
import { BrandMark } from './BrandMark'
import { LangSwitch } from './LangSwitch'
import { BookLink } from './BookLink'
import { MobileMenu } from './MobileMenu'

export function Header() {
  const { t } = useI18n()
  const scrolled = useScrolled(8)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container container--wide header__inner">
          <a href="#home" aria-label={`${t.brand.name} — ${t.nav.home}`}>
            <BrandMark />
          </a>

          <nav className="nav" aria-label={t.common.navPrimary}>
            {NAV.map((item) => (
              <a key={item.key} className="nav__link" href={item.href}>
                {t.nav[item.key]}
              </a>
            ))}
          </nav>

          <div className="header__actions">
            <LangSwitch />
            <BookLink className="btn btn--primary btn--sm" ariaLabel={t.common.toBooking}>
              {t.common.book}
            </BookLink>
            <button
              type="button"
              className="hamburger"
              aria-label={t.common.openMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(true)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
