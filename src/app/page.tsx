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
import Skills2 from '@/components/Skills2'
import Skills3 from '@/components/Skills3'

export default function Home() {
    return (
        <main>
            <Header />
            <div className="flex flex-col md:gap-[150px]">
                <Presentation />
                <About />
                <Skills />
                <Skills2 />
                <Skills3 />
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
