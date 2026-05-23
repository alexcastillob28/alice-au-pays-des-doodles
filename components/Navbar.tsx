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
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-heading text-xl font-semibold text-chestnut tracking-wide">
          Alice au pays des Doodles
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
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

        {/* Mobile burger */}
        <button
          aria-label="Menu"
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
        >
          <span className={`block w-6 h-0.5 bg-cocoa transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-cocoa transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-cocoa transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
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
        </div>
      )}
    </nav>
  )
}
