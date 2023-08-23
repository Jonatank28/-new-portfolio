'use client'

import './globals.css'
import { ThemeProvider } from 'next-themes'
import { LanguageProvider } from '@/context/language'
import type { Metadata } from 'next'
import { Poppins, Inter, Roboto } from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-poppins',
})
const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-inter',
})
const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-roboto',
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
                className={`${poppins.variable} ${roboto.variable}  ${inter.variable} font-poppins bg-primary text-primary duration-300 ease-out delay-100 transition-all`}
            >
                <ThemeProvider attribute="class">
                    <LanguageProvider>{children}</LanguageProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
