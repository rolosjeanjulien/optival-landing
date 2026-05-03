'use client'

import { motion } from 'framer-motion'
import { Phone, FileText, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Un appel de 30 min — offert',
    description:
      'Vous nous expliquez votre quotidien en quelques mots. Pas besoin de préparer quoi que ce soit. On pose des questions simples.',
    detail: 'Aucune technique. Aucun engagement. En français, avec un interlocuteur français.',
  },
  {
    number: '02',
    icon: FileText,
    title: 'On vous dit exactement ce qu\'on peut faire',
    description:
      'En 48h, vous recevez une proposition claire : ce qu\'on automatise, ce que ça vous coûte, et combien de temps vous allez récupérer chaque semaine.',
    detail: 'Devis détaillé · Facture française · TVA incluse.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Automatisation complète. Vous n\'y touchez plus.',
    description:
      'On installe, on configure, on teste. Vous n\'avez rien à apprendre ni à gérer. C\'est en route, et ça tourne tout seul.',
    detail: 'Support inclus · Données hébergées en Europe · Conforme RGPD.',
  },
]

export function Process() {
  return (
    <section id="process" className="bg-[#0F0E0D] grain-overlay py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-accent" />
            <span className="font-mono text-xs text-white/30 tracking-[0.2em] uppercase">
              Comment ça se passe
            </span>
          </div>
          <h2
            className="font-display font-bold text-white max-w-2xl"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
          >
            Simple. Sans surprise.
            <br />
            <span className="text-white/30">Sans jargon.</span>
          </h2>
          <p className="mt-5 text-white/40 text-lg max-w-lg">
            De votre premier appel à la mise en route — voici exactement ce qui se passe.
          </p>
        </motion.div>

        {/* Étapes avec connecteurs */}
        <div className="relative">
          {/* Ligne de connexion — desktop uniquement */}
          <div className="hidden md:block absolute top-[2.75rem] left-[calc(33.333%_-_1px)] right-[calc(33.333%_-_1px)] h-px bg-white/8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="bg-[#0F0E0D] p-8 lg:p-10 flex flex-col gap-5 group"
                >
                  {/* Numéro + icône */}
                  <div className="flex items-start justify-between">
                    <div className="w-11 h-11 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/15 group-hover:border-accent/30 transition-colors duration-200">
                      <Icon size={20} className="text-accent" />
                    </div>
                    <span className="font-mono text-2xl font-bold text-white/8 leading-none">{step.number}</span>
                  </div>

                  {/* Titre */}
                  <h3
                    className="font-display font-bold text-white leading-snug"
                    style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)' }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/45 text-[15px] leading-relaxed flex-1">
                    {step.description}
                  </p>

                  {/* Détail */}
                  <div className="border-t border-white/8 pt-4">
                    <p className="text-xs font-mono text-accent/50">
                      {step.detail}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA Calendly */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-12"
        >
          <a
            href="https://calendly.com/optival/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-lg group"
          >
            Demander mon audit gratuit
            <span className="btn-arrow">→</span>
          </a>
          <p className="text-sm text-white/30">
            Aucun engagement · Réponse en moins de 24h
          </p>
        </motion.div>

      </div>
    </section>
  )
}
