import { useCallback } from 'react'
import type { Container, Engine } from 'tsparticles-engine'
import Particles from 'react-particles'
import { loadSlim } from 'tsparticles-slim'
import { useTheme } from 'next-themes'

const ParticleContainer = () => {
    const { resolvedTheme } = useTheme()
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine)
    }, [])

    const particlesLoaded = useCallback(
        async (container: Container | undefined) => {},
        []
    )
    return (
        <div
            className="particle-container"
            style={{ position: 'relative', zIndex: -1 }}
        >
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value:
                                resolvedTheme === 'dark'
                                    ? '#121212'
                                    : '#F2F2F2',
                        },
                    },
                    fpsLimit: 180,
                    interactivity: {
                        detectsOn: 'window',
                        events: {
                            onClick: {
                                // enable: true,
                                mode: 'push',
                            },
                            onHover: {
                                enable: true,
                                mode: 'grab',
                                parallax: {
                                    enable: true,
                                    force: 60,
                                    smooth: 20,
                                },
                            },
                            resize: {
                                delay: 0.5,
                                enable: true,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value:
                                resolvedTheme === 'dark'
                                    ? '#c1c1c1'
                                    : '#b1b1b1',
                        },
                        links: {
                            color:
                                resolvedTheme === 'dark'
                                    ? '#4F5259'
                                    : '#c1c1c1',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outModes: {
                                default: 'bounce',
                            },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 40,
                        },
                        opacity: {
                            value: 0,
                        },
                        shape: {
                            type: 'circle',
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    )
}

export default ParticleContainer
