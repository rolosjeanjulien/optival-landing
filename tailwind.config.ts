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
        primary: {
          DEFAULT: '#6366F1',
          dark: '#4338CA',
        },
        'bg-dark': '#0A0A0F',
        'bg-slate': '#0F172A',
        surface: '#F8FAFC',
        success: '#10B981',
        'text-primary': '#0F172A',
        'text-muted': '#64748B',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-geist-display)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
        button: '10px',
      },
      boxShadow: {
        card: '0 4px 32px rgba(0,0,0,0.08)',
        glow: '0 0 40px rgba(99,102,241,0.15)',
        header: '0 2px 20px rgba(0,0,0,0.08)',
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
