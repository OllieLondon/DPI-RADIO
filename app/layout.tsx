import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KasaOli - Viva sua casa, ame cada detalhe',
  description: 'Discover premium home goods with natural materials and sustainable design. Elevate your living space with KasaOli.',
  openGraph: {
    title: 'KasaOli',
    description: 'Premium home goods with sustainable design',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-kasaoli-cream">
        {children}
      </body>
    </html>
  )
}
