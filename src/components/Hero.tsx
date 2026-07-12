import { useI18n } from '../i18n/LanguageContext'
import { BookLink } from './BookLink'
import { Icon } from './Icon'

const BASE = import.meta.env.BASE_URL

// Give the hero image a real `fetchpriority` attribute (React 18 does not
// map the camelCase prop) so it loads with high priority.
function priorityRef(el: HTMLImageElement | null) {
  if (el) el.setAttribute('fetchpriority', 'high')
}

export function Hero() {
  const { t } = useI18n()
  return (
    <section id="home" className="hero">
      <div className="hero__media">
        {/* Priority hero image — eager load, high fetch priority, webp + jpg */}
        <picture>
          <source
            type="image/webp"
            srcSet={`${BASE}media/hero-800.webp 800w, ${BASE}media/hero-1400.webp 1400w, ${BASE}media/hero-2200.webp 2200w`}
            sizes="100vw"
          />
          <img
            ref={priorityRef}
            src={`${BASE}media/hero.jpg`}
            alt=""
            decoding="async"
            width={2200}
            height={1238}
          />
        </picture>
      </div>
      <div className="hero__scrim" aria-hidden="true" />

      <div className="container hero__inner">
        <p className="eyebrow hero__eyebrow">{t.hero.eyebrow}</p>
        <h1>
          {t.hero.line1}
          <br />
          <span>
            {t.hero.line2pre}
            <em className="accent text-gold">{t.hero.line2accent}</em>
          </span>
        </h1>
        <p className="lead hero__lead">{t.hero.sub}</p>
        <div className="hero__cta">
          <a className="btn btn--outline btn--lg" href="#services">
            {t.hero.ctaPrimary}
            <Icon name="arrowDown" size={18} className="btn-arrow" />
          </a>
          <BookLink className="btn btn--primary btn--lg" ariaLabel={t.common.toBooking} withArrow>
            {t.hero.ctaSecondary}
          </BookLink>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span>{t.hero.scroll}</span>
        <span className="line" />
      </div>
    </section>
  )
}
