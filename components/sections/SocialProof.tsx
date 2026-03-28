'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    stars: 5,
    quote:
      'Avant Autoreply, je répondais à mes avis une fois par mois. Maintenant c\'est automatique. Ma note Google est passée de 3,8 à 4,5 en deux mois.',
    name: 'Sophie M.',
    role: 'Restauratrice, Lyon',
    initials: 'SM',
    color: 'from-rose-400 to-pink-500',
  },
  {
    stars: 5,
    quote:
      'Jean-Julien a automatisé nos relances clients et nos rapports hebdomadaires. 6h récupérées par semaine. L\'investissement était remboursé dès le premier mois.',
    name: 'Thomas L.',
    role: 'Directeur PME B2B, Paris',
    initials: 'TL',
    color: 'from-indigo-400 to-violet-500',
  },
  {
    stars: 5,
    quote:
      'Notre site refait en 3 semaines, première page Google sur notre secteur en 2 mois. Sérieux et efficace.',
    name: 'Camille R.',
    role: 'Artisan, Bordeaux',
    initials: 'CR',
    color: 'from-emerald-400 to-teal-500',
  },
]

export function SocialProof() {
  return (
    <section className="bg-[#F8FAFC] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#64748B] mb-4">
            Ils l'ont fait. Voici ce qu'ils en disent.
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A]">
            Des résultats concrets,<br className="hidden sm:block" /> pas des promesses.
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-white rounded-card p-8 shadow-card border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#0F172A] leading-relaxed flex-1">"{t.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A] text-sm">— {t.name}</p>
                  <p className="text-[#64748B] text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
