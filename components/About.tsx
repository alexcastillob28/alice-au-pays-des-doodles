'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const values = [
  {
    icon: '🐾',
    title: 'Passion',
    text: "Chaque chien est traité comme un membre de la famille, avec toute l'attention et l'affection qu'il mérite.",
  },
  {
    icon: '🏡',
    title: 'Environnement familial',
    text: "Nos Doodles grandissent dans un milieu chaleureux, socialisés avec des enfants, d'autres chiens et la vie quotidienne.",
  },
  {
    icon: '❤️',
    title: 'Engagement',
    text: "Nous accompagnons chaque famille avant, pendant et après l'adoption pour assurer une transition en douceur.",
  },
]

export default function About() {
  const ref  = useRef(null)
  const ref2 = useRef(null)
  const isInView  = useInView(ref,  { once: true, margin: '-80px' })
  const isInView2 = useInView(ref2, { once: true, margin: '-80px' })

  return (
    <section id="a-propos" className="bg-cream py-24 px-6">
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
            Notre histoire
          </span>
          <h2 className="font-heading text-4xl md:text-5xl mt-3">À propos</h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-caramel/50 rounded-full" />
        </motion.div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md"
            style={{ border: '1px solid rgba(212,165,116,0.4)' }}
          >
            <Image
              src="/images/doginleashwithhumans.jpg"
              alt="Chien en laisse avec ses humains"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-heading text-3xl md:text-4xl mb-5">
              Bienvenue dans notre univers
            </h3>
            <p className="font-body text-cocoa/80 leading-relaxed mb-4">
              Située au cœur de Valleyfield, à Montréal, Alice au pays des Doodles est une petite éleveuse passionnée qui élève des Goldendoodles dans un cadre familial bienveillant.
            </p>
            <p className="font-body text-cocoa/80 leading-relaxed mb-4">
              Notre mission est simple : vous offrir un chiot en excellente santé, bien socialisé et débordant d'amour, prêt à s'épanouir dans votre foyer.
            </p>
            <p className="font-body text-cocoa/80 leading-relaxed mb-8">
              Nous proposons également un service de pension canine pour que votre fidèle compagnon soit choyé pendant votre absence — comme s'il était chez lui.
            </p>
            <a
              href="#contact"
              className="inline-block bg-golden text-ivory font-body font-semibold px-8 py-3 rounded-full hover:bg-caramel transition-all duration-300 hover:scale-105"
            >
              Prendre contact
            </a>
          </motion.div>
        </div>

        {/* Values */}
        <div ref={ref2} className="grid sm:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-ivory rounded-2xl p-6 text-center hover:shadow-md hover:scale-[1.02] transition-all duration-300"
              style={{ border: '1px solid rgba(212,165,116,0.4)' }}
            >
              <div className="text-3xl mb-3">{v.icon}</div>
              <h4 className="font-heading text-xl mb-2">{v.title}</h4>
              <p className="font-body text-sm text-cocoa/70 leading-relaxed">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
