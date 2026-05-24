'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

function PawIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-honey" aria-hidden="true">
      <ellipse cx="32" cy="44" rx="12" ry="10" fill="currentColor" opacity="0.9"/>
      <ellipse cx="14" cy="34" rx="6" ry="8" fill="currentColor" opacity="0.7"/>
      <ellipse cx="50" cy="34" rx="6" ry="8" fill="currentColor" opacity="0.7"/>
      <ellipse cx="22" cy="22" rx="5" ry="7" fill="currentColor" opacity="0.7"/>
      <ellipse cx="42" cy="22" rx="5" ry="7" fill="currentColor" opacity="0.7"/>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background photo */}
      <Image
        src="/images/dogrunninginfield.jpg"
        alt="Bernedoodle courant dans un champ"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Warm dark overlay — bottom-heavy so text reads clearly */}
      <div className="absolute inset-0 bg-gradient-to-b from-cocoa/40 via-cocoa/30 to-cocoa/70" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-16 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <PawIcon />
          <span className="font-body text-sm font-semibold text-honey/90 tracking-widest uppercase drop-shadow">
            Valleyfield · Montréal
          </span>
          <PawIcon />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading text-5xl sm:text-6xl md:text-8xl font-light text-ivory leading-tight mb-6 drop-shadow-lg"
        >
          Alice au pays des
          <br />
          <em className="font-semibold italic text-honey">Doodles</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-lg md:text-xl text-ivory/85 mb-10 max-w-xl mx-auto leading-relaxed drop-shadow"
        >
          Élevage de Bernedoodles & pension canine avec amour et dévouement,
          au cœur de Valleyfield
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#services"
            className="bg-golden text-ivory font-body font-semibold px-8 py-3 rounded-full hover:bg-caramel transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Nos services
          </a>
          <a
            href="#contact"
            className="border-2 border-ivory text-ivory font-body font-semibold px-8 py-3 rounded-full hover:bg-ivory hover:text-cocoa transition-all duration-300 hover:scale-105"
          >
            Nous joindre
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="text-ivory/50"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Wave transition into Services (cream) */}
      <div className="absolute bottom-0 left-0 right-0 z-20" style={{ lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 72"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '72px' }}
          aria-hidden="true"
        >
          <path
            d="M0,36 C240,72 480,0 720,36 C960,72 1200,0 1440,36 L1440,72 L0,72 Z"
            fill="#F9F4F0"
          />
        </svg>
      </div>
    </section>
  )
}
