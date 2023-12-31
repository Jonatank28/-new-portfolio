import React from 'react'
import { motion } from 'framer-motion'
import { navBar } from '@/data/navBar'
import Link from 'next/link'
import useLanguage from '@/hooks/useLanguage'
import { navItemTypes } from '@/types/navItemTypes'
import ThemeSwitcher from '../utilities/ThemeSwitcher'
import LanguageSwitcher from '../utilities/LanguageSwitcher'
import Logo from './Logo'

interface Props {
    mobileOpen: boolean
    setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>
    handleClickMenu: () => void
    handleClickItem: (item: navItemTypes) => void
    menuSelect: string
}

const MobileContent = ({
    mobileOpen,
    setMobileOpen,
    handleClickMenu,
    handleClickItem,
    menuSelect,
}: Props) => {
    const { language } = useLanguage()

    return (
        <div className="relative z-50 modal-open">
            {/* Overlay */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50"
                    onClick={handleClickMenu}
                ></div>
            )}

            {/* Menu Content */}
            <motion.div
                className={`fixed inset-y-0 left-0 bg-secondary w-64 p-4 transition-transform duration-300 transform ${
                    mobileOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="space-y-12">
                    <div className="flex justify-between items-center">
                        <div>
                            <Logo />
                        </div>
                        <div className="flex items-center gap-2">
                            <ThemeSwitcher className="" />
                            <LanguageSwitcher />
                        </div>
                    </div>

                    <div className="space-y-6">
                        {navBar[language].map((item) => (
                            <div
                                className={`${
                                    Number(menuSelect) === item.id
                                        ? 'text-decoration'
                                        : ''
                                }`}
                                key={item.id}
                                onClick={() => {
                                    handleClickItem(item), setMobileOpen(false)
                                }}
                            >
                                <Link href={item.href}>{item.title}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default MobileContent
