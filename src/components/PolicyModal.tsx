import { useRef, type ReactNode } from 'react'
import { useI18n } from '../i18n/LanguageContext'
import { useLockBody, useEscape, useFocusTrap } from '../lib/hooks'

export type PolicyKind = 'privacy' | 'terms' | 'cookies'

/** Highlight [BRACKETED] placeholders so missing legal data is obvious. */
function renderWithPlaceholders(text: string): ReactNode[] {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith('[') && part.endsWith(']') ? (
      <span className="placeholder" key={i}>{part}</span>
    ) : (
      <span key={i}>{part}</span>
    )
  )
}

export function PolicyModal({ kind, onClose }: { kind: PolicyKind; onClose: () => void }) {
  const { t } = useI18n()
  const ref = useRef<HTMLDivElement>(null)
  useLockBody(true)
  useEscape(true, onClose)
  useFocusTrap(true, ref)

  const p = t.policies[kind]

  return (
    <div className="modal">
      <div className="modal__backdrop" onClick={onClose} />
      <div className="modal__panel" ref={ref} role="dialog" aria-modal="true" aria-label={p.title} tabIndex={-1}>
        <button type="button" className="modal__close" aria-label={t.common.close} onClick={onClose}>
          &times;
        </button>
        <h2>{p.title}</h2>
        <p className="modal__updated">
          {t.policies.updatedLabel}: {t.policies.updated}
        </p>
        <p>{renderWithPlaceholders(p.intro)}</p>
        {p.sections.map((s) => (
          <div key={s.h}>
            <h3>{s.h}</h3>
            <p>{renderWithPlaceholders(s.p)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
