import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../styles/globals.css";
import { Header } from './components/sections/Header/header'
import { cn } from '@/lib/utils'

const manrope = Manrope({ subsets: ['cyrillic'],weight: ['300', '400', '500', '800'], variable: "--font-sans" });

export const metadata: Metadata = {
  title: 'Турбо Кам Сервис',
  description: 'Сервис по ремонту турбин для грузовых и легковых автомобилей.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('bg-primary-black font-sans antialiased', manrope.variable)}>
        <Header />
        {children}
      </body>
    </html>
  );
}
