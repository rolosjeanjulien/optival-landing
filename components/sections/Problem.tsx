'use client'

import { motion } from 'framer-motion'
import { TiltCard } from '@/components/ui/TiltCard'

const problems = [
  {
    emoji: '😤',
    quote:
      '"Je réponds à mes avis Google une fois par trimestre, quand j\'y pense."',
  },
  {
    emoji: '⏱',
    quote:
      '"Je perds des heures sur des tâches que l\'IA pourrait faire à ma place."',
  },
  {
    emoji: '🤷',
    quote:
      '"Je sais que l\'IA peut m\'aider, mais je ne sais pas par où commencer."',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export function Problem() {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#64748B] mb-4">
            Ce qu'on entend chaque semaine.
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
            Gérer une PME, c'est déjà<br className="hidden sm:block" /> un métier à plein temps.
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            La réputation digitale, l'automatisation, les outils IA...
            Tout semble urgent. Rien n'est simple à faire seul.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {problems.map((item, i) => (
            <motion.div key={i} variants={cardVariants}>
              <TiltCard amplitude={6} className="h-full">
                <div className="bg-white border border-gray-100 rounded-card p-8 shadow-card h-full flex flex-col gap-4 hover:shadow-lg transition-shadow">
                  <span className="text-4xl">{item.emoji}</span>
                  <p className="text-[#0F172A] text-lg font-medium leading-relaxed italic">
                    {item.quote}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 text-lg font-semibold text-indigo-600"
        >
          → C'est exactement pour ça qu'Optival existe.
        </motion.p>
      </div>
    </section>
  )
}
