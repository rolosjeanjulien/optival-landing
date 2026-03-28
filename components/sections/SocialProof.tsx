'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    stars: 5,
    quote: 'Avant Autoreply, je répondais à mes avis une fois par mois. Maintenant c\'est automatique. Ma note Google est passée de 3,8 à 4,5 en deux mois.',
    name: 'Sophie M.',
    role: 'Restauratrice, Lyon',
    initials: 'SM',
  },
  {
    stars: 5,
    quote: 'Jean-Julien a automatisé nos relances clients et nos rapports hebdomadaires. 6h récupérées par semaine. L\'investissement était remboursé dès le premier mois.',
    name: 'Thomas L.',
    role: 'Directeur PME B2B, Paris',
    initials: 'TL',
  },
  {
    stars: 5,
    quote: 'Notre site refait en 3 semaines, première page Google sur notre secteur en 2 mois. Sérieux et efficace.',
    name: 'Camille R.',
    role: 'Artisan, Bordeaux',
    initials: 'CR',
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
          <p className="section-label mb-4">Ils l'ont fait. Voici ce qu'ils en disent.</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-ink leading-tight">
            Des résultats concrets,<br className="hidden sm:block" />
            <span className="text-muted">pas des promesses.</span>
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
              <div className="flex items-center gap-3 pt-4 border-t border-ink/8">
                <div className="w-8 h-8 rounded bg-ink flex items-center justify-center text-white text-xs font-mono shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-muted font-mono">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
