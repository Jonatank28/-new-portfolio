'use client'

import TogleThemes from './components/TogleThemes'

export default function Home() {
    return (
        <main className="w-screen h-screen">
            <TogleThemes className="absolute right-32 top-6" />
            <h1>Helllo</h1>
        </main>
    )
}
