'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from '@/lib/gsap'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { GradientBadge } from '@/components/ui/GradientBadge'
import { CheckCircle } from 'lucide-react'

const words = ['Votre', 'PME', 'mérite', 'une', 'IA', 'qui', 'fait', 'vraiment', 'le', 'travail.']

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([])
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })

      wordRefs.current.forEach((word, i) => {
        if (!word) return
        tl.fromTo(
          word,
          { y: '100%', opacity: 0 },
          { y: '0%', opacity: 1, duration: 0.6, ease: 'power3.out' },
          i * 0.08
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <section
      ref={containerRef}
      className="gradient-mesh-bg relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Gradient blobs */}
      <div className="gradient-blob blob-1" />
      <div className="gradient-blob blob-2" />
      <div className="gradient-blob blob-3" />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0A0A0F]/70" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contenu gauche */}
          <div className="flex flex-col gap-6">
            <GradientBadge variant="dark">
              ✦ L'agence IA qui construit de vrais produits
            </GradientBadge>

            {/* H1 avec text reveal */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[72px] font-bold leading-tight text-white">
              {words.map((word, i) => (
                <span
                  key={i}
                  className="inline-block overflow-hidden mr-[0.25em]"
                >
                  <span
                    ref={(el) => { wordRefs.current[i] = el }}
                    className="inline-block"
                    style={reducedMotion ? {} : { opacity: 0 }}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </h1>

            {/* Sous-titre */}
            <motion.p
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="text-lg sm:text-xl text-[#CBD5E1] leading-relaxed max-w-xl"
            >
              Nous automatisons vos processus, construisons votre présence digitale et gérons
              vos avis Google — avec l'IA. Et on l'a prouvé en construisant nos propres outils.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <MagneticButton href="#services" size="lg">
                Découvrir nos services
              </MagneticButton>
              <MagneticButton href="#autoreply" variant="ghost" size="lg">
                Voir Autoreply ↓
              </MagneticButton>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={reducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.7 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-2"
            >
              {[
                'Résultats en < 72h',
                'Pas de jargon',
                'Solo founder — 1 interlocuteur',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-white/60">
                  <CheckCircle size={14} className="text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mockup droite */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="hidden lg:flex justify-center"
          >
            <div className="animate-float">
              <div className="bg-[#1E293B] rounded-card border border-white/10 p-6 w-full max-w-md shadow-glow">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-2 text-xs text-white/40 font-mono">autoreply.app</span>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-start gap-3">
                      <span className="text-yellow-400 text-lg">⭐⭐⭐⭐</span>
                      <div>
                        <p className="text-white text-sm font-medium">Excellent restaurant !</p>
                        <p className="text-white/40 text-xs mt-0.5">il y a 2 minutes</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-indigo-500/10 rounded-lg px-3 py-2 border border-indigo-500/20">
                    <span className="text-indigo-400 text-xs font-medium">🤖 IA en cours</span>
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 dot-pulse-1" />
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 dot-pulse-2" />
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 dot-pulse-3" />
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-white/60 text-xs mb-1">Réponse générée :</p>
                    <p className="text-white text-sm leading-relaxed">
                      Merci beaucoup pour votre retour ! Nous sommes ravis que votre expérience ait été à la hauteur...
                      <span className="cursor-blink text-indigo-400">|</span>
                    </p>
                  </div>
                  <button className="w-full bg-emerald-500 text-white text-sm font-semibold rounded-lg py-2.5 hover:bg-emerald-600 transition-colors">
                    ✓ Publier sur Google
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  )
}
