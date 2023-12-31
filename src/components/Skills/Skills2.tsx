import { technologies } from '@/data/technologies'
import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

interface Technology {
    path: string
    name: string
}

function Skills2() {
    const { resolvedTheme } = useTheme()

    const [state, setState] = useState({
        isPaused: false,
        itemsPerScreen: 0,
        totalItemsNeeded: 0,
        hoveredTech: null as Technology | null,
        hoverPosition: null as { top: number; left: number } | null,
    })

    const updateItemsPerScreen = () => {
        if (typeof window !== 'undefined') {
            const itemsPerScreen = Math.ceil(window.innerWidth / 150)
            const totalItemsNeeded = itemsPerScreen * 3
            setState((prevState) => ({
                ...prevState,
                itemsPerScreen,
                totalItemsNeeded,
            }))
        }
    }

    const toggleAnimation = () => {
        setState((prevState) => ({
            ...prevState,
            isPaused: !prevState.isPaused,
        }))
    }

    const handleTechMouseEnter = (
        tech: Technology,
        event: React.MouseEvent<HTMLDivElement>
    ) => {
        const rect = event.currentTarget.getBoundingClientRect()
        setState((prevState) => ({
            ...prevState,
            hoveredTech: tech,
            hoverPosition: { top: rect.top - 25, left: rect.left },
        }))
    }

    const handleTechMouseLeave = () => {
        setState((prevState) => ({
            ...prevState,
            hoveredTech: null,
            hoverPosition: null,
        }))
    }

    useEffect(() => {
        updateItemsPerScreen()
        window.addEventListener('resize', updateItemsPerScreen)

        return () => {
            window.removeEventListener('resize', updateItemsPerScreen)
        }
    }, [])

    const { isPaused, totalItemsNeeded, hoveredTech, hoverPosition } = state

    const repeatedTechnologies = Array.from(
        { length: totalItemsNeeded },
        (_, index) => technologies[index % technologies.length]
    )

    return (
        <div
            className="logos"
            onMouseEnter={toggleAnimation}
            onMouseLeave={toggleAnimation}
        >
            <div className={`logos-slide ${isPaused ? 'paused' : ''}`}>
                {repeatedTechnologies.map((tech, index) => (
                    <div
                        key={index}
                        className="logo-item flex flex-col items-center justify-center gap-3 relative "
                        onMouseEnter={(event) =>
                            handleTechMouseEnter(tech, event)
                        }
                        onMouseLeave={handleTechMouseLeave}
                    >
                        <img
                            className={`w-12 h-12 sm:w-16 sm:h-16  ${
                                resolvedTheme == 'dark' &&
                                tech.name == 'Next' &&
                                'p-1 bg-white'
                            }`}
                            src={`tecs/${tech.path}`}
                            alt="logo da tecnologia"
                        />
                        {hoveredTech === tech && hoverPosition && (
                            <span className="text-[8px] text-primary left-[50%] translate-x-[-50%] absolute -bottom-5  hidden sm:block">
                                {tech.name}
                            </span>
                        )}

                        <p className="text-[7px] text-primary text-center sm:hidden">
                            {tech.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills2
