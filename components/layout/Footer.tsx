import { GitFork, ExternalLink } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#0A0A0F] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          {/* Colonne 1 — Marque */}
          <div className="flex flex-col gap-4">
            <span className="font-display font-bold text-2xl">Optival</span>
            <p className="text-white/60 text-sm leading-relaxed">
              L'agence IA qui construit de vrais produits.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://www.linkedin.com/in/jean-julien-rols"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <ExternalLink size={20} />
              </a>
              <a
                href="https://github.com/rolosjeanjulien"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GitFork size={20} />
              </a>
            </div>
          </div>

          {/* Colonne 2 — Navigation */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Nos services
            </p>
            <nav className="flex flex-col gap-3">
              <a href="#services" className="text-white/60 text-sm hover:text-white transition-colors">
                Sites web & présence digitale
              </a>
              <a href="#services" className="text-white/60 text-sm hover:text-white transition-colors">
                Automatisation IA
              </a>
              <a href="#autoreply" className="text-white/60 text-sm hover:text-white transition-colors">
                Autoreply
              </a>
            </nav>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mt-4">
              Entreprise
            </p>
            <nav className="flex flex-col gap-3">
              <a href="#expertise" className="text-white/60 text-sm hover:text-white transition-colors">
                À propos
              </a>
              <a href="#contact" className="text-white/60 text-sm hover:text-white transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Colonne 3 — Contact & Légal */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Contact
            </p>
            <a
              href="mailto:contact@optival.fr"
              className="text-white/60 text-sm hover:text-white transition-colors"
            >
              contact@optival.fr
            </a>
            <div className="flex flex-col gap-3 mt-4">
              <a
                href="/mentions-legales"
                className="text-white/40 text-xs hover:text-white/70 transition-colors"
              >
                Mentions légales
              </a>
              <a
                href="/politique-de-confidentialite"
                className="text-white/40 text-xs hover:text-white/70 transition-colors"
              >
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>

        {/* Barre inférieure */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2026 Optival. Tous droits réservés.
          </p>
          <p className="text-white/30 text-xs">
            Fait avec ☕ et Claude AI · France
          </p>
        </div>
      </div>
    </footer>
  )
}
