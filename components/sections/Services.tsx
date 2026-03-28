'use client'

import { motion } from 'framer-motion'
import { TiltCard } from '@/components/ui/TiltCard'
import { GradientBadge } from '@/components/ui/GradientBadge'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { Zap, Globe, Search, Wrench, Mail, BarChart3, Smartphone, Link2, ClipboardList } from 'lucide-react'

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
  visible: { transition: { staggerChildren: 0.08 } },
}

const pillItem = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
}

export function Services() {
  return (
    <section id="services" className="bg-[#F8FAFC] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <GradientBadge className="mb-6">🛠 Conseil & Accompagnement IA</GradientBadge>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
            On s'installe dans votre quotidien.<br className="hidden sm:block" />
            On identifie. On automatise. On livre.
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            Pas de livrables théoriques. Pas de présentations de 50 slides.
            On part de vos processus réels et on construit ce qui fonctionne.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Volet A — Sites web */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <TiltCard amplitude={8} className="h-full">
              <div className="bg-white rounded-card p-8 shadow-card h-full flex flex-col gap-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center">
                  <Globe size={24} className="text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">
                    Un site qui travaille,<br />pas juste qui existe.
                  </h3>
                  <p className="text-[#64748B] leading-relaxed">
                    Votre site est votre premier commercial. On le crée ou le refond pour qu'il
                    convertisse — rapide, SEO optimisé, livré en 3 semaines.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  {[
                    { icon: Zap, label: 'Livraison en 3 semaines' },
                    { icon: Search, label: 'SEO natif' },
                    { icon: Wrench, label: 'Maintenance incluse' },
                  ].map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 bg-[#F8FAFC] border border-gray-200 rounded-full px-3 py-1.5 text-sm text-[#0F172A] font-medium"
                    >
                      <Icon size={14} className="text-indigo-500" />
                      {label}
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-4">
                  <a href="#contact" className="text-indigo-600 font-semibold text-sm hover:text-indigo-700 transition-colors">
                    En savoir plus →
                  </a>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Volet B — Automatisation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <TiltCard amplitude={8} className="h-full">
              <div className="bg-white rounded-card p-8 shadow-card h-full flex flex-col gap-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center">
                  <Zap size={24} className="text-violet-600" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">
                    Vos tâches répétitives ?<br />L'IA s'en charge.
                  </h3>
                  <p className="text-[#64748B] leading-relaxed">
                    Emails, relances, rapports, publication réseaux sociaux... On identifie ensemble
                    les 3 à 6 tâches automatisables en 30 minutes.
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
                    <motion.div
                      key={label}
                      variants={pillItem}
                      className="flex items-center gap-1.5 bg-violet-50 border border-violet-200 rounded-full px-3 py-1.5 text-sm text-violet-700 font-medium"
                    >
                      <Icon size={13} />
                      {label}
                    </motion.div>
                  ))}
                </motion.div>

                {/* Bandeau résultat */}
                <div className="bg-indigo-50 border border-indigo-100 rounded-xl px-4 py-3 flex items-start gap-3">
                  <span className="text-lg">💡</span>
                  <p className="text-sm text-indigo-800 font-medium">
                    En moyenne : 3 à 6 tâches identifiées en 30 min → <strong>4 à 8h récupérées/semaine</strong>
                  </p>
                </div>

                <div className="mt-auto pt-4">
                  <a href="#contact" className="text-indigo-600 font-semibold text-sm hover:text-indigo-700 transition-colors">
                    Réserver un audit gratuit →
                  </a>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-3 mt-12"
        >
          <MagneticButton href="#contact" size="lg">
            Parler de mon projet →
          </MagneticButton>
          <p className="text-sm text-[#64748B]">
            Réponse sous 24h · Sans engagement · 1 seul interlocuteur
          </p>
        </motion.div>
      </div>
    </section>
  )
}
