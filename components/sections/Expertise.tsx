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
    <section id="expertise" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#64748B] mb-3">
            Votre interlocuteur
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A]">
            Un expert technique.<br />
            Un seul interlocuteur.<br />
            De A à Z.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Profil */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            {/* Photo placeholder */}
            <div className="w-24 h-24 bg-gradient-to-br from-indigo-400 to-violet-500 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-card">
              JJ
            </div>

            <div>
              <p className="font-display text-2xl font-bold text-[#0F172A]">Jean-Julien Rols</p>
              <p className="text-[#64748B] font-medium mt-1">Fondateur d'Optival</p>
            </div>

            <p className="text-[#64748B] leading-relaxed max-w-lg">
              Consultant en automatisation IA, développeur web, et créateur d'Autoreply. J'aide
              les dirigeants de PME à gagner du temps et à moderniser leur activité — sans vous
              noyer dans le jargon.
            </p>

            {/* Outils */}
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="bg-[#F8FAFC] border border-gray-200 text-[#0F172A] text-sm font-medium px-3 py-1.5 rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Preuves */}
          <div className="flex flex-col gap-10">
            {/* Compteurs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex flex-col gap-1"
                >
                  <p className="font-display text-3xl sm:text-4xl font-bold text-[#0F172A]">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                      delay={i * 0.15}
                    />
                  </p>
                  <p className="text-xs text-[#64748B] leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Différenciateurs */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#64748B] mb-5">
                Ce qui nous différencie
              </p>
              <motion.ul
                className="flex flex-col gap-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
              >
                {differentiators.map((item) => (
                  <motion.li
                    key={item}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                    }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 size={18} className="text-indigo-500 shrink-0 mt-0.5" />
                    <span className="text-[#0F172A] text-sm leading-relaxed">{item}</span>
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
