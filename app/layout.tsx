import type { Metadata } from 'next'
import { Poppins, Agdasima } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})
const agdasima = Agdasima({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-agdasima',
})

export const metadata: Metadata = {
  title: 'KDC Kuwait — Advanced Drilling & Oilfield Services',
  description:
    'Delivering safe, efficient, and high-performance solutions across drilling, directional services, and manpower in Kuwait and the wider Middle East.',
  keywords: 'drilling, oilfield services, Kuwait, directional drilling, tubular running, BHA rental, fishing services, workover',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${agdasima.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
