import type { Strings } from '../i18n/strings'

export interface NavItem {
  key: keyof Strings['nav']
  href: string
}

export const NAV: NavItem[] = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'services', href: '#services' },
  { key: 'technologies', href: '#technologies' },
  { key: 'gallery', href: '#gallery' },
  { key: 'contact', href: '#contact' },
]
