'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Contact() {
  const ref      = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="bg-blush py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <span className="font-body text-sm font-semibold text-golden tracking-widest uppercase">
            Parlons-nous
          </span>
          <h2 className="font-heading text-4xl md:text-5xl mt-3">Nous joindre</h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-caramel/50 rounded-full" />
          <p className="mt-5 font-body text-cocoa/70 text-base max-w-md mx-auto leading-relaxed">
            Vous avez une question sur nos Bernedoodles ou la pension&nbsp;?
            Contactez-nous directement — nous répondons rapidement&nbsp;!
          </p>
        </motion.div>

        {/* CTA cards */}
        <div className="grid sm:grid-cols-2 gap-6 mt-12">
          {/* Phone card */}
          <motion.a
            href="tel:4508075366"
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group bg-ivory rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
            style={{ border: '1px solid rgba(212,165,116,0.4)' }}
          >
            <div className="w-16 h-16 bg-honey rounded-2xl flex items-center justify-center mb-5 group-hover:bg-golden transition-colors duration-300">
              <svg viewBox="0 0 24 24" fill="none" stroke="#8B5E3C" strokeWidth="1.8" className="w-7 h-7 group-hover:stroke-ivory transition-colors duration-300" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <h3 className="font-heading text-2xl mb-1">Appelez-nous</h3>
            <p className="font-body text-cocoa/60 text-sm mb-5">
              Lun – Dim · Disponible pour vous répondre
            </p>
            <span className="font-heading text-3xl text-chestnut font-semibold mb-6">
              (450) 807-5366
            </span>
            <span className="w-full bg-golden text-ivory font-body font-semibold px-6 py-3 rounded-full group-hover:bg-caramel transition-colors duration-300">
              Appeler maintenant
            </span>
          </motion.a>

          {/* Facebook card */}
          <motion.a
            href="https://www.facebook.com/p/Alice-au-pays-des-Doodles-100077639026053/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="group bg-ivory rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
            style={{ border: '1px solid rgba(212,165,116,0.4)' }}
          >
            <div className="w-16 h-16 bg-honey rounded-2xl flex items-center justify-center mb-5 group-hover:bg-golden transition-colors duration-300">
              <svg viewBox="0 0 24 24" fill="#8B5E3C" className="w-7 h-7 group-hover:fill-ivory transition-colors duration-300" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <h3 className="font-heading text-2xl mb-1">Écrivez-nous</h3>
            <p className="font-body text-cocoa/60 text-sm mb-5">
              Via Facebook Messenger — réponse rapide garantie
            </p>
            <span className="font-heading text-xl text-chestnut font-semibold mb-6">
              Alice au pays des Doodles
            </span>
            <span className="w-full bg-golden text-ivory font-body font-semibold px-6 py-3 rounded-full group-hover:bg-caramel transition-colors duration-300">
              Envoyer un message
            </span>
          </motion.a>
        </div>

        {/* Pension price callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="mt-10 text-center"
        >
          <div
            className="inline-flex items-center gap-3 bg-ivory px-8 py-4 rounded-full"
            style={{ border: '1px solid rgba(212,165,116,0.4)' }}
          >
            <span className="font-body text-sm text-cocoa/60">Pension canine</span>
            <span className="w-px h-4 bg-caramel/40" />
            <span className="font-heading text-2xl text-chestnut font-semibold">45 $ / jour</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
