import type { Metadata } from 'next'

import { ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { Manrope } from 'next/font/google'

import '../styles/globals.css'

import { Header } from './components/sections/Header/header'

const manrope = Manrope({
  subsets: ['cyrillic'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '800'],
})

export const metadata: Metadata = {
  description: 'Сервис по ремонту турбин для грузовых и легковых автомобилей.',
  title: 'Турбо Кам Сервис',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang={'en'}>
      <body className={cn('bg-primary-black font-sans antialiased', manrope.variable)}>
        <Header />
        {children}
      </body>
    </html>
  )
}
