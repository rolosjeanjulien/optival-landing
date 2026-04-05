'use client'

import { motion } from 'framer-motion'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { CheckCircle2 } from 'lucide-react'

const stats = [
  { value: 5, suffix: '+', label: 'PME accompagnées' },
  { value: 3, suffix: ' ans', label: "d'exp. automatisation" },
  { value: 72, prefix: '< ', suffix: 'h', label: 'déploiement max' },
  { value: 100, suffix: '%', label: 'suivi garanti' },
]

const differentiators = [
  '1 seul interlocuteur du diagnostic à la livraison',
  'Livrables concrets avec ROI mesurable en semaines, pas en mois',
  'Réactif et disponible. Nous ne sommes pas une grande agence qui vous oublie',
  'On utilise les mêmes outils que ceux qu\'on vous recommande',
  'Sans engagement. Pas de contrat longue durée. Si ça ne fonctionne pas, vous arrêtez.',
]

export function Expertise() {
  return (
    <section id="expertise" className="bg-bg-surface py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-4">Pourquoi Optival</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-ink leading-tight">
            Une agence qui livre.<br />
            <span className="text-muted">Pas des PowerPoints.</span>
          </h2>
        </motion.div>

        {/* Compteurs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink/8 border border-ink/8 mb-16"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-bg-surface p-6 flex flex-col gap-1"
            >
              <p className="font-display text-4xl sm:text-5xl font-bold text-ink leading-none">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  delay={i * 0.15}
                />
              </p>
              <p className="text-xs text-muted font-mono leading-tight">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Différenciateurs */}
        <div>
          <p className="section-label mb-5">Ce qui nous différencie</p>
          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {differentiators.map((item) => (
              <motion.li
                key={item}
                variants={{
                  hidden: { opacity: 0, x: 10 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.35 } },
                }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                <span className="text-ink/70 text-sm leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

      </div>
    </section>
  )
}
