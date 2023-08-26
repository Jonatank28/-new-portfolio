import React, { useState, useEffect } from 'react'
import { FaAngleUp } from 'react-icons/fa'

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true)
            } else {
                setShowTopBtn(false)
            }
        })
    }, [])
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    return (
        showTopBtn && (
            <div className="bg-secondary rounded-lg p-2 fixed bottom-4 right-4 cursor-pointer">
                <FaAngleUp
                    className="text-3xl text-decoration"
                    onClick={goToTop}
                />
            </div>
        )
    )
}
export default ScrollToTop
