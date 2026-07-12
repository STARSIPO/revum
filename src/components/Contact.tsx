import { useState } from 'react'
import { useI18n } from '../i18n/LanguageContext'
import { clinicInfo, mapEmbedUrl, mapLinkUrl } from '../data/clinicInfo'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'
import { Icon } from './Icon'

export function Contact() {
  const { t, lang } = useI18n()
  const [mapLoaded, setMapLoaded] = useState(false)
  const hours = lang === 'ru' ? clinicInfo.hoursRU : clinicInfo.hoursRO
  const L = t.contact.labels

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal>
          <SectionHead eyebrow={t.contact.eyebrow} title={t.contact.heading} lead={t.contact.lead} />
        </Reveal>

        <div className="contact__grid">
          <Reveal>
            <ul className="contact__list">
              <li className="contact__row">
                <span className="ic"><Icon name="pin" /></span>
                <div>
                  <div className="lbl">{L.address}</div>
                  <a className="val" href={mapLinkUrl} target="_blank" rel="noopener noreferrer">
                    {clinicInfo.addressFull}
                  </a>
                </div>
              </li>
              <li className="contact__row">
                <span className="ic"><Icon name="phone" /></span>
                <div>
                  <div className="lbl">{L.phone}</div>
                  <a className="val" href={clinicInfo.phoneHref}>{clinicInfo.phone}</a>
                </div>
              </li>
              <li className="contact__row">
                <span className="ic"><Icon name="mail" /></span>
                <div>
                  <div className="lbl">{L.email}</div>
                  <a className="val" href={clinicInfo.emailHref}>{clinicInfo.email}</a>
                </div>
              </li>
              <li className="contact__row">
                <span className="ic"><Icon name="clock" /></span>
                <div>
                  <div className="lbl">{L.hours}</div>
                  <div className="val hours-note">{hours}</div>
                </div>
              </li>
            </ul>

            <div>
              <div className="lbl" style={{ marginBottom: '0.4rem' }}>{L.followUs}</div>
              <div className="contact__socials">
                <a href={clinicInfo.whatsapp} target="_blank" rel="noopener noreferrer" aria-label={L.whatsapp}>
                  <Icon name="whatsapp" size={20} />
                </a>
                {clinicInfo.instagram && (
                  <a href={clinicInfo.instagram} target="_blank" rel="noopener noreferrer" aria-label={L.instagram}>
                    <Icon name="instagram" size={20} />
                  </a>
                )}
                <a href={clinicInfo.phoneHref} aria-label={L.phone}>
                  <Icon name="phone" size={20} />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal className="contact__map" delay={0.1}>
            {mapLoaded ? (
              <iframe
                src={mapEmbedUrl}
                title={t.contact.mapHint}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <button type="button" className="contact__map-btn" onClick={() => setMapLoaded(true)}>
                <Icon name="pin" size={30} />
                <span>{t.contact.mapCta}</span>
              </button>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
