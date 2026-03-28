'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, CheckCircle2, Lock } from 'lucide-react'
import { contactFormSchema, type ContactFormData } from '@/lib/validations'
import { MagneticButton } from '@/components/ui/MagneticButton'

const needOptions = [
  { value: 'autoreply', label: 'Autoreply — Avis Google' },
  { value: 'automation', label: 'Automatisation IA' },
  { value: 'website', label: 'Création / refonte de site' },
  { value: 'unknown', label: 'Je ne sais pas encore' },
]

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
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
    `w-full bg-white/10 border ${
      hasError ? 'border-red-400' : 'border-white/20'
    } rounded-button px-4 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all`

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#0A0A0F]">
      {/* Gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="gradient-blob blob-1 opacity-15" />
        <div className="gradient-blob blob-2 opacity-15" />
      </div>
      <div className="absolute inset-0 bg-[#0A0A0F]/80" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Prêt à récupérer<br />du temps cette semaine ?
          </h2>
          <p className="text-white/60 text-lg">
            Décrivez votre situation en 2 minutes.
            On revient avec une proposition concrète sous 24h.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="bg-white/5 border border-white/10 rounded-card p-12 text-center flex flex-col items-center gap-4"
              >
                <CheckCircle2 size={48} className="text-emerald-400" />
                <h3 className="text-white text-2xl font-bold font-display">Message bien reçu !</h3>
                <p className="text-white/60">
                  Jean-Julien revient vers vous sous 24h.
                </p>
                <p className="text-white/40 text-sm">En attendant : contact@optival.fr</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                {/* Honeypot — invisible */}
                <input
                  {...register('honeypot')}
                  type="text"
                  tabIndex={-1}
                  className="absolute opacity-0 pointer-events-none"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      {...register('firstName')}
                      type="text"
                      placeholder="Prénom *"
                      className={inputClass(!!errors.firstName)}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-xs text-red-400">{errors.firstName.message}</p>
                    )}
                  </div>

                  <div>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="Email professionnel *"
                      className={inputClass(!!errors.email)}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    {...register('phone')}
                    type="tel"
                    placeholder="Téléphone (optionnel)"
                    className={inputClass(false)}
                  />
                </div>

                <div>
                  <select
                    {...register('need')}
                    className={`${inputClass(!!errors.need)} appearance-none`}
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-[#0F172A]">
                      Votre besoin principal *
                    </option>
                    {needOptions.map((o) => (
                      <option key={o.value} value={o.value} className="bg-[#0F172A]">
                        {o.label}
                      </option>
                    ))}
                  </select>
                  {errors.need && (
                    <p className="mt-1 text-xs text-red-400">{errors.need.message}</p>
                  )}
                </div>

                <div>
                  <textarea
                    {...register('message')}
                    rows={4}
                    placeholder="Décrivez brièvement votre situation... (optionnel)"
                    className={`${inputClass(false)} resize-none`}
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-sm text-center">
                    Une erreur est survenue. Réessayez ou écrivez à contact@optival.fr
                  </p>
                )}

                <div className="flex flex-col items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="relative overflow-hidden w-full sm:w-auto bg-indigo-500 hover:bg-indigo-600 disabled:opacity-60 text-white font-semibold px-10 py-4 rounded-button shimmer-button transition-colors flex items-center justify-center gap-2 text-base"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      '→ Envoyer ma demande'
                    )}
                  </button>
                  <p className="text-white/30 text-xs flex items-center gap-1.5">
                    <Lock size={11} />
                    Données confidentielles · Aucun spam ·{' '}
                    <a href="/politique-de-confidentialite" className="hover:text-white/60 transition-colors underline">
                      Politique de confidentialité
                    </a>
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
