import { useState } from 'react'
import { useI18n } from '../i18n/LanguageContext'
import {
  CATEGORIES,
  servicesByCategory,
  serviceLink,
  type CategoryId,
  type CategoryMeta,
  type Service,
} from '../data/services'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'
import { BookLink } from './BookLink'
import { Icon } from './Icon'

type Filter = 'all' | CategoryId
const COMPACT_LIMIT = 6

export function Services() {
  const { t, lang } = useI18n()
  const [filter, setFilter] = useState<Filter>('all')

  const catTitle = (c: CategoryMeta) => (lang === 'ru' ? c.titleRU : c.titleRO)
  const catDesc = (c: CategoryMeta) => (lang === 'ru' ? c.descRU : c.descRO)
  const catAlt = (c: CategoryMeta) => (lang === 'ru' ? c.imageAltRU : c.imageAltRO)
  const svcTitle = (s: Service) => (lang === 'ru' ? s.titleRU : s.titleRO)

  const shown = CATEGORIES.filter((c) => filter === 'all' || c.id === filter)
  const filters: Filter[] = ['all', 'devices', 'aesthetics', 'injectables']

  return (
    <section id="services" className="section services">
      <div className="container">
        <Reveal>
          <SectionHead eyebrow={t.services.eyebrow} title={t.services.heading} lead={t.services.lead} />
        </Reveal>

        <div className="services__filter" role="group" aria-label={t.services.eyebrow}>
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              className="chip"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f === 'all' ? t.services.filters.all : t.services.filters[f]}
            </button>
          ))}
        </div>

        <Reveal
          className={`services__grid ${shown.length === 1 ? 'services__grid--single' : ''}`}
          key={filter}
        >
          {shown.map((cat) => {
            const items = servicesByCategory(cat.id)
            const expanded = filter !== 'all'
            const visible = expanded ? items : items.slice(0, COMPACT_LIMIT)
            const hiddenCount = items.length - visible.length
            return (
              <article className="scard" key={cat.id}>
                <div className="scard__media">
                  <img src={cat.image} alt={catAlt(cat)} loading="lazy" decoding="async" />
                  <span className="scard__tag">{catTitle(cat)}</span>
                </div>
                <div className="scard__body">
                  <h3>{catTitle(cat)}</h3>
                  <p>{catDesc(cat)}</p>
                  <ul className="scard__list">
                    {visible.map((s) => (
                      <li key={s.id}>
                        <a
                          className="scard__proc"
                          href={serviceLink(s)}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={t.services.procedureAria(svcTitle(s))}
                        >
                          <span>{svcTitle(s)}</span>
                          <Icon name="arrow" size={16} className="arrow" />
                        </a>
                      </li>
                    ))}
                  </ul>
                  {hiddenCount > 0 && (
                    <button
                      type="button"
                      className="btn btn--ghost btn--sm scard__more"
                      onClick={() => setFilter(cat.id)}
                    >
                      {t.common.viewProcedures} (+{hiddenCount})
                    </button>
                  )}
                  <div className="scard__actions">
                    <BookLink className="btn btn--primary btn--sm" ariaLabel={t.common.toBooking} withArrow>
                      {t.common.bookLong}
                    </BookLink>
                  </div>
                </div>
              </article>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
