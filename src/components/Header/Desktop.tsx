'use client'
import { useEffect, useState } from 'react'
import { navBar } from '@/data/navBar'
import Link from 'next/link'
import ThemeSwitcher from '../utilities/ThemeSwitcher'
import useLanguage from '@/hooks/useLanguage'
import { navItemTypes } from '@/types/navItemTypes'
import Logo from './Logo'
import LanguageSwitcher from '../utilities/LanguageSwitcher'

interface Props {
    handleClickItem: (item: navItemTypes) => void
    menuSelect: string
    setMenuSelect: React.Dispatch<React.SetStateAction<number>>
}

const Desktop = ({ handleClickItem, menuSelect, setMenuSelect }: Props) => {
    const { language } = useLanguage()

    return (
        <header
            id="home"
            className={`bg-secondary py-5 duration-300 ease-out delay-100 transform shadow-md 
            }`}
        >
            <div className="w-default flex items-center justify-between">
                <Logo />
                <ul className="flex items-center gap-8 text-lg">
                    {navBar[language].map((item) => (
                        <li
                            onClick={() => handleClickItem(item)}
                            key={item.id}
                            className={`${
                                Number(menuSelect) === item.id
                                    ? 'text-decoration'
                                    : ''
                            }`}
                        >
                            <Link
                                href={item.href}
                                className="text-base font-light "
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                    <ThemeSwitcher className="bg-primary shadow-lg p-2 rounded-lg" />
                    <LanguageSwitcher />
                </ul>
            </div>
        </header>
    )
}

export default Desktop
