import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { getLocale } from 'next-intl/server'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Bastards Brewery',
  description: 'We are bastards. Cervejaria artesanal de Curitiba.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale()

  return (
    <html lang={locale} className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}

