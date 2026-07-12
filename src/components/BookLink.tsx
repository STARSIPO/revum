import type { ReactNode } from 'react'
import { ALTEGIO } from '../data/clinicInfo'
import { Icon } from './Icon'

interface BookLinkProps {
  href?: string
  children: ReactNode
  className?: string
  ariaLabel?: string
  withArrow?: boolean
}

/**
 * Link into the Altegio booking system. Centralised here so every
 * booking CTA behaves identically (new tab, safe rel, clear label).
 */
export function BookLink({
  href = ALTEGIO.base,
  children,
  className = 'btn btn--primary',
  ariaLabel,
  withArrow = false,
}: BookLinkProps) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {children}
      {withArrow && <Icon name="arrow" size={18} className="btn-arrow" />}
    </a>
  )
}
