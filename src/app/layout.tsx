import './globals.css'

import type { Metadata } from 'next'

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
                className={`  bg-primary text-primary duration-300 ease-out delay-100 transition-all`}
            >
                {children}
            </body>
        </html>
    )
}
