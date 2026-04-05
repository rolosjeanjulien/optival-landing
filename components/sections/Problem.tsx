'use client'

import { motion } from 'framer-motion'

const problems = [
  {
    number: '01',
    quote: '"Je réponds à mes avis Google une fois par trimestre, quand j\'y pense."',
    tag: 'Réputation digitale',
  },
  {
    number: '02',
    quote: '"Je perds des heures sur des tâches qu\'un assistant pourrait gérer à ma place."',
    tag: 'Productivité',
  },
  {
    number: '03',
    quote: '"Je sais que l\'IA peut m\'aider, mais je ne sais pas par où commencer."',
    tag: 'Mise en route',
  },
]

export function Problem() {
  return (
    <section className="bg-bg-surface py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-4">Ce qu'on entend chaque semaine</p>
          <div className="flex items-start gap-6 max-w-3xl">
            <div className="craft-rule mt-3 shrink-0" />
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-ink leading-tight">
              Gérer une PME, c'est déjà<br className="hidden sm:block" /> un métier à plein temps.
            </h2>
          </div>
          <p className="mt-6 text-muted text-lg max-w-xl ml-18">
            La réputation digitale, l'automatisation, les outils IA...
            Tout semble urgent. Rien n'est simple à faire seul.
          </p>
        </motion.div>

        {/* Citations — style pull-quote, pas des cards */}
        <div className="space-y-0 border-t border-ink/8">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex items-start gap-8 py-8 border-b border-ink/8 hover:bg-surface transition-colors px-4 -mx-4 cursor-default"
            >
              {/* Numéro */}
              <span className="font-mono text-xs text-muted/50 pt-1.5 shrink-0 w-6">
                {item.number}
              </span>

              {/* Quote */}
              <p className="font-display text-xl sm:text-2xl lg:text-3xl text-ink font-medium leading-snug flex-1">
                {item.quote}
              </p>

              {/* Tag */}
              <span className="hidden sm:inline-flex shrink-0 items-center self-center px-3 py-1 rounded-full text-xs font-mono bg-surface text-muted border border-ink/8 group-hover:border-accent/30 group-hover:text-accent transition-colors">
                {item.tag}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Transition */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-3 mt-10"
        >
          <div className="craft-rule" />
          <p className="text-ink font-semibold text-lg">
            C'est exactement pour ça qu'Optival existe.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
