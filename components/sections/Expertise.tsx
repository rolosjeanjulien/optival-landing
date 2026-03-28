'use client'

import { motion } from 'framer-motion'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { CheckCircle2 } from 'lucide-react'

const stats = [
  { value: 50, suffix: '+', label: 'PME accompagnées' },
  { value: 5, suffix: ' ans', label: 'd\'exp. automatisation' },
  { value: 72, prefix: '< ', suffix: 'h', label: 'déploiement max' },
  { value: 100, suffix: '%', label: 'suivi garanti' },
]

const differentiators = [
  '1 seul interlocuteur du diagnostic à la livraison',
  'Solutions no-code / low-code : pas de dépendance technique créée',
  'Livrables concrets avec ROI mesurable en semaines, pas en mois',
  'Réactif et disponible — pas une grande agence qui vous oublie',
  'On utilise les mêmes outils que ceux qu\'on vous recommande',
]

const tools = ['Make', 'Claude AI', 'Next.js', 'Webflow', 'Notion', 'Zapier']

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
          <p className="section-label mb-4">Votre interlocuteur</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-ink" style={{ lineHeight: 1.1 }}>
            Un expert technique.<br />Un seul interlocuteur.<br />
            <span className="text-muted">De A à Z.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Profil */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-7"
          >
            {/* Avatar — craft: carré, pas arrondi */}
            <div className="w-20 h-20 bg-ink rounded-[10px] flex items-center justify-center text-white font-display font-bold text-2xl">
              JJ
            </div>

            <div>
              <p className="font-display text-2xl font-bold text-ink">Jean-Julien Rols</p>
              <p className="text-muted mt-1">Fondateur d'Optival</p>
            </div>

            <p className="text-muted leading-relaxed max-w-md">
              Consultant en automatisation IA, développeur web, et créateur d'Autoreply. J'aide les
              dirigeants de PME à gagner du temps et à moderniser leur activité — sans jargon.
            </p>

            {/* Outils — monospace, discret */}
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="font-mono text-xs bg-surface border border-ink/10 text-ink/50 px-3 py-1.5 rounded"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Preuves */}
          <div className="flex flex-col gap-12">

            {/* Compteurs — typographie forte, pas de fanfare */}
            <div className="grid grid-cols-2 gap-px bg-ink/8 border border-ink/8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
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
                </motion.div>
              ))}
            </div>

            {/* Différenciateurs */}
            <div>
              <p className="section-label mb-5">Ce qui nous différencie</p>
              <motion.ul
                className="space-y-3"
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
        </div>
      </div>
    </section>
  )
}
