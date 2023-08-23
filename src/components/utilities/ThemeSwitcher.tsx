'use client'

import React from 'react'
import { useTheme } from 'next-themes'
import IconMoonFill from '@/icon/IconMoonFill'
import IconSunFill from '@/icon/IconSunFill'
import { useLoaded } from '@/hooks/useLoad'

const ThemeSwitcher = ({ className }: { className: string }) => {
    const { theme, setTheme } = useTheme()
    const loaded = useLoaded()
    return (
        <button
            className={className}
            onClick={() =>
                theme === 'light' ? setTheme('dark') : setTheme('light')
            }
        >
            {theme === 'light' && loaded ? (
                <IconSunFill className="text-zinc-950" fontSize={20} />
            ) : (
                <IconMoonFill className="text-zinc-50" fontSize={20} />
            )}
        </button>
    )
}

export default ThemeSwitcher
