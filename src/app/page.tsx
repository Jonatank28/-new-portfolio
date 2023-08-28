'use client'

import FixedContacts from '@/components/FixedContacts'
import ScrollToTop from '@/components/utilities/ScrollToTop'

export default function Home() {
    return (
        <main>
            <h1>Agorrra vaiii</h1>
            {/* // Menu fixo que fica ao lado esquerdo inferior */}
            <ScrollToTop />
            <FixedContacts />
        </main>
    )
}
