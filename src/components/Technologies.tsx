import { useI18n } from '../i18n/LanguageContext'
import { TECHNOLOGIES, type Technology } from '../data/technologies'
import { EMBLEM } from '../assets/images'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'
import { BookLink } from './BookLink'
import { Icon } from './Icon'

export function Technologies() {
  const { t, lang } = useI18n()
  const kicker = (x: Technology) => (lang === 'ru' ? x.kickerRU : x.kickerRO)
  const desc = (x: Technology) => (lang === 'ru' ? x.descRU : x.descRO)
  const apps = (x: Technology) => (lang === 'ru' ? x.appsRU : x.appsRO)

  return (
    <section id="technologies" className="section tech on-dark">
      <div className="container">
        <Reveal>
          <SectionHead eyebrow={t.technologies.eyebrow} title={t.technologies.heading} lead={t.technologies.lead} />
        </Reveal>

        <Reveal className="tech__grid">
          {TECHNOLOGIES.map((tech) => (
            <article className="tcard" key={tech.id}>
              <div className="tcard__visual">
                {tech.image ? (
                  <img src={tech.image} alt={tech.name} loading="lazy" decoding="async" />
                ) : (
                  <>
                    <img className="tcard__emblem" src={EMBLEM.gold} alt="" width={72} height={72} />
                    <span className="tcard__ph">{t.technologies.placeholder}</span>
                  </>
                )}
              </div>
              <div className="tcard__body">
                <p className="tcard__kicker">{kicker(tech)}</p>
                <h3>{tech.name}</h3>
                <p>{desc(tech)}</p>
                <div className="tcard__tags" aria-label={t.technologies.applications}>
                  {apps(tech).map((a) => (
                    <span key={a}>{a}</span>
                  ))}
                </div>
                <div className="tcard__foot">
                  <BookLink className="btn btn--outline btn--sm" ariaLabel={t.common.toBooking} withArrow>
                    {t.common.bookLong}
                  </BookLink>
                </div>
              </div>
            </article>
          ))}
        </Reveal>

        <p className="tech__note">
          <Icon name="info" size={18} />
          <span>{t.technologies.note}</span>
        </p>
      </div>
    </section>
  )
}
