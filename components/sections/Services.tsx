'use client'

import { motion } from 'framer-motion'
import { Globe, Zap, Search, Wrench, Mail, BarChart3, Smartphone, Link2, ClipboardList } from 'lucide-react'

const automationPills = [
  { icon: Mail, label: 'Relances clients' },
  { icon: BarChart3, label: 'Rapports auto' },
  { icon: Smartphone, label: 'Social media' },
  { icon: Mail, label: 'Tri d\'emails' },
  { icon: Link2, label: 'Connexion d\'outils' },
  { icon: ClipboardList, label: 'Process métier' },
]

const pillVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const pillItem = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
}

export function Services() {
  return (
    <section id="services" className="bg-surface py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-4">Conseil & Accompagnement IA</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-ink max-w-3xl" style={{ lineHeight: 1.1 }}>
            On s'installe. On identifie.<br />On livre.
          </h2>
          <p className="mt-5 text-muted text-lg max-w-xl">
            Pas de livrables théoriques. On part de vos processus réels et on construit ce qui fonctionne.
          </p>
        </motion.div>

        {/* Deux volets côte à côte — style craft, pas des cards rondes et ombrées */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-ink/8">

          {/* Volet A — Sites web */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="bg-bg-surface p-10 flex flex-col gap-6"
          >
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 bg-ink/5 rounded-lg flex items-center justify-center">
                <Globe size={20} className="text-ink/60" />
              </div>
              <span className="font-mono text-xs text-muted/50">01 / 02</span>
            </div>

            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink leading-snug mb-3">
                Un site qui travaille,<br />pas juste qui existe.
              </h3>
              <p className="text-muted leading-relaxed">
                Votre site est votre premier commercial. On le crée ou le refond pour qu'il
                convertisse — rapide, SEO optimisé, livré en 3 semaines.
              </p>
            </div>

            {/* Points clés — style liste, pas des pills */}
            <ul className="space-y-2">
              {[
                { icon: Zap, text: 'Livraison en 3 semaines' },
                { icon: Search, text: 'SEO natif dès le départ' },
                { icon: Wrench, text: 'Maintenance incluse' },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2.5 text-sm text-ink/70">
                  <Icon size={13} className="text-accent shrink-0" />
                  {text}
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn-outline-light btn-sm group mt-auto self-start">
              En savoir plus <span className="btn-arrow">→</span>
            </a>
          </motion.div>

          {/* Volet B — Automatisation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-bg-surface p-10 flex flex-col gap-6"
          >
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 bg-accent/8 rounded-lg flex items-center justify-center">
                <Zap size={20} className="text-accent" />
              </div>
              <span className="font-mono text-xs text-muted/50">02 / 02</span>
            </div>

            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink leading-snug mb-3">
                Vos tâches répétitives ?<br />L'IA s'en charge.
              </h3>
              <p className="text-muted leading-relaxed">
                On identifie ensemble les 3 à 6 tâches automatisables en 30 minutes.
              </p>
            </div>

            {/* Pills */}
            <motion.div
              className="flex flex-wrap gap-2"
              variants={pillVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {automationPills.map(({ icon: Icon, label }) => (
                <motion.span
                  key={label}
                  variants={pillItem}
                  className="inline-flex items-center gap-1.5 bg-surface border border-ink/10 rounded-full px-3 py-1 text-xs font-mono text-ink/60"
                >
                  <Icon size={11} className="text-accent" />
                  {label}
                </motion.span>
              ))}
            </motion.div>

            {/* Résultat */}
            <div className="border-l-2 border-accent pl-4 py-1">
              <p className="text-sm text-ink/70">
                En moyenne : 3 à 6 tâches identifiées en 30 min
              </p>
              <p className="text-sm font-semibold text-ink mt-0.5">
                → 4 à 8h récupérées par semaine
              </p>
            </div>

            <a href="#contact" className="btn-outline-light btn-sm group mt-auto self-start">
              Réserver un audit gratuit <span className="btn-arrow">→</span>
            </a>
          </motion.div>
        </div>

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-12"
        >
          <a href="#contact" className="btn-primary-light btn-lg group">
            Parler de mon projet <span className="btn-arrow">→</span>
          </a>
          <p className="text-sm text-muted">
            Réponse sous 24h · Sans engagement · 1 seul interlocuteur
          </p>
        </motion.div>

      </div>
    </section>
  )
}
