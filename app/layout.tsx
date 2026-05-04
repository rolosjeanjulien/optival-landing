import type { Metadata } from 'next'
import { Inter, Fraunces, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { CustomCursor } from '@/components/layout/CustomCursor'
import { GSAPProvider } from '@/components/providers/GSAPProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['500', '600'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://optival.fr'),
  title: {
    default: "Optival — L'agence IA qui construit de vrais produits pour PME",
    template: '%s | Optival',
  },
  description:
    "Optival aide les dirigeants de PME à automatiser leurs processus, créer leur présence digitale et gérer leurs avis Google — grâce à l'IA. Résultats mesurables, zéro jargon.",
  keywords: [
    'agence ia pme',
    'automatisation ia',
    'autoreply avis google',
    'consultant ia',
    'création site web pme',
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://optival.fr',
    siteName: 'Optival',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: "Optival — L'agence IA pour PME",
      },
    ],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased font-sans bg-linen text-night">
        <GSAPProvider>
          <CustomCursor />
          {children}
        </GSAPProvider>
      </body>
    </html>
  )
}
