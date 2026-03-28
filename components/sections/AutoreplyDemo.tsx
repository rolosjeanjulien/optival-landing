'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap } from '@/lib/gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { GradientBadge } from '@/components/ui/GradientBadge'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { CheckCircle2 } from 'lucide-react'

const benefits = [
  {
    title: 'Plus aucun avis sans réponse',
    desc: 'Positif ou négatif, chaque avis reçoit une réponse personnalisée en quelques minutes. Automatiquement.',
  },
  {
    title: 'Des réponses qui vous ressemblent',
    desc: "L'IA s'adapte à votre ton, votre secteur, vos spécificités. Pas de réponse générique copiée-collée.",
  },
  {
    title: 'Vous gardez toujours la main',
    desc: '3 modes : Full Auto / Semi-Auto (validation par email) / Manuel. Vous choisissez votre niveau de confiance.',
  },
  {
    title: 'Impact mesurable rapidement',
    desc: '+0,5 point de note Google en moyenne en 60 jours. 2 à 4h récupérées par mois.',
  },
]

const RESPONSE_TEXT =
  'Merci beaucoup pour votre retour ! Nous sommes ravis que votre expérience ait été à la hauteur de vos attentes. Toute l\'équipe sera heureuse de vous accueillir de nouveau très bientôt. 🙏'

export function AutoreplyDemo() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  // State for auto-play animation (mobile / reduced motion)
  const [demoState, setDemoState] = useState<'idle' | 'processing' | 'typing' | 'done' | 'published'>('idle')
  const [typedText, setTypedText] = useState('')

  // Auto-play loop for mobile / reduced motion
  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024

    if (!isMobile && !reducedMotion) return

    const runAnimation = async () => {
      setDemoState('idle')
      await delay(800)
      setDemoState('processing')
      await delay(1500)
      setDemoState('typing')

      for (let i = 0; i <= RESPONSE_TEXT.length; i++) {
        setTypedText(RESPONSE_TEXT.slice(0, i))
        await delay(25)
      }

      setDemoState('done')
      await delay(1000)
      setDemoState('published')
      await delay(3000)
      setTypedText('')
    }

    const loop = () => {
      runAnimation().then(() => setTimeout(loop, 1000))
    }

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) loop() },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [reducedMotion])

  // GSAP scroll-driven animation for desktop
  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024
    if (isMobile || reducedMotion) return

    const ctx = gsap.context(() => {
      // This is a simplified scroll-driven version
      // The full pin + scrub would be implemented here
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 60%',
        once: true,
        onEnter: () => {
          const runGsapAnim = async () => {
            setDemoState('idle')
            await delay(400)
            setDemoState('processing')
            await delay(1500)
            setDemoState('typing')

            for (let i = 0; i <= RESPONSE_TEXT.length; i++) {
              setTypedText(RESPONSE_TEXT.slice(0, i))
              await delay(22)
            }

            setDemoState('done')
            await delay(800)
            setDemoState('published')
            await delay(3000)
            setTypedText('')

            setTimeout(runGsapAnim, 1000)
          }

          runGsapAnim()
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <section id="autoreply" ref={sectionRef} className="bg-[#0F172A] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <GradientBadge variant="dark" className="mb-6">
            ⭐ Autoreply — Notre produit SaaS
          </GradientBadge>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Vos avis Google répondus<br className="hidden sm:block" />
            automatiquement. Pendant que<br className="hidden sm:block" />
            vous dormez.
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            On n'a pas juste conseillé des clients sur l'IA des avis Google.
            On a construit l'outil. Et il tourne en production.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Bénéfices */}
          <motion.div
            className="flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {benefits.map((b) => (
              <motion.div
                key={b.title}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                }}
                className="flex gap-4"
              >
                <CheckCircle2 size={22} className="text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold mb-1">{b.title}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <MagneticButton href="#contact" size="md">
                Demander une démo Autoreply
              </MagneticButton>
            </div>
          </motion.div>

          {/* Démo mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#1E293B] rounded-card border border-white/10 p-6 shadow-glow">
              {/* Barre de titre */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-white/30 font-mono">Autoreply — Dashboard</span>
              </div>

              <div className="space-y-4">
                {/* Avis entrant */}
                <motion.div
                  animate={demoState !== 'idle' ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white/5 rounded-xl p-4 border border-white/10"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <div className="flex items-center gap-1 mb-1">
                        <span className="text-yellow-400 text-sm">⭐⭐⭐⭐</span>
                      </div>
                      <p className="text-white text-sm font-medium">
                        "Excellent restaurant, je reviendrai !"
                      </p>
                    </div>
                    <span className="text-white/30 text-xs shrink-0">il y a 2 min</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 bg-red-500 rounded-sm" />
                    <span className="text-white/40 text-xs">Google My Business</span>
                  </div>
                </motion.div>

                {/* Badge IA */}
                {(demoState === 'processing') && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 bg-indigo-500/10 rounded-lg px-4 py-3 border border-indigo-500/20"
                  >
                    <span className="text-indigo-400 text-xs font-medium">🤖 IA en cours...</span>
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 dot-pulse-1" />
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 dot-pulse-2" />
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 dot-pulse-3" />
                    </div>
                  </motion.div>
                )}

                {/* Réponse en cours de frappe */}
                {(demoState === 'typing' || demoState === 'done') && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-white/5 rounded-xl p-4 border border-white/10"
                  >
                    <p className="text-white/50 text-xs mb-2">✍️ Réponse générée :</p>
                    <p className="text-white text-sm leading-relaxed">
                      {typedText}
                      {demoState === 'typing' && (
                        <span className="cursor-blink text-indigo-400 ml-0.5">|</span>
                      )}
                    </p>
                  </motion.div>
                )}

                {/* Badge "Réponse prête" */}
                {demoState === 'done' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2 bg-emerald-500/10 rounded-lg px-4 py-2 border border-emerald-500/20"
                  >
                    <CheckCircle2 size={14} className="text-emerald-400" />
                    <span className="text-emerald-400 text-xs font-medium">Réponse prête</span>
                  </motion.div>
                )}

                {/* Bouton Publier */}
                {(demoState === 'done' || demoState === 'published') && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{
                      opacity: 1,
                      scale: demoState === 'done' ? [1, 1.03, 1] : 1,
                    }}
                    transition={{ scale: { repeat: Infinity, duration: 1.5 } }}
                    className={`w-full text-white text-sm font-semibold rounded-lg py-3 transition-colors ${
                      demoState === 'published'
                        ? 'bg-emerald-500 cursor-default'
                        : 'bg-indigo-500 hover:bg-indigo-600'
                    }`}
                  >
                    {demoState === 'published'
                      ? '✅ Publié automatiquement sur Google'
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
