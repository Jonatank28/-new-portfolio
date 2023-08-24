'use client'

import './globals.css'
import { ThemeProvider } from 'next-themes'
import { LanguageProvider } from '@/context/language'
import type { Metadata } from 'next'
import { Poppins, Montserrat } from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['200', '300', '400', '700'],
    variable: '--font-poppins',
})
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700', '600', '800'],
    variable: '--font-montserrat',
})

export const metadata: Metadata = {
    title: 'Portifólio',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br">
            <body
                className={`${poppins.variable}  ${montserrat.variable} font-poppins bg-primary text-primary duration-300 ease-out delay-100 transition-all`}
            >
                <ThemeProvider attribute="class">
                    <LanguageProvider>{children}</LanguageProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
