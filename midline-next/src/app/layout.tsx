import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Aurora from '@/components/Aurora'
import Cursor from '@/components/Cursor'
import Particles from '@/components/Particles'
import ProgressBar from '@/components/ProgressBar'
import PageTransition from '@/components/PageTransition'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display-loaded',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body-loaded',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono-loaded',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Midline Investment — Multi-Sector Holding Group',
    template: '%s — Midline Investment',
  },
  description:
    'Midline Investment LLC is a multi-sector holding group operating across aviation, oil & gas, food industry, construction, pharmaceuticals, perfumes, furniture, and auto spare parts — headquartered in Dubai, UAE.',
  keywords: ['Midline Investment', 'Dubai holding group', 'UAE investment', 'multi-sector'],
  metadataBase: new URL('https://midline-investment.com'),
  openGraph: {
    type: 'website',
    siteName: 'Midline Investment',
    locale: 'en_AE',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body>
        <Aurora />
        <Particles />
        <Cursor />
        <ProgressBar />
        <Nav />
        <PageTransition>
          {children}
          <Footer />
        </PageTransition>
      </body>
    </html>
  )
}
