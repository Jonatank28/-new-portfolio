'use client'
import { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import MobileContent from './MobileContent'
import { navItemTypes } from '@/types/navItemTypes'

interface Props {
    handleClickItem: (item: navItemTypes) => void
    menuSelect: string
}

const Mobile = ({ handleClickItem, menuSelect }: Props) => {
    const [mobileOpen, setMobileOpen] = useState<boolean>(false)

    const handleClickMenu = () => {
        setMobileOpen(!mobileOpen)
    }

    useEffect(() => {
        if (mobileOpen) {
            document.documentElement.classList.add('overflow-hidden')
        } else {
            document.documentElement.classList.remove('overflow-hidden')
        }
    }, [mobileOpen])

    return (
        <>
            <FaBars
                className="absolute top-4 right-4 text-2xl"
                onClick={handleClickMenu}
            />
            <MobileContent
                mobileOpen={mobileOpen}
                setMobileOpen={setMobileOpen}
                handleClickMenu={handleClickMenu}
                handleClickItem={handleClickItem}
                //@ts-ignore
                menuSelect={menuSelect}
            />
        </>
    )
}

export default Mobile
