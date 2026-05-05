import type { Metadata } from 'next'
import { Poppins, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
});
const _montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-montserrat",
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
    <html lang="en" className={`bg-white ${_poppins.variable} ${_montserrat.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
