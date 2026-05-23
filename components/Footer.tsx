const links = [
  { href: '#services', label: 'Services' },
  { href: '#galerie',  label: 'Galerie' },
  { href: '#a-propos', label: 'À propos' },
  { href: '#contact',  label: 'Nous joindre' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-cocoa text-cream py-14 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl text-cream mb-3">
              Alice au pays des Doodles
            </h3>
            <p className="font-body text-sm text-cream/65 leading-relaxed">
              Élevage de Goldendoodles & pension canine à Valleyfield, Montréal.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-heading text-lg text-cream mb-4">Navigation</h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-body text-sm text-cream/65 hover:text-honey transition-colors duration-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg text-cream mb-4">Coordonnées</h4>
            <ul className="space-y-2 font-body text-sm text-cream/65">
              <li>
                <a href="tel:4508075366" className="hover:text-honey transition-colors duration-300">
                  (450) 807-5366
                </a>
              </li>
              <li>Valleyfield, Montréal, QC</li>
              <li>
                <a
                  href="https://www.facebook.com/p/Alice-au-pays-des-Doodles-100077639026053/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-honey transition-colors duration-300"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-cream/40 text-xs font-body"
          style={{ borderTop: '1px solid rgba(249,244,240,0.15)' }}
        >
          <span>© {year} Alice au pays des Doodles. Tous droits réservés.</span>
          <span>Fait avec ❤️ à Valleyfield</span>
        </div>
      </div>
    </footer>
  )
}
