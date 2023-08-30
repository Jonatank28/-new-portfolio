import { useCallback } from 'react'
import type { Container, Engine } from 'tsparticles-engine'
import Particles from 'react-particles'
import { loadSlim } from 'tsparticles-slim'

const ParticleContainer = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine)
        await loadSlim(engine)
    }, [])

    const particlesLoaded = useCallback(
        async (container: Container | undefined) => {
            await console.log(container)
        },
        []
    )
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: '#262626',
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    detectsOn: 'window',
                    events: {
                        onClick: {
                            enable: true,
                            mode: 'push',
                        },
                        onHover: {
                            enable: true,
                            mode: 'grab',
                            parallax: {
                                enable: true,
                                force: 60,
                                smooth: 10,
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
                        value: '#ffffff',
                    },
                    links: {
                        color: '#ffffff',
                        distance: 150,
                        enable: true,
                        opacity: 0.1,
                        width: 1,
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outModes: {
                            default: 'bounce',
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
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
    )
}

export default ParticleContainer
