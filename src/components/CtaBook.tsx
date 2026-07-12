import { useI18n } from '../i18n/LanguageContext'
import { PHOTO } from '../assets/images'
import { Reveal } from './Reveal'
import { BookLink } from './BookLink'

export function CtaBook() {
  const { t } = useI18n()
  return (
    <section className="cta">
      <div className="cta__media" aria-hidden="true">
        <img src={PHOTO.interiorSalon} alt="" loading="lazy" decoding="async" />
      </div>
      <div className="cta__scrim" aria-hidden="true" />
      <div className="container">
        <Reveal className="cta__inner">
          <h2>{t.cta.heading}</h2>
          <p>{t.cta.text}</p>
          <BookLink className="btn btn--primary btn--lg" ariaLabel={t.common.toBooking} withArrow>
            {t.cta.button}
          </BookLink>
        </Reveal>
      </div>
    </section>
  )
}
