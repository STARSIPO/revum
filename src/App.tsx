import { useState } from 'react'
import { LanguageProvider, useI18n } from './i18n/LanguageContext'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Advantages } from './components/Advantages'
import { About } from './components/About'
import { Services } from './components/Services'
import { Technologies } from './components/Technologies'
import { Gallery } from './components/Gallery'
import { CtaBook } from './components/CtaBook'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { StickyBook } from './components/StickyBook'
import { CookieBanner } from './components/CookieBanner'
import { PolicyModal, type PolicyKind } from './components/PolicyModal'

const COOKIE_KEY = 'revum.cookie'

function Site() {
  const { t } = useI18n()
  const [policy, setPolicy] = useState<PolicyKind | null>(null)
  const [cookieOpen, setCookieOpen] = useState<boolean>(() => {
    try {
      return !localStorage.getItem(COOKIE_KEY)
    } catch {
      return true
    }
  })

  const decideCookie = (value: 'accepted' | 'declined') => {
    try {
      localStorage.setItem(COOKIE_KEY, value)
    } catch {
      /* ignore */
    }
    setCookieOpen(false)
    // Keep keyboard focus in a sane place after the banner unmounts.
    document.getElementById('main')?.focus()
  }

  return (
    <>
      <a className="skip-link" href="#main">{t.common.skip}</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Advantages />
        <About />
        <Services />
        <Technologies />
        <Gallery />
        <CtaBook />
        <Contact />
      </main>
      <Footer onOpenPolicy={setPolicy} />
      <StickyBook suppressed={cookieOpen} />
      <CookieBanner
        open={cookieOpen}
        onAccept={() => decideCookie('accepted')}
        onDecline={() => decideCookie('declined')}
        onMore={() => setPolicy('cookies')}
      />
      {policy && <PolicyModal kind={policy} onClose={() => setPolicy(null)} />}
    </>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <Site />
    </LanguageProvider>
  )
}
