'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Fonctionnement', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
      animate={{
        backgroundColor: scrolled ? 'rgba(250,247,241,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
        borderBottom: scrolled ? '1px solid rgba(14,27,44,0.08)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className={`font-display font-semibold text-xl transition-colors duration-200 ${
              scrolled ? 'text-night' : 'text-ivory'
            }`}>
              Optival
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  scrolled
                    ? 'text-night/60 hover:text-sage-dark'
                    : 'text-white/60 hover:text-sage'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className={`inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-button transition-all group ${
                scrolled
                  ? 'bg-night text-ivory hover:bg-night/80'
                  : 'bg-white text-night hover:bg-white/90'
              }`}
            >
              Demander mon audit personalisé
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X className={scrolled ? 'text-night' : 'text-white'} size={22} />
            ) : (
              <Menu className={scrolled ? 'text-night' : 'text-white'} size={22} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-linen z-[60] flex flex-col p-8 gap-6 lg:hidden"
          >
            <div className="flex justify-between items-center">
              <span className="font-display font-semibold text-xl text-night">Optival</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Fermer">
                <X size={22} className="text-night" />
              </button>
            </div>
            <div className="w-full h-px bg-night/8" />
            <nav className="flex flex-col gap-6 mt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-3xl font-semibold text-night hover:text-sage-dark transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-auto">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary-light btn-lg group w-full justify-center"
              >
                Demander mon audit personalisé <span className="btn-arrow">→</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
