import './globals.css'
import { ThemeProvider } from 'next-themes'
import { LanguageProvider } from '@/context/language'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['200', '300', '400', '700'],
    variable: '--font-poppins',
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
                className={`${poppins.variable} font-poppins bg-primary text-primary duration-300 ease-out delay-100 transition-all`}
            >
                <ThemeProvider attribute="class">
                    <LanguageProvider>{children}</LanguageProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
