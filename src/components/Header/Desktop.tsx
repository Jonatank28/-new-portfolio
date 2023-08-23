import { useEffect, useState } from 'react'
import { navBar } from '@/data/navBar'
import Link from 'next/link'
import ThemeSwitcher from '../utilities/ThemeSwitcher'
import useLanguage from '@/hooks/useLanguage'

const Desktop = () => {
    const { language } = useLanguage()
    const [menuSelect, setMenuSelect] = useState(
        navBar[language as 'br' | 'us'][0].id
    )

    const handleClickItem = (id: number) => {
        setMenuSelect(id)
    }

    return (
        <header
            className={`bg-secondary py-5 duration-300 ease-out delay-100 transform shadow-md `}
        >
            <div className="w-defaut flex items-center justify-between">
                <a className="text-lg" href="#home">
                    Logo
                </a>
                <ul className="flex items-center gap-6 text-lg">
                    {navBar[language as 'br' | 'us'].map((item) => (
                        <li
                            onClick={() => handleClickItem(item.id)}
                            key={item.id}
                            className={`${
                                menuSelect === item.id ? 'text-decoration' : ''
                            }`}
                        >
                            <Link href={item.href}>{item.title}</Link>
                        </li>
                    ))}
                    <ThemeSwitcher className="" />
                </ul>
            </div>
        </header>
    )
}

export default Desktop
