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
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        accent: {
          DEFAULT: '#E85D10',
          dark: '#C44D0C',
          light: '#FFF0E8',
        },
        'bg-dark': '#0F0E0D',
        'bg-surface': '#FAFAF8',
        surface: '#F2F2F0',
        success: '#16A34A',
        ink: '#111110',
        muted: '#78716C',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-syne)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      borderRadius: {
        card: '16px',
        button: '10px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
        glow: '0 0 40px rgba(232,93,16,0.12)',
        header: '0 1px 0 rgba(0,0,0,0.08)',
      },
      animation: {
        'gradient-move-1': 'gradient-move-1 14s ease-in-out infinite',
        'gradient-move-2': 'gradient-move-2 18s ease-in-out infinite',
        'gradient-move-3': 'gradient-move-3 22s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        'dot-pulse': 'dot-pulse 1.4s ease-in-out infinite',
      },
      keyframes: {
        'gradient-move-1': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -20px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 30px) scale(0.9)' },
        },
        'gradient-move-2': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-40px, 20px) scale(1.05)' },
          '66%': { transform: 'translate(20px, -30px) scale(1.1)' },
        },
        'gradient-move-3': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(20px, 20px) scale(1.08)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'dot-pulse': {
          '0%, 80%, 100%': { transform: 'scale(0.8)', opacity: '0.5' },
          '40%': { transform: 'scale(1.2)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
