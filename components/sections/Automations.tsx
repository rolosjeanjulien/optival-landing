'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  MessageSquare, FileText, CalendarCheck, Share2,
  FileScan, UserPlus, Landmark, BarChart2,
  Zap, Clock,
} from 'lucide-react'

const quickWins = [
  {
    icon: MessageSquare,
    title: 'Réponses clients automatisées',
    description:
      'Un agent IA trie vos emails et messages entrants, rédige des brouillons de réponse et escalade les cas complexes. Le use case n°1 des agences d\'automatisation.',
    result: 'Temps de réponse divisé par 5',
    integrations: ['Gmail', 'Outlook', 'Zendesk'],
  },
  {
    icon: FileText,
    title: 'Relance devis & factures',
    description:
      'Séquence automatique : devis envoyé → relance J+3 → relance J+7 → alerte commerciale. Intégrable avec Pennylane, Sellsy et Axonaut.',
    result: 'Taux de conversion devis +30 %',
    integrations: ['Pennylane', 'Sellsy', 'Axonaut'],
  },
  {
    icon: CalendarCheck,
    title: 'Prise de rendez-vous intelligente',
    description:
      'Chatbot ou formulaire web qui qualifie le prospect, vérifie la disponibilité dans votre agenda et envoie confirmation + rappel automatique.',
    result: 'Zéro no-show, zéro double-booking',
    integrations: ['Google Cal', 'Notion', 'HubSpot'],
  },
  {
    icon: Share2,
    title: 'Publication réseaux sociaux',
    description:
      'Pipeline complet : brief → génération texte + image → planification multi-plateforme → reporting hebdomadaire. Facturé 500–2 000 €/mois côté US.',
    result: '3× plus de régularité de publication',
    integrations: ['LinkedIn', 'Instagram', 'Make'],
  },
]

const backOffice = [
  {
    icon: FileScan,
    title: 'Traitement de documents entrants',
    description:
      'OCR + extraction IA sur bons de commande, factures fournisseurs, devis et contrats. Classement automatique et saisie dans votre ERP ou CRM.',
    result: '80 % de saisie manuelle éliminée',
    integrations: ['Pennylane', 'Odoo', 'Salesforce'],
  },
  {
    icon: UserPlus,
    title: 'Onboarding employés & clients',
    description:
      'Workflow qui déclenche : envoi des documents, création des accès, signature électronique, séquence de bienvenue, rappels de complétion.',
    result: 'Onboarding bouclé en 24 h',
    integrations: ['Notion', 'DocuSign', 'Make'],
  },
  {
    icon: Landmark,
    title: 'Rapprochement bancaire',
    description:
      'Connexion bancaire → catégorisation automatique des transactions par IA → pré-écriture comptable. Conçu pour les obligations comptables françaises.',
    result: 'Clôture mensuelle 2× plus rapide',
    integrations: ['Pennylane', 'Bridge API', 'Axonaut'],
  },
  {
    icon: BarChart2,
    title: 'Reporting automatisé',
    description:
      'Agrégation multi-sources (CRM, analytics, compta) → dashboard ou rapport PDF/email envoyé chaque lundi matin, sans intervention manuelle.',
    result: '4 h de reporting épargnées / semaine',
    integrations: ['Notion', 'Google Sheets', 'Looker'],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.07 },
  }),
}

interface AutomationCardProps {
  icon: React.ElementType
  title: string
  description: string
  result: string
  integrations: string[]
  index: number
}

function AutomationCard({
  icon: Icon,
  title,
  description,
  result,
  integrations,
  index,
}: AutomationCardProps) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="group bg-white border border-night/8 rounded-2xl p-6 flex flex-col gap-4 hover:border-sage-dark/30 hover:shadow-[0_0_0_1px_rgba(74,138,117,0.20)] transition-all duration-300"
    >
      <div className="w-10 h-10 bg-sage-dark/8 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-sage-dark/15 transition-colors duration-300">
        <Icon size={19} className="text-sage-dark" />
      </div>

      <div className="flex-1">
        <h4 className="font-display font-semibold text-[16px] text-night leading-snug mb-2">
          {title}
        </h4>
        <p className="text-mist-dark text-[13.5px] leading-relaxed">{description}</p>
      </div>

      <div className="border-t border-night/6 pt-3 flex items-start justify-between gap-3">
        <div className="flex items-center gap-1.5 text-[12px] font-semibold text-night/70">
          <Zap size={11} className="text-sage-dark shrink-0" />
          {result}
        </div>
        <div className="flex gap-1 flex-wrap justify-end">
          {integrations.map((tool) => (
            <span
              key={tool}
              className="font-mono text-[10px] text-mist-dark/60 bg-night/4 rounded px-1.5 py-0.5"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function Automations() {
  return (
    <section id="automatismes" className="bg-white py-24 px-4 sm:px-6 lg:px-8 border-t border-night/6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-4">Catalogue d'automatismes</p>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl text-night leading-tight max-w-4xl">
            Des automatismes prêts<br className="hidden sm:block" /> à l'emploi pour votre PME.
          </h2>
          <p className="mt-5 text-mist-dark text-lg max-w-2xl">
            Chaque automatisme est testé, documenté et déployable en quelques jours.
            Vous choisissez ce qui correspond à votre situation — on s'occupe du reste.
          </p>
        </motion.div>

        {/* ─── Quick Win ─── */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="inline-flex items-center gap-1.5 bg-sage-dark/10 text-sage-dark font-mono text-xs font-semibold px-3 py-1.5 rounded-full">
              <Zap size={11} />
              Quick Win
            </span>
            <p className="text-mist-dark text-sm">Forte demande · Rapide à déployer · ROI visible en 30 jours</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickWins.map((item, i) => (
              <AutomationCard key={item.title} {...item} index={i} />
            ))}
          </div>
        </div>

        {/* ─── Back Office ─── */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="inline-flex items-center gap-1.5 bg-night/6 text-night/60 font-mono text-xs font-semibold px-3 py-1.5 rounded-full">
              <Clock size={11} />
              Back Office
            </span>
            <p className="text-mist-dark text-sm">Gain de temps massif · Infrastructure solide · Erreurs humaines éliminées</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {backOffice.map((item, i) => (
              <AutomationCard key={item.title} {...item} index={i} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-night/6"
        >
          <a href="#contact" className="btn-primary-light btn-lg group">
            Identifier mes gains rapides <span className="btn-arrow">→</span>
          </a>
          <p className="text-sm text-mist-dark">Audit gratuit · Réponse en 48 h · Sans engagement</p>
        </motion.div>

      </div>
    </section>
  )
}
