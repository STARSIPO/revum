import { useEffect, useRef, useState, type ReactNode, type ElementType, type CSSProperties } from 'react'

interface RevealProps {
  children: ReactNode
  as?: ElementType
  delay?: number
  className?: string
  id?: string
}

/** Fades + lifts its children into view once, respecting reduced motion. */
export function Reveal({ children, as: Tag = 'div', delay = 0, className = '', id }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            io.disconnect()
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? ({ '--reveal-delay': `${delay}s` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  )
}
