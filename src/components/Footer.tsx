import { useI18n } from '../i18n/LanguageContext'
import { clinicInfo } from '../data/clinicInfo'
import { NAV } from '../data/nav'
import { CATEGORIES } from '../data/services'
import { BrandMark } from './BrandMark'
import { Icon } from './Icon'
import type { PolicyKind } from './PolicyModal'

export function Footer({ onOpenPolicy }: { onOpenPolicy: (k: PolicyKind) => void }) {
  const { t, lang } = useI18n()
  const year = new Date().getFullYear()
  const hours = lang === 'ru' ? clinicInfo.hoursRU : clinicInfo.hoursRO

  return (
    <footer className="footer">
      <div className="container container--wide">
        <div className="footer__grid">
          <div className="footer__brandcol">
            <BrandMark />
            <p className="footer__desc">{t.footer.desc}</p>
            <div className="footer__socials">
              <a href={clinicInfo.whatsapp} target="_blank" rel="noopener noreferrer" aria-label={t.contact.labels.whatsapp}>
                <Icon name="whatsapp" size={18} />
              </a>
              {clinicInfo.instagram && (
                <a href={clinicInfo.instagram} target="_blank" rel="noopener noreferrer" aria-label={t.contact.labels.instagram}>
                  <Icon name="instagram" size={18} />
                </a>
              )}
              <a href={clinicInfo.emailHref} aria-label={t.contact.labels.email}>
                <Icon name="mail" size={18} />
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4>{t.footer.cols.navigation}</h4>
            <ul>
              {NAV.map((item) => (
                <li key={item.key}>
                  <a href={item.href}>{t.nav[item.key]}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>{t.footer.cols.services}</h4>
            <ul>
              {CATEGORIES.map((c) => (
                <li key={c.id}>
                  <a href="#services">{lang === 'ru' ? c.titleRU : c.titleRO}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>{t.footer.cols.contact}</h4>
            <ul>
              <li><a href={clinicInfo.phoneHref}>{clinicInfo.phone}</a></li>
              <li><a href={clinicInfo.emailHref}>{clinicInfo.email}</a></li>
              <li>{clinicInfo.addressFull}</li>
              <li>{hours}</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <div>© {year} {clinicInfo.name}. {t.footer.rights}</div>
          <div className="footer__legal">
            <button type="button" onClick={() => onOpenPolicy('privacy')}>{t.footer.legal.privacy}</button>
            <button type="button" onClick={() => onOpenPolicy('terms')}>{t.footer.legal.terms}</button>
            <button type="button" onClick={() => onOpenPolicy('cookies')}>{t.footer.legal.cookies}</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
