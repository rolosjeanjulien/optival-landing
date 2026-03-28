'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from '@/lib/gsap'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { CheckCircle } from 'lucide-react'

const words = ['Vous', 'gérez', 'votre', 'métier.', 'On', 'gère', 'le', 'reste.']

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
                Automatisation · Optimisation
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
              Répondre aux avis Google, envoyer des relances, tenir votre site à jour...
              Ce sont des heures perdues chaque semaine. On les récupère pour vous.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.3 }}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <a href="#process" className="btn-primary btn-lg group">
                Voir comment ça marche
                <span className="btn-arrow">→</span>
              </a>
              <a href="#contact" className="btn-ghost btn-lg group">
                Réserver un appel gratuit
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
                'Opérationnel en 3 jours',
                'Pas de jargon technique',
                '1 interlocuteur dédié',
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
                  {/* Avis entrant — format Google authentique */}
                  <div className="bg-white/5 rounded-lg p-3.5 border border-white/8">
                    {/* Header : avatar + nom + date */}
                    <div className="flex items-start justify-between gap-2 mb-2.5">
                      <div className="flex items-center gap-2.5">
                        {/* Avatar initial Google */}
                        <div className="w-8 h-8 rounded-full bg-[#1A73E8] flex items-center justify-center shrink-0">
                          <span className="text-white text-sm font-medium">S</span>
                        </div>
                        <div>
                          <p className="text-white text-xs font-semibold leading-tight">Sophie M.</p>
                          <p className="text-white/30 text-[10px] font-mono leading-tight mt-0.5">Guide local · 12 avis</p>
                        </div>
                      </div>
                      {/* Logo Google */}
                      <div className="flex items-center gap-1 shrink-0 mt-0.5">
                        <span className="text-[#EA4335] text-xs font-bold" style={{ fontFamily: 'serif' }}>G</span>
                        <span className="text-white/20 text-[10px] font-mono">oogle</span>
                      </div>
                    </div>
                    {/* Étoiles + date */}
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[#FBBC04] text-sm tracking-tight">★★★★★</span>
                      <span className="text-white/25 text-[10px] font-mono">il y a 2 jours</span>
                    </div>
                    {/* Texte de l'avis */}
                    <p className="text-white/70 text-xs leading-relaxed">
                      Excellent accueil et cuisine raffinée. Le service était impeccable du début à la fin. Je reviendrai sans hésiter !
                    </p>
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
