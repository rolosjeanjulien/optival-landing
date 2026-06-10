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

const metrics = [
  { value: '72h', label: 'Mise en route' },
  { value: '4–8h', label: 'Gagnées / semaine' },
  { value: '+0,5 pt', label: 'Note Google en 60 j.' },
  { value: '+20%', label: 'Conversion devis' },
]

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
    <section id="services" className="bg-linen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-label mb-4">Ce qu'on peut faire pour vous</p>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl text-night leading-tight max-w-3xl">
            Votre site web. Vos tâches<br />qui se répètent. Vos avis Google.
          </h2>
          <p className="mt-5 text-mist-dark text-lg max-w-xl">
            Des services concrets, adaptés à vos besoins. Des résultats mesurables. Zéro jargon.
          </p>
        </motion.div>

        {/* ─── Bande métriques ─── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-night/8 border border-night/8 rounded-[12px] overflow-hidden mb-12"
        >
          {metrics.map(({ value, label }) => (
            <div
              key={label}
              className="bg-white px-6 py-5 flex flex-col gap-1"
            >
              <span className="font-display font-semibold text-2xl text-night leading-none">{value}</span>
              <span className="text-mist-dark text-xs font-mono">{label}</span>
            </div>
          ))}
        </motion.div>

        {/* ─── Grille 3 panneaux ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-night/8 border border-night/8 rounded-[16px] overflow-hidden">

          {/* Panel 1 — Sites web */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 lg:p-10 flex flex-col gap-6 group hover:bg-sage-pale transition-colors duration-300"
          >
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 bg-night/5 rounded-lg flex items-center justify-center group-hover:bg-night/8 transition-colors duration-300">
                <Search size={20} className="text-night/60" />
              </div>
              <span className="font-mono text-xs text-mist-dark/50">01</span>
            </div>

            <div>
              <h3 className="font-display text-2xl font-semibold text-night leading-tight mb-3">
                Un site qui travaille.<br />Livré en 3 semaines.
              </h3>
              <p className="text-mist-dark leading-relaxed text-[15px]">
                On crée ou refait votre site: beau, rapide, et qui apparaît en tête sur Google.
                SEO natif. Maintenance incluse. Vous n'avez rien à gérer.
              </p>
            </div>

            <ul className="space-y-2 mt-auto">
              {[
                { icon: Zap, text: 'Livraison en 3 semaines' },
                { icon: Search, text: 'SEO natif dès le départ' },
                { icon: Wrench, text: 'Maintenance incluse' },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2.5 text-sm text-night/70">
                  <Icon size={13} className="text-sage-dark shrink-0" />
                  {text}
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn-outline-light btn-sm group/btn self-start">
              En savoir plus <span className="btn-arrow">→</span>
            </a>
          </motion.div>

          {/* Panel 2 — Automatisation (featured) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-night p-8 lg:p-10 flex flex-col gap-6 relative dark-section"
          >
            {/* Badge featured */}
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1 bg-sage/15 text-sage text-[10px] font-mono font-semibold px-2 py-1 rounded-full">
                <Zap size={9} />
                Populaire
              </span>
            </div>

            <div className="flex items-start justify-between">
              <div className="w-10 h-10 bg-sage/15 rounded-lg flex items-center justify-center">
                <Zap size={20} className="text-sage" />
              </div>
              <span className="font-mono text-xs text-white/20">02</span>
            </div>

            <div>
              <h3 className="font-display text-2xl font-semibold text-ivory leading-tight mb-3">
                Vos tâches répétitives ?<br />On les supprime.
              </h3>
              <p className="text-mist leading-relaxed text-[15px]">
                Relances clients, devis, rapports, emails, réseaux sociaux...
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
                  className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-mono text-mist/70"
                >
                  <Icon size={11} className="text-sage" />
                  {label}
                </motion.span>
              ))}
            </motion.div>

            <div className="border-l-2 border-sage pl-4 py-1 mt-auto">
              <p className="text-sm font-semibold text-ivory">
                → 4 à 8h récupérées par semaine
              </p>
            </div>

            <a href="#contact" className="btn-primary btn-sm group self-start">
              Audit personalisée <span className="btn-arrow">→</span>
            </a>
          </motion.div>

          {/* Panel 3 — Avis Google (Autoreply) avec démo intégrée */}
          <motion.div
            ref={demoRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 lg:p-10 flex flex-col gap-6 group hover:bg-sage-pale transition-colors duration-300"
          >
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 bg-sage-dark/8 rounded-lg flex items-center justify-center group-hover:bg-sage-dark/15 transition-colors duration-300">
                <Star size={20} className="text-sage-dark" />
              </div>
              <span className="font-mono text-xs text-mist-dark/50">03</span>
            </div>

            <div>
              <h3 className="font-display text-2xl font-semibold text-night leading-tight mb-3">
                Vos avis Google répondus automatiquement.
              </h3>
              <p className="text-mist-dark leading-relaxed text-[15px]">
                Notre outil Autoreply répond à chaque avis en quelques minutes.
                Selon vos préférence. +0,5 point de note en 60 jours.
              </p>
            </div>

            {/* Mini démo Autoreply */}
            <div className="bg-slate-deep border border-night/10 rounded-[10px] p-4 flex-1">
              <div className="flex items-center gap-1.5 mb-3">
                <div className="w-2 h-2 rounded-full bg-white/10" />
                <div className="w-2 h-2 rounded-full bg-white/10" />
                <div className="w-2 h-2 rounded-full bg-white/10" />
                <span className="ml-1.5 font-mono text-[10px] text-white/20">Autoreply</span>
              </div>

              <div className="space-y-2.5">
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

                {demoState === 'processing' && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border border-sage/20 bg-sage/5"
                  >
                    <span className="font-mono text-[10px] text-sage">Réflexion en cours</span>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 rounded-full bg-sage dot-pulse-1" />
                      <div className="w-1 h-1 rounded-full bg-sage dot-pulse-2" />
                      <div className="w-1 h-1 rounded-full bg-sage dot-pulse-3" />
                    </div>
                  </motion.div>
                )}

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
                        <span className="cursor-blink text-sage">|</span>
                      )}
                    </p>
                  </motion.div>
                )}

                {(demoState === 'done' || demoState === 'published') && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`w-full text-xs font-semibold rounded-lg py-2 transition-colors font-mono ${
                      demoState === 'published'
                        ? 'bg-[#16A34A] text-white'
                        : 'bg-sage text-night hover:bg-sage/90'
                    }`}
                  >
                    {demoState === 'published'
                      ? '✓ Publié sur Google'
                      : '→ Publier sur Google'}
                  </motion.button>
                )}
              </div>
            </div>

            <a href="#contact" className="btn-outline-light btn-sm group/btn self-start">
              Découvrir Autoreply <span className="btn-arrow">→</span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
