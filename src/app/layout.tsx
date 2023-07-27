'use client'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

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
            <body className={inter.className}>
                <ThemeProvider attribute="class">{children}</ThemeProvider>
            </body>
        </html>
    )
}
