import { useI18n } from '../i18n/LanguageContext'
import { PHOTO, EMBLEM } from '../assets/images'
import { Reveal } from './Reveal'
import { Icon } from './Icon'

export function About() {
  const { t } = useI18n()
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <Reveal className="about__media">
          <div className="about__media-main">
            <img src={PHOTO.interiorSalon} alt={t.about.mediaAlt} loading="lazy" decoding="async" />
          </div>
          <div className="about__media-badge" aria-hidden="true">
            <img className="emblem" src={EMBLEM.gold} alt="" width={46} height={46} />
            <span>{t.about.badge}</span>
          </div>
        </Reveal>

        <Reveal className="about__text" delay={0.1}>
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2>{t.about.heading}</h2>
          <p className="lead">{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <ul className="about__points">
            {t.about.points.map((point) => (
              <li key={point}>
                <Icon name="check" size={20} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
