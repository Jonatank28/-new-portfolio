'use client'
import Header from '@/components/Header'
import FixedContacts from '@/components/FixedContacts'
import ScrollToTop from '@/components/utilities/ScrollToTop'

export default function Home() {
    return (
        <main>
            <Header />

            {/* // Menu fixo que fica ao lado esquerdo inferior */}
            <ScrollToTop />
            <FixedContacts />
        </main>
    )
}
