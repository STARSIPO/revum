// Lightweight inline icon set (stroke = currentColor). No icon library.
export type IconName =
  | 'arrow'
  | 'arrowDown'
  | 'phone'
  | 'mail'
  | 'whatsapp'
  | 'instagram'
  | 'facebook'
  | 'pin'
  | 'clock'
  | 'check'
  | 'info'
  | 'tech'
  | 'personal'
  | 'comfort'

interface IconProps {
  name: IconName
  className?: string
  size?: number
}

const P: Record<IconName, React.ReactNode> = {
  arrow: <path d="M4 12h15m0 0-6-6m6 6-6 6" />,
  arrowDown: <path d="M12 4v15m0 0 6-6m-6 6-6-6" />,
  phone: (
    <path d="M6.5 3.5h3l1.5 4-2 1.2a12 12 0 0 0 5.3 5.3l1.2-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </>
  ),
  whatsapp: (
    <path d="M4 20l1.4-4A8 8 0 1 1 8 18.6L4 20Zm5.2-11.1c-.2-.5-.4-.5-.6-.5h-.5a1 1 0 0 0-.7.3c-.2.3-.9.9-.9 2.1s.9 2.5 1 2.6c.1.2 1.7 2.8 4.3 3.8 2.1.8 2.6.7 3 .6.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1l-.5-.3c-.3-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.4 6.4 0 0 1-3.2-2.8c-.1-.3 0-.4.1-.5l.4-.5.3-.5v-.5l-.9-1.9Z" />
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="16.8" cy="7.2" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: <path d="M14 8.5h2V5.5h-2a3 3 0 0 0-3 3V11H9v3h2v6h3v-6h2.2l.8-3H14V8.7c0-.3.2-.2.5-.2Z" />,
  pin: (
    <>
      <path d="M12 21s6.5-5.2 6.5-10A6.5 6.5 0 0 0 5.5 11c0 4.8 6.5 10 6.5 10Z" />
      <circle cx="12" cy="11" r="2.4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 1.8" />
    </>
  ),
  check: <path d="m4.5 12.5 4.5 4.5 10.5-11" />,
  info: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 11v5m0-8.2v.2" />
    </>
  ),
  tech: (
    <>
      <path d="M12 3.2 20 7.6v8.8L12 20.8 4 16.4V7.6z" />
      <path d="M12 3.2v17.6M4 7.6l8 4.4 8-4.4" />
    </>
  ),
  personal: (
    <>
      <path d="M12 13.5c3.6 0 6.5 1.9 6.5 4.3V20h-13v-2.2c0-2.4 2.9-4.3 6.5-4.3Z" />
      <circle cx="12" cy="7.5" r="3.8" />
    </>
  ),
  comfort: (
    <path d="M12 20s-6.5-4-6.5-9A3.5 3.5 0 0 1 12 8.6 3.5 3.5 0 0 1 18.5 11c0 5-6.5 9-6.5 9Z" />
  ),
}

export function Icon({ name, className, size = 24 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {P[name]}
    </svg>
  )
}
