'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Est-ce que je dois avoir des compétences techniques ?',
    a: "Non. Notre rôle est précisément de gérer toute la complexité technique à votre place. La mise en place est réalisée par nos soins. Pour les automatisations, on vous explique ce qu'on fait, pas comment le refaire. Vous avez juste à valider les résultats.",
  },
  {
    q: "Combien de temps avant d'avoir des résultats ?",
    a: "Le premier rendez-vous est garantie sous 72h. Un rapport personalisée et des propositions d'optimisation à haut retour sur investissement sont ensuite partagé.",
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
    q: "Et si l'outil Autoreply génère une mauvaise réponse sur Google ?",
    a: "Vous choisissez le mode de publication qui vous convient. Un mode semi-Auto est disponible: chaque réponse complexe vous est soumise pour validation par email. Aucune réponse n'est publiée sans votre accord si vous ne le souhaitez pas.",
  },
  {
    q: "Mes clients vont penser qu'il s'agit d'un robot ?",
    a: "L'outil sera paramétré selon un ton et une formulation qui vous ressemble. Il s'adaptera pour vous correspondre à 100%.",
  },
  {
    q: "Quel est le coût d'Autoreply ?",
    a: "La grille tarifaire est disponible sur demande. Elle est indexée sur votre volume d'avis mensuel. Contactez-nous pour un devis personnalisé.",
  }
  ]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-night/8 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-semibold text-night group-hover:text-sage-dark transition-colors duration-300">
          {q}
        </span>
        <span className="shrink-0 w-6 h-6 rounded-full bg-night/5 flex items-center justify-center text-sage-dark group-hover:bg-sage-dark/10 transition-colors duration-300">
          {open ? <Minus size={13} /> : <Plus size={13} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-mist-dark leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  return (
    <section className="bg-linen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-label mb-4">Questions fréquentes</p>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl text-night leading-tight">
            On répond à vos<br />vraies questions.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-night/8 rounded-card shadow-card px-6 sm:px-8"
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
