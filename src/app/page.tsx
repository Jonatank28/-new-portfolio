'use client'

import Presentation from '@/components/Presentation'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import FixedContacts from '@/components/FixedContacts'
import About from '@/components/About'

export default function Home() {
    return (
        <main className="w-screen h-screen text-6xl font-bold">
            <Header />
            <Presentation />
            <About />
            <Projects />
            <Footer />
            {/* // Menu fixo que fica ao lado esquerdo inferior */}
            <FixedContacts />
        </main>
    )
}
