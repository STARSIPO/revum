import { useI18n } from '../i18n/LanguageContext'
import { PHOTO, ART } from '../assets/images'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'

export function Gallery() {
  const { t } = useI18n()
  const a = t.gallery.alts
  const tiles = [
    { src: PHOTO.interiorSalon, alt: a.salon, cls: 'gtile--wide gtile--tall' },
    { src: PHOTO.roomTreatment, alt: a.room, cls: 'gtile--tall' },
    { src: ART.goldArc, alt: a.art3, cls: 'gtile--art' },
    { src: PHOTO.team1, alt: a.team1, cls: '' },
    { src: ART.champagne, alt: a.art2, cls: 'gtile--art' },
    { src: PHOTO.team2, alt: a.team2, cls: 'gtile--tall' },
    { src: ART.noir, alt: a.art1, cls: 'gtile--wide gtile--art' },
  ]

  return (
    <section id="gallery" className="section gallery">
      <div className="container container--wide">
        <Reveal>
          <SectionHead
            eyebrow={t.gallery.eyebrow}
            title={t.gallery.heading}
            lead={t.gallery.lead}
            center
          />
        </Reveal>
        <Reveal className="gallery__grid">
          {tiles.map((tile, i) => (
            <figure className={`gtile ${tile.cls}`} key={i}>
              <img src={tile.src} alt={tile.alt} loading="lazy" decoding="async" />
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
