'use client'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

interface Props {
    className: string
}

const TogleThemes = ({ className, ...props }: Props) => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    function HandleClickTheme() {
        if (theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    useEffect(() => {
        setMounted(true)
    })

    if (!mounted) {
        return null
    }

    return (
        <>
            <button
                style={{ zIndex: '99999' }}
                onClick={HandleClickTheme}
                className={className}
                {...props}
            >
                {theme === 'dark' ? '🌞' : '🌙'}
            </button>
        </>
    )
}

export default TogleThemes
