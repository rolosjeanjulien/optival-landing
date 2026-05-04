import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // --- Palette "Confiance Sereine" ---

        // Fonds & surfaces
        night:       '#0E1B2C', // Bleu Nuit — fond sombre principal & texte clair
        'slate-deep': '#162638', // Ardoise Profonde — surface élevée sombre
        linen:       '#FAF7F1', // Lin — fond clair principal
        ivory:       '#F4EFE6', // Ivoire Chaud — texte principal fond sombre

        // Accents sauge
        sage:        '#8FBFA9', // Sauge Lumineuse — accent sur fond sombre
        'sage-dark':  '#4A8A75', // Sauge Foncée — accent sur fond clair
        'sage-pale':  '#E8F0EB', // Sauge Pâle — highlight doux fond clair

        // Accents or
        gold:        '#C9A86A', // Or Discret — badges, réassurance fond sombre
        'gold-deep':  '#8B6F2E', // Or Profond — mentions confiance fond clair

        // Textes secondaires
        mist:        '#A8B5C4', // Brume — texte secondaire fond sombre
        'mist-dark':  '#5A6B7E', // Brume Sombre — texte secondaire fond clair

        // Sémantiques (rétro-compatibilité)
        background:  'var(--background)',
        foreground:  'var(--foreground)',
        surface:     'var(--surface)',
        accent: {
          DEFAULT: '#4A8A75',
          dark:    '#3a7060',
          soft:    '#E8F0EB',
        },
        success: '#16A34A',
      },
      fontFamily: {
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        mono:    ['var(--font-jetbrains)', 'monospace'],
      },
      borderRadius: {
        card:   '16px',
        button: '10px',
      },
      boxShadow: {
        card:   '0 1px 3px rgba(14,27,44,0.06), 0 4px 16px rgba(14,27,44,0.04)',
        glow:   '0 0 40px rgba(143,191,169,0.15)',
        header: '0 1px 0 rgba(14,27,44,0.08)',
      },
      animation: {
        'gradient-move-1': 'gradient-move-1 14s ease-in-out infinite',
        'gradient-move-2': 'gradient-move-2 18s ease-in-out infinite',
        'gradient-move-3': 'gradient-move-3 22s ease-in-out infinite',
        float:             'float 4s ease-in-out infinite',
        shimmer:           'shimmer 3s linear infinite',
        'dot-pulse':       'dot-pulse 1.4s ease-in-out infinite',
      },
      keyframes: {
        'gradient-move-1': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%':      { transform: 'translate(30px, -20px) scale(1.1)' },
          '66%':      { transform: 'translate(-20px, 30px) scale(0.9)' },
        },
        'gradient-move-2': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%':      { transform: 'translate(-40px, 20px) scale(1.05)' },
          '66%':      { transform: 'translate(20px, -30px) scale(1.1)' },
        },
        'gradient-move-3': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%':      { transform: 'translate(20px, 20px) scale(1.08)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'dot-pulse': {
          '0%, 80%, 100%': { transform: 'scale(0.8)', opacity: '0.5' },
          '40%':           { transform: 'scale(1.2)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
