'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import FixedContacts from '@/components/FixedContacts'
import About from '@/components/About'
import ScrollToTop from '@/components/utilities/ScrollToTop'
import Contact from '@/components/Contact/page'
import Skills from '@/components/skills'
import Presentation from '@/components/Presentation'

export default function Home() {
    return (
        <main>
            <Header />
            <div className="flex flex-col md:gap-[150px]">
                <Presentation />
                <About />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
            </div>
            {/* // Menu fixo que fica ao lado esquerdo inferior */}
            <ScrollToTop />
            <FixedContacts />
        </main>
    )
}
