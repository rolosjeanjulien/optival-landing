'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Est-ce que je dois avoir des compétences techniques ?',
    a: "Non. Notre rôle est précisément de gérer toute la complexité technique à votre place. Pour Autoreply, la mise en place est réalisée par nos soins. Pour les automatisations, on vous explique ce qu'on fait, pas comment le refaire. Vous avez juste à valider les résultats.",
  },
  {
    q: "Combien de temps avant d'avoir des résultats ?",
    a: "Pour Autoreply : opérationnel en moins de 72h. Pour les automatisations : les premiers processus automatisés sont livrés dans les 2 premières semaines.",
  },
  {
    q: "Et si l'outil génère une mauvaise réponse sur Google ?",
    a: "Vous choisissez le mode de publication qui vous convient. Un mode eemi-Auto est disponible: chaque réponse complexe vous est soumise par email. Vous répondez simplement \"OUI\" ou \"NON\". Aucune réponse n'est publiée sans votre accord si vous ne le souhaitez pas.",
  },
  {
    q: 'Quels types de PME travaillez-vous avec ?',
    a: "Restaurants, commerces de proximité, artisans, agences B2B, professions libérales, immobilier. Toute structure avec des processus répétitifs à optimiser ou une présence digitale à construire peut bénéficier de notre accompagnement.",
  },
  {
    q: "Vous êtes une agence ou un freelance ?",
    a: "Ni l'un ni l'autre au sens classique. Optival est une structure fondée par un expert technique indépendant. L'avantage: vous avez toujours le même interlocuteur, celui qui comprend votre projet et qui l'exécute.",
  },
  {
    q: "Quel est le coût d'Autoreply ?",
    a: "La grille tarifaire est disponible sur demande. Elle est indexée sur votre volume d'avis mensuel. Contactez-nous pour un devis personnalisé.",
  },
  {
    q: "Où sont hébergées mes données ?",
    a: "En Europe. Nous utilisons des hébergeurs conformes au RGPD. Vos données clients (avis, contacts, emails) ne sont jamais revendues ni utilisées pour entraîner des modèles IA. Nous sommes une entreprise française soumise au droit français.",
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-semibold text-[#0F172A] group-hover:text-indigo-600 transition-colors">
          {q}
        </span>
        <span className="shrink-0 text-indigo-500">
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[#64748B] leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0F172A]">
            On répond à vos vraies questions.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-gray-100 rounded-card shadow-card px-6 sm:px-8"
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
