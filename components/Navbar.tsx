'use client'
import { useState, useEffect } from 'react'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#galerie',  label: 'Galerie' },
  { href: '#a-propos', label: 'À propos' },
  { href: '#contact',  label: 'Nous joindre' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-ivory transition-shadow duration-300 ${scrolled ? 'shadow-sm' : ''}`}
      style={{ borderBottom: '1px solid rgba(212,165,116,0.4)' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-6">
        {/* Logo */}
        <a href="#" className="font-heading text-xl font-semibold text-chestnut tracking-wide shrink-0">
          Alice au pays des Doodles
        </a>

        {/* Desktop nav + CTA */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-body text-sm font-medium text-cocoa hover:text-golden transition-colors duration-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="h-5 w-px bg-caramel/40" />

          {/* Phone CTA */}
          <a
            href="tel:4508075366"
            className="flex items-center gap-2 bg-golden text-ivory font-body text-sm font-semibold px-4 py-2 rounded-full hover:bg-caramel transition-all duration-300 hover:scale-105"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            (450) 807-5366
          </a>
        </div>

        {/* Mobile: phone icon + burger */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href="tel:4508075366"
            aria-label="Appeler"
            className="w-9 h-9 bg-golden text-ivory rounded-full flex items-center justify-center hover:bg-caramel transition-colors duration-300"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
          </a>
          <button
            aria-label="Menu"
            className="flex flex-col gap-1.5 p-1"
            onClick={() => setOpen(!open)}
          >
            <span className={`block w-6 h-0.5 bg-cocoa transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-cocoa transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-cocoa transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="md:hidden bg-ivory px-6 pb-5 pt-2 flex flex-col gap-4"
          style={{ borderTop: '1px solid rgba(212,165,116,0.4)' }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body font-medium text-cocoa hover:text-golden transition-colors duration-300"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.facebook.com/p/Alice-au-pays-des-Doodles-100077639026053/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-body font-medium text-cocoa hover:text-golden transition-colors duration-300"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-golden" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook
          </a>
        </div>
      )}
    </nav>
  )
}
