import { useI18n } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'
import { Icon, type IconName } from './Icon'

const ICONS: IconName[] = ['tech', 'personal', 'comfort']

export function Advantages() {
  const { t } = useI18n()
  return (
    <section className="section advantages" aria-labelledby="advantages-title">
      <div className="container">
        <h2 id="advantages-title" className="sr-only">{t.advantages.heading}</h2>
        <div className="advantages__grid">
          {t.advantages.items.map((item, i) => (
            <Reveal className="advantage" delay={i * 0.08} key={ICONS[i]}>
              <div className="advantage__icon">
                <Icon name={ICONS[i]} size={34} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
