'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" aria-hidden="true">
        <circle cx="32" cy="32" r="28" fill="#E8C9A0"/>
        <path d="M20 42c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#8B5E3C" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="32" cy="24" r="7" stroke="#8B5E3C" strokeWidth="2.5"/>
        <circle cx="20" cy="22" r="4" stroke="#8B5E3C" strokeWidth="2" opacity="0.6"/>
        <circle cx="44" cy="22" r="4" stroke="#8B5E3C" strokeWidth="2" opacity="0.6"/>
      </svg>
    ),
    title: 'Élevage de Bernedoodles',
    badge: 'Sur demande',
    price: null,
    description:
      'Nous élevons des Bernedoodles avec amour dans un environnement familial chaleureux. Nos chiots sont socialisés dès leur naissance, en bonne santé, et prêts à rejoindre leur nouvelle famille.',
    features: [
      'Chiots socialisés en environnement familial',
      'Suivi vétérinaire complet',
      'Accompagnement post-adoption',
      'Parents testés génétiquement',
    ],
    cta: 'Renseignez-vous',
    href: '#contact',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" aria-hidden="true">
        <circle cx="32" cy="32" r="28" fill="#E8C9A0"/>
        <path d="M18 38V28a14 14 0 0128 0v10" stroke="#8B5E3C" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M12 38h40" stroke="#8B5E3C" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M24 38v4m16-4v4" stroke="#8B5E3C" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="32" cy="22" r="3" fill="#C9956A"/>
      </svg>
    ),
    title: 'Pension Canine',
    badge: '45 $ / jour',
    price: '45 $',
    description:
      "Votre chien mérite le meilleur séjour pendant votre absence. Nous offrons un hébergement confortable et sécuritaire, avec beaucoup d'amour et d'attention personnalisée.",
    features: [
      'Hébergement confortable et sécuritaire',
      'Sorties et jeux quotidiens',
      'Alimentation selon vos instructions',
      'Mises à jour régulières',
    ],
    cta: 'Réserver',
    href: '#contact',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="bg-cream py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm font-semibold text-golden tracking-widest uppercase">
            Ce que nous offrons
          </span>
          <h2 className="font-heading text-4xl md:text-5xl mt-3">Nos Services</h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-caramel/50 rounded-full" />
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={cardVariants}
              className="bg-ivory border rounded-2xl p-8 hover:shadow-md hover:scale-[1.02] transition-all duration-300 flex flex-col"
              style={{ borderColor: 'rgba(212,165,116,0.4)' }}
            >
              {/* Icon + badge */}
              <div className="flex items-start justify-between mb-6">
                {s.icon}
                <span className="bg-honey text-cocoa font-body text-sm font-semibold px-4 py-1.5 rounded-full">
                  {s.badge}
                </span>
              </div>

              <h3 className="font-heading text-2xl md:text-3xl mb-3">{s.title}</h3>
              <p className="font-body text-cocoa/75 leading-relaxed mb-6">{s.description}</p>

              <ul className="space-y-2 mb-8 flex-1">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 font-body text-sm text-cocoa/80">
                    <span className="mt-1 text-golden">✦</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={s.href}
                className="block text-center bg-golden text-ivory font-body font-semibold px-6 py-3 rounded-full hover:bg-caramel transition-all duration-300 hover:scale-105"
              >
                {s.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
