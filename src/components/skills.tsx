import type { NextPage } from 'next'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useEffect } from 'react'

const Skills: NextPage = () => {
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        const components = document.querySelectorAll('.component')
        const container: HTMLElement = document.querySelector('#container')!

        gsap.to(components, {
            xPercent: -100 * (components.length - 1),
            ease: 'none',
            scrollTrigger: {
                trigger: container,
                pin: true,
                scrub: 1,
                snap: 1 / (components.length - 1),
                end: () => '+=' + container.offsetWidth,
                invalidateOnRefresh: true, // This line is added
            },
        })
    }, [])

    return (
        <div id="container" className="container">
            <div className="component one">Primeiro</div>
            <div className="component two">Segundo</div>
            <div className="component three">Terceiro</div>
            <div className="component four">Quarto</div>
            <div className="component five">Quinto</div>
        </div>
    )
}

export default Skills
