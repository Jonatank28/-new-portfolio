'use client'
import { navBar } from '@/data/navBar'
import { useState, useEffect, lazy, Suspense } from 'react'
import useLanguage from '@/hooks/useLanguage'

const Desktop = lazy(() => import('./Desktop'))
const Mobile = lazy(() => import('./Mobile'))

const Header = () => {
    const { language } = useLanguage()
    const [isMobile, setIsMobile] = useState(false)
    const [componentLoaded, setComponentLoaded] = useState(false)
    const [isScrollAtTop, setIsScrollAtTop] = useState(true)
    const [menuSelect, setMenuSelect] = useState(navBar[language][0].id)

    const updateIsMobile = () => {
        setIsMobile(window.innerWidth <= 768)
    }

    // Atualiza o item ativo
    //@ts-ignore
    const handleClickItem = (item) => {
        setMenuSelect(item.id)
    }

    // Fica verificando se a tela é mobile
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsMobile(window.innerWidth <= 768)
            window.addEventListener('resize', updateIsMobile)
            return () => {
                window.removeEventListener('resize', updateIsMobile)
            }
        }
    }, [])

    // Se for tela mobile ativa o estado componentLoaded
    useEffect(() => {
        if (isMobile !== null) {
            setComponentLoaded(true)
        }
    }, [isMobile])

    // Verifica se scroll é igual a 0
    useEffect(() => {
        const handleScroll = () => {
            setIsScrollAtTop(window.scrollY === 0)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // Se scroll for igual a zero seta o item da posição 0 como ativo
    useEffect(() => {
        if (isScrollAtTop) {
            setMenuSelect(navBar[language][0].id)
        }
    }, [isScrollAtTop, setMenuSelect, language])

    return (
        <div>
            {componentLoaded && (
                <Suspense>
                    {isMobile ? (
                        <Mobile
                            handleClickItem={handleClickItem}
                            //@ts-ignore
                            menuSelect={menuSelect}
                        />
                    ) : (
                        <Desktop
                            handleClickItem={handleClickItem}
                            setMenuSelect={setMenuSelect}
                            //@ts-ignore
                            menuSelect={menuSelect}
                        />
                    )}
                </Suspense>
            )}
        </div>
    )
}

export default Header
