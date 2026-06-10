'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, CheckCircle2, Lock, CalendarDays } from 'lucide-react'
import { contactFormSchema, type ContactFormData } from '@/lib/validations'

const needOptions = [
  { value: 'autoreply', label: 'Autoreply — Avis Google' },
  { value: 'automation', label: 'Automatisation IA' },
  { value: 'website', label: 'Création / refonte de site' },
  { value: 'unknown', label: 'Je ne sais pas encore' },
]

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  const inputClass = (hasError: boolean) =>
    `w-full bg-white/5 border ${hasError ? 'border-red-400' : 'border-white/10'} rounded-button px-4 py-3.5 text-ivory placeholder-white/25 text-sm font-mono focus:outline-none focus:border-sage transition-all`

  return (
    <section id="contact" className="bg-night dark-section grain-overlay py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-16 items-start">

          {/* Texte gauche */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-sage" />
              <span className="font-mono text-xs text-white/30 tracking-[0.2em] uppercase">
                Contact
              </span>
            </div>
            <h2 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl text-ivory leading-tight">
              Parlons de
              <br />votre situation.
            </h2>
            <p className="text-mist text-lg max-w-sm">
              Un audit personalisé. On identifie ce qu'on peut automatiser et ce que ça vous coûte.
            </p>

            {/* Calendly — point d'entrée principal */}
            <a
              href="https://calendly.com/optival/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-sage text-night font-semibold px-6 py-4 rounded-button hover:bg-sage/90 transition-colors group self-start"
            >
              <CalendarDays size={18} />
              Demander mon audit personalisé
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </a>

            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-white/25 text-xs font-mono">ou envoyez un message</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            <div className="pt-0 border-t border-white/8">
              <a href="mailto:contact@optival.fr" className="text-mist/60 text-sm font-mono hover:text-mist transition-colors">
                contact@optival.fr
              </a>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className="border border-white/10 rounded-[12px] p-12 text-center flex flex-col items-center gap-4"
                >
                  <CheckCircle2 size={40} className="text-[#16A34A]" />
                  <h3 className="font-display text-ivory text-2xl font-semibold">Message bien reçu !</h3>
                  <p className="text-mist">Nous reviendrons vers vous sous 24h.</p>
                  <p className="text-mist/50 text-sm font-mono">contact@optival.fr</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-3"
                >
                  <input
                    {...register('honeypot')}
                    type="text"
                    tabIndex={-1}
                    className="absolute opacity-0 pointer-events-none"
                    aria-hidden="true"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <input {...register('firstName')} type="text" placeholder="Prénom *" className={inputClass(!!errors.firstName)} />
                      {errors.firstName && <p className="mt-1 text-xs text-red-400 font-mono">{errors.firstName.message}</p>}
                    </div>
                    <div>
                      <input {...register('email')} type="email" placeholder="Email *" className={inputClass(!!errors.email)} />
                      {errors.email && <p className="mt-1 text-xs text-red-400 font-mono">{errors.email.message}</p>}
                    </div>
                  </div>

                  <input {...register('phone')} type="tel" placeholder="Téléphone (optionnel)" className={inputClass(false)} />

                  <div>
                    <select
                      {...register('need')}
                      className={`${inputClass(!!errors.need)} appearance-none`}
                      defaultValue=""
                    >
                      <option value="" disabled className="bg-[#0E1B2C]">Votre besoin principal *</option>
                      {needOptions.map((o) => (
                        <option key={o.value} value={o.value} className="bg-[#0E1B2C]">{o.label}</option>
                      ))}
                    </select>
                    {errors.need && <p className="mt-1 text-xs text-red-400 font-mono">{errors.need.message}</p>}
                  </div>

                  <textarea
                    {...register('message')}
                    rows={4}
                    placeholder="Décrivez brièvement votre situation... (optionnel)"
                    className={`${inputClass(false)} resize-none`}
                  />

                  {status === 'error' && (
                    <p className="text-red-400 text-xs font-mono text-center">
                      Erreur. Réessayez ou écrivez à contact@optival.fr
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary btn-lg group w-full justify-center disabled:opacity-50 mt-1"
                  >
                    {status === 'loading' ? (
                      <><Loader2 size={16} className="animate-spin" /> Envoi en cours...</>
                    ) : (
                      <> Envoyer ma demande <span className="btn-arrow">→</span></>
                    )}
                  </button>

                  <p className="text-white/20 text-xs font-mono flex items-center justify-center gap-1.5">
                    <Lock size={10} />
                    Données confidentielles ·{' '}
                    <a href="/politique-de-confidentialite" className="hover:text-white/40 transition-colors underline">
                      RGPD
                    </a>
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
