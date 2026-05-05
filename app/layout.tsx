import type { Metadata } from 'next'
import { Inter, Barlow_Condensed } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow-condensed",
});

export const metadata: Metadata = {
  title: 'KDC - Advanced Drilling & Oilfield Services in Kuwait',
  description: 'Leading oilfield services provider in Kuwait offering drilling, directional drilling, tubular running, BHA rental, and fishing services. 20+ years of experience with 100% safety compliance.',
  keywords: 'drilling, oilfield services, Kuwait, directional drilling, workover, QHSE, oil and gas',
  openGraph: {
    title: 'KDC - Oilfield Services Kuwait',
    description: 'Professional drilling and oilfield solutions across the Middle East',
    url: 'https://www.kdckwt.com',
  },
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-white ${_inter.variable} ${_barlowCondensed.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
