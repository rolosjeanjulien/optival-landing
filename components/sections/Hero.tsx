'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from '@/lib/gsap'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { CheckCircle } from 'lucide-react'

const words = ['Votre', 'PME', 'mérite', 'une', 'IA', 'qui', 'fait', 'vraiment', 'le', 'travail.']

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([])
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 })
      wordRefs.current.forEach((word, i) => {
        if (!word) return
        tl.fromTo(
          word,
          { y: '105%', opacity: 0 },
          { y: '0%', opacity: 1, duration: 0.55, ease: 'power3.out' },
          i * 0.07
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <section
      ref={containerRef}
      className="grain-overlay relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0F0E0D]"
    >
      {/* Ligne décorative verticale — craft detail */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5 hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-center">

          {/* Contenu principal */}
          <div className="flex flex-col gap-8">

            {/* Label section */}
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3"
            >
              <div className="w-6 h-px bg-accent" />
              <span className="font-mono text-xs text-white/40 tracking-[0.2em] uppercase">
                L'agence IA qui construit de vrais produits
              </span>
            </motion.div>

            {/* H1 — Syne, révélation mot par mot */}
            <h1 className="font-display font-bold leading-[1.05] text-white"
                style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)' }}>
              {words.map((word, i) => (
                <span
                  key={i}
                  className="inline-block overflow-hidden mr-[0.2em] pb-[0.18em] mb-[-0.18em]"
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
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="text-white/50 text-lg leading-relaxed max-w-lg"
            >
              Nous automatisons vos processus, construisons votre présence digitale
              et gérons vos avis Google. Et on l'a prouvé en construisant nos propres outils.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.3 }}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <a href="#services" className="btn-primary btn-lg group">
                Découvrir nos services
                <span className="btn-arrow">→</span>
              </a>
              <a href="#autoreply" className="btn-ghost btn-lg group">
                Voir Autoreply
                <span className="btn-arrow">↓</span>
              </a>
            </motion.div>

            {/* Social proof — minimal */}
            <motion.div
              initial={reducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.6 }}
              className="flex flex-wrap gap-x-6 gap-y-2 pt-2 border-t border-white/10"
            >
              {[
                'Résultats en < 72h',
                'Pas de jargon',
                '1 seul interlocuteur',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-white/40">
                  <CheckCircle size={13} className="text-accent shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mockup Autoreply — côté droit, desktop */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="hidden lg:block"
          >
            <div className="animate-float">
              {/* Card mockup — style craft : border 1px, pas de glow violet */}
              <div className="bg-[#1A1918] rounded-[12px] border border-white/10 p-5 w-full">
                {/* Chrome bar */}
                <div className="flex items-center gap-1.5 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <span className="ml-2 font-mono text-xs text-white/20">autoreply.app</span>
                </div>

                <div className="space-y-3">
                  {/* Avis entrant */}
                  <div className="bg-white/5 rounded-lg p-3.5 border border-white/8">
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <div>
                        <span className="text-yellow-400 text-xs tracking-wide">★★★★</span>
                        <p className="text-white text-sm font-medium mt-0.5 leading-snug">
                          "Excellent restaurant, je reviendrai !"
                        </p>
                      </div>
                      <span className="text-white/20 text-xs shrink-0 font-mono">2 min</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 bg-[#EA4335] rounded-sm" />
                      <span className="text-white/25 text-xs font-mono">Google · My Business</span>
                    </div>
                  </div>

                  {/* IA processing */}
                  <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-accent/20 bg-accent/5">
                    <span className="text-accent text-xs font-mono">IA en cours</span>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 rounded-full bg-accent dot-pulse-1" />
                      <div className="w-1 h-1 rounded-full bg-accent dot-pulse-2" />
                      <div className="w-1 h-1 rounded-full bg-accent dot-pulse-3" />
                    </div>
                  </div>

                  {/* Réponse */}
                  <div className="bg-white/5 rounded-lg p-3.5 border border-white/8">
                    <p className="text-white/30 text-xs font-mono mb-1.5">réponse générée</p>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Merci pour votre retour ! Nous sommes ravis...
                      <span className="cursor-blink text-accent ml-0.5">|</span>
                    </p>
                  </div>

                  {/* Bouton publier */}
                  <button className="w-full bg-[#16A34A] text-white text-sm font-semibold rounded-lg py-2.5 transition-colors hover:bg-[#15803D]">
                    ✓ Publier sur Google
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Indicateur scroll */}
      <motion.div
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-8 hidden lg:flex items-center gap-3"
      >
        <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
        <span className="font-mono text-xs text-white/20 tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  )
}
