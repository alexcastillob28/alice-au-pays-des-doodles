'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

// 3-column asymmetric layout (desktop). Each item declares its column span and aspect ratio.
// Row 1: [8 puppies ×2 cols] [single puppy]
// Row 2: [3 in basket] [dog running ×2 cols]
// Row 3: [two on rock] [installations] [with humans]
const photos = [
  {
    src:   '/images/8puppydoodleinline.jpg',
    alt:   '8 chiots Goldendoodle en rang',
    col:   'md:col-span-2',
    aspect: 'aspect-[16/9]',
  },
  {
    src:   '/images/puppydoodleinbasket.jpg',
    alt:   'Chiot Goldendoodle dans un panier',
    col:   'md:col-span-1',
    aspect: 'aspect-square',
  },
  {
    src:   '/images/3goldendoodlesinbasket.jpg',
    alt:   'Trois Goldendoodles dans un panier',
    col:   'md:col-span-1',
    aspect: 'aspect-square',
  },
  {
    src:   '/images/dogrunninginfield.jpg',
    alt:   'Goldendoodle courant dans un champ',
    col:   'md:col-span-2',
    aspect: 'aspect-[16/9]',
  },
  {
    src:   '/images/twoblackdoodlesonrock.jpg',
    alt:   'Deux Doodles noirs sur un rocher',
    col:   'md:col-span-1',
    aspect: 'aspect-square',
  },
  {
    src:   '/images/installations.jpg',
    alt:   'Nos installations de pension canine',
    col:   'md:col-span-1',
    aspect: 'aspect-square',
  },
  {
    src:   '/images/doginleashwithhumans.jpg',
    alt:   'Chien en promenade avec sa famille',
    col:   'md:col-span-1',
    aspect: 'aspect-square',
  },
]

export default function Gallery() {
  const ref      = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="galerie" className="bg-blush py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm font-semibold text-golden tracking-widest uppercase">
            Nos petits amis
          </span>
          <h2 className="font-heading text-4xl md:text-5xl mt-3">Galerie</h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-caramel/50 rounded-full" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.55, delay: i * 0.07, ease: 'easeOut' }}
              className={`relative ${photo.aspect} ${photo.col} rounded-2xl overflow-hidden group`}
              style={{ border: '1px solid rgba(212,165,116,0.35)' }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-cocoa/0 group-hover:bg-cocoa/15 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Facebook CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.facebook.com/p/Alice-au-pays-des-Doodles-100077639026053/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-golden text-ivory font-body font-semibold px-8 py-3 rounded-full hover:bg-caramel transition-all duration-300 hover:scale-105"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Voir plus sur Facebook
          </a>
        </motion.div>
      </div>
    </section>
  )
}
