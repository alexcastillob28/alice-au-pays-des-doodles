import type { Metadata } from 'next'
import { Cormorant_Garamond, Nunito } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Alice au pays des Doodles | Élevage & Pension Canine — Valleyfield',
  description:
    'Élevage de Goldendoodles et pension canine à Valleyfield, Montréal. Service professionnel et passionné. Pension à 55 $/jour. Renseignez-vous dès aujourd\'hui !',
  openGraph: {
    title: 'Alice au pays des Doodles',
    description: 'Élevage de Goldendoodles & Pension canine à Valleyfield, Montréal.',
    locale: 'fr_CA',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${nunito.variable}`}>
      <body className="font-body bg-blush text-cocoa antialiased">
        {children}
      </body>
    </html>
  )
}
