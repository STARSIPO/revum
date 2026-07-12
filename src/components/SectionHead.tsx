import type { ReactNode } from 'react'

interface SectionHeadProps {
  eyebrow: string
  title: ReactNode
  lead?: string
  center?: boolean
  className?: string
}

export function SectionHead({ eyebrow, title, lead, center = false, className = '' }: SectionHeadProps) {
  return (
    <div className={`sectionhead ${center ? 'sectionhead--center' : ''} ${className}`}>
      <p className={`eyebrow sectionhead__eyebrow ${center ? 'eyebrow--center' : ''}`}>{eyebrow}</p>
      <h2>{title}</h2>
      {lead && <p className="lead sectionhead__lead">{lead}</p>}
    </div>
  )
}
