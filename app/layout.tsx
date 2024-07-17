import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import {Header} from '@/app/components/Header/header';

const manrope = Manrope({ 
  subsets: [ 'cyrillic'],
  weight: ['300', '500', '800'], 
  display: 'swap', 
  variable: '--font-manrope' 
});

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
      <body className={`${manrope.variable}, font-sans bg-black-10`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
