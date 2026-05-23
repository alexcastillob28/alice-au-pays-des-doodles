'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface FormData {
  name:    string
  email:   string
  phone?:  string
  service: string
  message: string
}

const serviceOptions = [
  { value: '',                             label: 'Choisir un service…' },
  { value: 'Élevage de Goldendoodles',     label: 'Élevage de Goldendoodles' },
  { value: 'Pension canine',               label: 'Pension canine' },
  { value: 'Autre / Renseignement',        label: 'Autre / Renseignement' },
]

export default function Contact() {
  const ref      = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  const inputClass = `w-full font-body text-cocoa bg-ivory border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-golden/40 transition-all duration-200 placeholder:text-cocoa/40`
  const borderStyle = { borderColor: 'rgba(212,165,116,0.5)' }

  return (
    <section id="contact" className="bg-blush py-24 px-6">
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
            Parlons-nous
          </span>
          <h2 className="font-heading text-4xl md:text-5xl mt-3">Nous joindre</h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-caramel/50 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-2 flex flex-col gap-6"
          >
            <div
              className="bg-ivory rounded-2xl p-6"
              style={{ border: '1px solid rgba(212,165,116,0.4)' }}
            >
              <h3 className="font-heading text-2xl mb-5">Coordonnées</h3>

              <div className="space-y-4">
                <InfoRow
                  icon={<PhoneIcon />}
                  label="Téléphone"
                  value={<a href="tel:4508075366" className="hover:text-golden transition-colors">(450) 807-5366</a>}
                />
                <InfoRow
                  icon={<MailIcon />}
                  label="Courriel"
                  value={<span className="text-cocoa/50 italic text-sm">À venir</span>}
                />
                <InfoRow
                  icon={<MapIcon />}
                  label="Localisation"
                  value="Valleyfield, Montréal, QC"
                />
                <InfoRow
                  icon={<FbIcon />}
                  label="Facebook"
                  value={
                    <a
                      href="https://www.facebook.com/p/Alice-au-pays-des-Doodles-100077639026053/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-golden hover:text-caramel transition-colors font-medium"
                    >
                      Notre page Facebook
                    </a>
                  }
                />
              </div>
            </div>

            {/* Pension price callout */}
            <div
              className="bg-honey/50 rounded-2xl p-6 text-center"
              style={{ border: '1px solid rgba(212,165,116,0.4)' }}
            >
              <p className="font-body text-sm text-cocoa/70 mb-1">Pension canine</p>
              <p className="font-heading text-4xl text-chestnut font-semibold">55 $</p>
              <p className="font-body text-sm text-cocoa/70">par jour</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-3"
          >
            <div
              className="bg-ivory rounded-2xl p-8"
              style={{ border: '1px solid rgba(212,165,116,0.4)' }}
            >
              {status === 'success' ? (
                <div className="text-center py-10">
                  <div className="text-4xl mb-4">🐾</div>
                  <h3 className="font-heading text-2xl text-chestnut mb-2">Message envoyé !</h3>
                  <p className="font-body text-cocoa/75">
                    Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 bg-golden text-ivory font-body font-semibold px-6 py-2.5 rounded-full hover:bg-caramel transition-all duration-300"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-body text-sm font-medium text-cocoa/80 mb-1.5 block">
                        Nom <span className="text-golden">*</span>
                      </label>
                      <input
                        {...register('name', { required: 'Champ requis' })}
                        placeholder="Votre nom"
                        className={inputClass}
                        style={borderStyle}
                      />
                      {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="font-body text-sm font-medium text-cocoa/80 mb-1.5 block">
                        Courriel <span className="text-golden">*</span>
                      </label>
                      <input
                        {...register('email', {
                          required: 'Champ requis',
                          pattern: { value: /\S+@\S+\.\S+/, message: 'Courriel invalide' },
                        })}
                        type="email"
                        placeholder="votre@courriel.com"
                        className={inputClass}
                        style={borderStyle}
                      />
                      {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-body text-sm font-medium text-cocoa/80 mb-1.5 block">
                        Téléphone
                      </label>
                      <input
                        {...register('phone')}
                        type="tel"
                        placeholder="(450) 000-0000"
                        className={inputClass}
                        style={borderStyle}
                      />
                    </div>
                    <div>
                      <label className="font-body text-sm font-medium text-cocoa/80 mb-1.5 block">
                        Service
                      </label>
                      <select
                        {...register('service')}
                        className={inputClass}
                        style={borderStyle}
                      >
                        {serviceOptions.map((o) => (
                          <option key={o.value} value={o.value}>{o.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-body text-sm font-medium text-cocoa/80 mb-1.5 block">
                      Message <span className="text-golden">*</span>
                    </label>
                    <textarea
                      {...register('message', { required: 'Champ requis' })}
                      rows={5}
                      placeholder="Votre message…"
                      className={`${inputClass} resize-none`}
                      style={borderStyle}
                    />
                    {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message.message}</p>}
                  </div>

                  {status === 'error' && (
                    <p className="text-sm text-red-400 bg-red-50 rounded-xl px-4 py-3">
                      Une erreur s'est produite. Veuillez réessayer ou nous appeler au (450) 807-5366.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-golden text-ivory font-body font-semibold px-6 py-3 rounded-full hover:bg-caramel transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:scale-100"
                  >
                    {status === 'loading' ? 'Envoi en cours…' : 'Envoyer le message'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 w-8 h-8 bg-honey rounded-xl flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <p className="font-body text-xs text-cocoa/50 mb-0.5">{label}</p>
        <div className="font-body text-sm text-cocoa font-medium">{value}</div>
      </div>
    </div>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#8B5E3C" strokeWidth="1.8" className="w-4 h-4" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#8B5E3C" strokeWidth="1.8" className="w-4 h-4" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
}

function MapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#8B5E3C" strokeWidth="1.8" className="w-4 h-4" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  )
}

function FbIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="#8B5E3C" className="w-4 h-4" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}
