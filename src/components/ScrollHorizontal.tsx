import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

function ScrollHorizontal() {
    const sectionRef = useRef(null)
    const triggerRef = useRef(null)

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
            },
            {
                translateX: '-300vw',
                ease: 'none',
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: 'top top',
                    end: '2000 top',
                    scrub: 0.6,
                    pin: true,
                },
            }
        )
        return () => {
            {
            }
            pin.kill()
        }
    }, [])

    return (
        <section className="scroll-section-outer">
            <div ref={triggerRef}>
                <div ref={sectionRef} className="scroll-section-inner">
                    <div className="scroll-section bg-red-600">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/RK93m-yxGDk?autoplay=1"
                            title="Video 2"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="scroll-section bg-teal-400">
                        <h3>Section 2</h3>
                    </div>
                    <div className="scroll-section bg-yellow-400">
                        <h3>Section 3</h3>
                    </div>
                    <div className="scroll-section bg-purple-600">
                        <h3>Section 4</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ScrollHorizontal
