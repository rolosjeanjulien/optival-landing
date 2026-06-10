'use client'

import { ExternalLink, GitFork } from 'lucide-react'

export function Footer() {
  return (
    <div role="contentinfo" className="bg-night dark-section text-ivory pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/5">

          {/* Colonne 1 */}
          <div className="flex flex-col gap-4">
            <span className="font-display font-semibold text-xl text-ivory">Optival</span>
            <p className="text-mist/50 text-sm leading-relaxed">
              L&apos;agence IA qui construit de vrais produits.
            </p>
            <div className="flex items-center gap-4 mt-1">
              <a
                href="https://www.linkedin.com/in/jean-julien-rols"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mist/30 hover:text-mist transition-colors"
                aria-label="LinkedIn"
              >
                <ExternalLink size={16} />
              </a>
              <a
                href="https://github.com/rolosjeanjulien"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mist/30 hover:text-mist transition-colors"
                aria-label="GitHub"
              >
                <GitFork size={16} />
              </a>
            </div>
          </div>

          {/* Colonne 2 */}
          <div className="flex flex-col gap-4">
            <p className="font-mono text-xs text-mist/30 uppercase tracking-widest">Services</p>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: 'Automatisation et optimisation', href: '#services' },
                { label: 'Autoreply', href: '#services' },
              ].map((l) => (
                <a key={l.label} href={l.href} className="text-mist/40 text-sm hover:text-ivory transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>
            <p className="font-mono text-xs text-mist/30 uppercase tracking-widest mt-3">Entreprise</p>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: 'Contact', href: '#contact' },
              ].map((l) => (
                <a key={l.label} href={l.href} className="text-mist/40 text-sm hover:text-ivory transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Colonne 3 */}
          <div className="flex flex-col gap-4">
            <p className="font-mono text-xs text-mist/30 uppercase tracking-widest">Contact</p>
            <a href="mailto:contact@optival.fr" className="text-mist/40 text-sm font-mono hover:text-ivory transition-colors">
              contact@optival.fr
            </a>
            <div className="flex flex-col gap-2 mt-3">
              <a href="/mentions-legales" className="text-mist/30 text-xs font-mono hover:text-mist transition-colors">
                Mentions légales
              </a>
              <a href="/politique-de-confidentialite" className="text-mist/30 text-xs font-mono hover:text-mist transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-mist/20 text-xs font-mono">© 2026 Optival. Tous droits réservés.</p>
        </div>
      </div>
    </div>
  )
}
