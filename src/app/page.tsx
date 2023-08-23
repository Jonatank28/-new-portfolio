'use client'

import About from '@/components/presentation'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Projects from '@/components/Projects'

export default function Home() {
    return (
        <main className="w-screen h-screen text-6xl font-bold">
            <Header />
            <About />
            <Projects />
            <Footer />
        </main>
    )
}
