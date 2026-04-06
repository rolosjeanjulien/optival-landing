'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap } from '@/lib/gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import {
  Search, Wrench, Zap, Star,
  Mail, BarChart3, Smartphone, Link2, ClipboardList,
} from 'lucide-react'

/* ─── Données pills automatisation ─── */
const automationPills = [
  { icon: Mail, label: 'Relances clients' },
  { icon: BarChart3, label: 'Rapports auto' },
  { icon: Smartphone, label: 'Social media' },
  { icon: Mail, label: "Tri d'emails" },
  { icon: Link2, label: "Connexion d'outils" },
  { icon: ClipboardList, label: 'Process métier' },
]

const pillVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const pillItem = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
}

/* ─── Autoreply demo ─── */
const RESPONSE_TEXT =
  "Merci beaucoup pour votre retour ! Nous sommes ravis que votre expérience ait été à la hauteur. Toute l'équipe sera heureuse de vous accueillir de nouveau. 🙏"

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function Services() {
  const demoRef = useRef<HTMLDivElement>(null)
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

    const loop = () => {
      runAnimation().then(() => setTimeout(loop, 800))
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: demoRef.current,
        start: 'top 65%',
        once: true,
        onEnter: loop,
      })
    }, demoRef)

    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <section id="services" className="bg-surface py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-4">Ce qu'on fait pour vous</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-ink leading-tight max-w-3xl">
            Votre site web. Vos tâches<br />qui se répètent. Vos avis Google.
          </h2>
          <p className="mt-5 text-muted text-lg max-w-xl">
            Trois services concrets. Des résultats mesurables. Zéro jargon.
          </p>
        </motion.div>

        {/* ─── Grille 3 panneaux ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-ink/8">

          {/* Panel 1 — Sites web */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="bg-bg-surface p-8 lg:p-10 flex flex-col gap-6"
          >
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 bg-ink/5 rounded-lg flex items-center justify-center">
                <Search size={20} className="text-ink/60" />
              </div>
              <span className="font-mono text-xs text-muted/50">01 / 03</span>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-ink leading-tight mb-3">
                Un site qui travaille.<br />Livré en 3 semaines.
              </h3>
              <p className="text-muted leading-relaxed text-[15px]">
                On crée ou refait votre site — beau, rapide, et qui apparaît sur Google.
                SEO natif. Maintenance incluse. Vous n'avez rien à gérer ensuite.
              </p>
            </div>

            <ul className="space-y-2 mt-auto">
              {[
                { icon: Zap, text: 'Livraison en 3 semaines' },
                { icon: Search, text: 'SEO natif dès le départ' },
                { icon: Wrench, text: 'Maintenance incluse' },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2.5 text-sm text-ink/70">
                  <Icon size={13} className="text-accent shrink-0" />
                  {text}
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn-outline-light btn-sm group self-start">
              En savoir plus <span className="btn-arrow">→</span>
            </a>
          </motion.div>

          {/* Panel 2 — Automatisation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-bg-surface p-8 lg:p-10 flex flex-col gap-6"
          >
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 bg-accent/8 rounded-lg flex items-center justify-center">
                <Zap size={20} className="text-accent" />
              </div>
              <span className="font-mono text-xs text-muted/50">02 / 03</span>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-ink leading-tight mb-3">
                Vos tâches répétitives ?<br />On les supprime.
              </h3>
              <p className="text-muted leading-relaxed text-[15px]">
                Relances clients, rapports, emails, réseaux sociaux...
                On identifie ce qui peut être automatisé et on le met en place.
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
                <motion.span
                  key={label}
                  variants={pillItem}
                  className="inline-flex items-center gap-1.5 bg-surface border border-ink/10 rounded-full px-3 py-1 text-xs font-mono text-ink/60"
                >
                  <Icon size={11} className="text-accent" />
                  {label}
                </motion.span>
              ))}
            </motion.div>

            <div className="border-l-2 border-accent pl-4 py-1 mt-auto">
              <p className="text-sm font-semibold text-ink">
                → 4 à 8h récupérées par semaine
              </p>
            </div>

            <a href="#contact" className="btn-outline-light btn-sm group self-start">
              Audit gratuit <span className="btn-arrow">→</span>
            </a>
          </motion.div>

          {/* Panel 3 — Avis Google (Autoreply) avec démo intégrée */}
          <motion.div
            ref={demoRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-bg-surface p-8 lg:p-10 flex flex-col gap-6"
          >
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 bg-accent/8 rounded-lg flex items-center justify-center">
                <Star size={20} className="text-accent" />
              </div>
              <span className="font-mono text-xs text-muted/50">03 / 03</span>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-ink leading-tight mb-3">
                Vos avis Google répondus automatiquement.
              </h3>
              <p className="text-muted leading-relaxed text-[15px]">
                Autoreply répond à chaque avis en quelques minutes.
                Vous gardez la main. +0,5 point de note en 60 jours.
              </p>
            </div>

            {/* Mini démo Autoreply intégrée */}
            <div className="bg-[#1A1918] border border-ink/10 rounded-[10px] p-4 flex-1">
              <div className="flex items-center gap-1.5 mb-3">
                <div className="w-2 h-2 rounded-full bg-white/10" />
                <div className="w-2 h-2 rounded-full bg-white/10" />
                <div className="w-2 h-2 rounded-full bg-white/10" />
                <span className="ml-1.5 font-mono text-[10px] text-white/20">Autoreply</span>
              </div>

              <div className="space-y-2.5">
                {/* Avis */}
                <motion.div
                  animate={demoState !== 'idle' ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/5 border border-white/8 rounded-lg p-3"
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-yellow-400 text-[10px] tracking-widest">★★★★★</span>
                    <span className="text-white/20 text-[10px] font-mono">2 min</span>
                  </div>
                  <p className="text-white/70 text-xs leading-relaxed">
                    "Excellent restaurant, je reviendrai !"
                  </p>
                </motion.div>

                {/* IA processing */}
                {demoState === 'processing' && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border border-accent/20 bg-accent/5"
                  >
                    <span className="font-mono text-[10px] text-accent">Réflexion en cours</span>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 rounded-full bg-accent dot-pulse-1" />
                      <div className="w-1 h-1 rounded-full bg-accent dot-pulse-2" />
                      <div className="w-1 h-1 rounded-full bg-accent dot-pulse-3" />
                    </div>
                  </motion.div>
                )}

                {/* Réponse */}
                {(demoState === 'typing' || demoState === 'done') && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-white/5 border border-white/8 rounded-lg p-3"
                  >
                    <p className="font-mono text-[10px] text-white/25 mb-1">réponse générée</p>
                    <p className="text-white/70 text-xs leading-relaxed">
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
                    className={`w-full text-xs font-semibold rounded-lg py-2 transition-colors font-mono ${
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

            <a href="#contact" className="btn-outline-light btn-sm group self-start">
              Découvrir Autoreply <span className="btn-arrow">→</span>
            </a>
          </motion.div>

        </div>

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-12"
        >
          <a href="#contact" className="btn-primary-light btn-lg group">
            Demander mon audit gratuit <span className="btn-arrow">→</span>
          </a>
          <p className="text-sm text-muted">
            À partir de 490 €/mois · Sans engagement · Devis en 48h
          </p>
        </motion.div>

      </div>
    </section>
  )
}
