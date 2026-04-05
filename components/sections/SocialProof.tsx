'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    stars: 5,
    quote: 'Avant, je répondais à mes avis Google une fois par mois. Maintenant c\'est automatique. Ma note est passée de 3,8 à 4,5 en deux mois. Je n\'ai rien eu à faire.',
    name: 'Un restaurateur',
    role: 'Avis Google · Autoreply',
    initials: '★',
    result: '+0,7 point de note · 2 mois',
  },
  {
    stars: 5,
    quote: 'Optival a automatisé nos relances clients et nos rapports hebdomadaires. On récupère 6h par semaine. L\'investissement était remboursé dès le premier mois.',
    name: 'Un dirigeant de PME',
    role: 'Automatisation · B2B',
    initials: '★',
    result: '6h récupérées par semaine',
  },
  {
    stars: 5,
    quote: 'Notre site a été refait en 3 semaines. Deux mois plus tard, on est en première page Google sur notre secteur. Sérieux, efficace, et sans nous prendre la tête.',
    name: 'Un artisan',
    role: 'Site internet · SEO',
    initials: '★',
    result: '1ère page Google · 2 mois',
  },
]

export function SocialProof() {
  return (
    <section className="bg-surface py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-4">Ce à quoi vous pouvez vous attendre</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-ink leading-tight">
            Des résultats réels,<br className="hidden sm:block" />
            <span className="text-muted">mesurables dès le premier mois.</span>
          </h2>
        </motion.div>

        {/* Témoignages — style éditorial, pas des cards rondes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/8 border border-ink/8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-bg-surface p-8 flex flex-col gap-5"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className="text-accent text-sm">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-ink/70 leading-relaxed text-[15px] flex-1">
                "{t.quote}"
              </p>

              {/* Author — discret */}
              <div className="flex items-center justify-between pt-4 border-t border-ink/8">
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-muted font-mono">{t.role}</p>
                </div>
                <span className="text-xs font-mono text-accent bg-accent/8 border border-accent/20 px-2.5 py-1 rounded-full shrink-0">
                  {t.result}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
