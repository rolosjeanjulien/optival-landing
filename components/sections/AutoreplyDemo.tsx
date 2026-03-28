'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap } from '@/lib/gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { CheckCircle2 } from 'lucide-react'

const benefits = [
  {
    title: 'Plus aucun avis sans réponse',
    desc: 'Positif ou négatif, chaque avis reçoit une réponse personnalisée en quelques minutes.',
  },
  {
    title: 'Des réponses qui vous ressemblent',
    desc: "La réponse s'adapte à votre ton, votre secteur, vos spécificités. Jamais de copié-collé.",
  },
  {
    title: 'Vous gardez toujours la main',
    desc: '3 modes : 100% Automatisé / Approbation des réponses complexes / 100% Manuel. Vous choisissez votre niveau de confiance.',
  },
  {
    title: 'Impact mesurable rapidement',
    desc: '+0,5 point de note Google en moyenne en 60 jours. De nombreuses heures récupérées par mois.',
  },
]

const RESPONSE_TEXT =
  "Merci beaucoup pour votre retour ! Nous sommes ravis que votre expérience ait été à la hauteur. Toute l'équipe sera heureuse de vous accueillir de nouveau. 🙏"

export function AutoreplyDemo() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const [demoState, setDemoState] = useState<'idle' | 'processing' | 'typing' | 'done' | 'published'>('idle')
  const [typedText, setTypedText] = useState('')

  useEffect(() => {
    const runAnimation = async () => {
      setDemoState('idle')
      await delay(600)
      setDemoState('processing')
      await delay(1400)
      setDemoState('typing')
      for (let i = 0; i <= RESPONSE_TEXT.length; i++) {
        setTypedText(RESPONSE_TEXT.slice(0, i))
        await delay(22)
      }
      setDemoState('done')
      await delay(900)
      setDemoState('published')
      await delay(6000)
      setTypedText('')
    }

    const loop = () => { runAnimation().then(() => setTimeout(loop, 800)) }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 65%',
        once: true,
        onEnter: loop,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <section id="autoreply" ref={sectionRef} className="bg-[#0F0E0D] grain-overlay py-24 px-4 sm:px-6 lg:px-8">
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
              Autoreply — Notre produit SaaS
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
            Vos avis Google répondus<br className="hidden sm:block" />
            automatiquement.
          </h2>
          <p className="mt-5 text-white/40 text-lg max-w-xl">
            On n'a pas juste conseillé des clients sur l'IA. On a construit l'outil.
            Et il tourne en production.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Bénéfices */}
          <motion.div
            className="flex flex-col gap-0 border-t border-white/8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {benefits.map((b) => (
              <motion.div
                key={b.title}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
                className="flex gap-4 py-6 border-b border-white/8"
              >
                <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold text-sm mb-1">{b.title}</p>
                  <p className="text-white/40 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}

            <div className="pt-8">
              <a href="#contact" className="btn-primary btn-md group">
                Demander une démo <span className="btn-arrow">→</span>
              </a>
            </div>
          </motion.div>

          {/* Démo mockup — style craft dark */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-[#1A1918] border border-white/10 rounded-[12px] p-6">
              {/* Chrome */}
              <div className="flex items-center gap-2 mb-5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
                <span className="font-mono text-xs text-white/20 ml-2">Autoreply — Dashboard</span>
              </div>

              <div className="space-y-3">
                {/* Avis */}
                <motion.div
                  animate={demoState !== 'idle' ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/5 border border-white/8 rounded-lg p-4"
                >
                  <div className="flex justify-between items-start gap-3 mb-2">
                    <div>
                      <p className="text-yellow-400 text-xs tracking-widest">★★★★</p>
                      <p className="text-white text-sm font-medium mt-0.5 leading-snug">
                        "Excellent restaurant, je reviendrai !"
                      </p>
                    </div>
                    <span className="text-white/20 text-xs font-mono shrink-0">2 min</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-[#EA4335] rounded-sm" />
                    <span className="text-white/20 text-xs font-mono">Google My Business</span>
                  </div>
                </motion.div>

                {/* IA processing */}
                {demoState === 'processing' && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2.5 px-4 py-3 rounded-lg border border-accent/20 bg-accent/5"
                  >
                    <span className="font-mono text-xs text-accent">Réflexion en cours</span>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 rounded-full bg-accent dot-pulse-1" />
                      <div className="w-1 h-1 rounded-full bg-accent dot-pulse-2" />
                      <div className="w-1 h-1 rounded-full bg-accent dot-pulse-3" />
                    </div>
                  </motion.div>
                )}

                {/* Réponse en frappe */}
                {(demoState === 'typing' || demoState === 'done') && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-white/5 border border-white/8 rounded-lg p-4"
                  >
                    <p className="font-mono text-xs text-white/25 mb-2">réponse générée</p>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {typedText}
                      {demoState === 'typing' && (
                        <span className="cursor-blink text-accent">|</span>
                      )}
                    </p>
                  </motion.div>
                )}

                {/* Publier */}
                {(demoState === 'done' || demoState === 'published') && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`w-full text-sm font-semibold rounded-lg py-3 transition-colors font-mono ${
                      demoState === 'published'
                        ? 'bg-[#16A34A] text-white'
                        : 'bg-accent text-white hover:bg-accent-dark'
                    }`}
                  >
                    {demoState === 'published'
                      ? '✓ Publié sur Google'
                      : '→ Publier sur Google'}
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
