import * as React from 'react'
import { motion } from 'framer-motion'

const Logo = () => {
    return (
        <div
            style={{
                position: 'relative',
                width: 50,
                height: 50,
                margin: 8,
            }}
        >
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 50 50"
                style={{ position: 'absolute' }}
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 360 }}
                transition={{
                    ease: 'easeInOut',
                    duration: 2,
                    flip: Infinity,
                    repeatDelay: 5,
                }}
            >
                <defs>
                    <path
                        id="a"
                        d="M25 0c13.807 0 25 11.193 25 25S38.807 50 25 50 0 38.807 0 25 11.193 0 25 0z"
                    />
                    <clipPath id="b">
                        <use xlinkHref="#a" />
                    </clipPath>
                    <linearGradient
                        id="linear"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                    >
                        <motion.stop
                            stopColor="#2B00FF"
                            animate={{
                                stopColor: [
                                    '#0055FF',
                                    '#FFF9DA',
                                    '#E7FFF7',
                                    '#FFC6A8',
                                    '#FF7744',
                                    '#F3F2F2',
                                ],
                            }}
                            transition={{
                                yoyo: Infinity,
                                ease: 'linear',
                                duration: 8,
                            }}
                            offset="25%"
                        />
                        <motion.stop
                            stopColor="#0055FF"
                            animate={{
                                stopColor: [
                                    '#0055FF',
                                    '#FFF9DA',
                                    '#FFC6A8',
                                    '#FF7744',
                                    '#2B00FF',
                                ],
                            }}
                            transition={{
                                yoyo: Infinity,
                                ease: 'linear',
                                duration: 8,
                            }}
                            offset="50%"
                        />
                        <motion.stop
                            stopColor="#D4504C"
                            animate={{
                                stopColor: ['#FFF9DA', '#E7FFF7', '#0055FF'],
                            }}
                            transition={{
                                yoyo: Infinity,
                                ease: 'linear',
                                duration: 8,
                            }}
                            offset="75%"
                        />
                        <motion.stop
                            stopColor="#FF7744"
                            animate={{
                                stopColor: [
                                    '#D4504C',
                                    '#2B00FF',
                                    '#E7FFF7',
                                    '#FFF9DA',
                                ],
                            }}
                            transition={{
                                yoyo: Infinity,
                                ease: 'linear',
                                duration: 8,
                            }}
                            offset="100%"
                        />
                    </linearGradient>
                </defs>
                <use
                    fill="transparent"
                    stroke="url(#linear)"
                    strokeWidth="4"
                    clip-path="url(#b)"
                    xlinkHref="#a"
                />
                <motion.path
                    animate={{ rotate: 360 }}
                    transition={{
                        ease: 'easeInOut',
                        flip: Infinity,
                        repeatDelay: 5,
                        duration: 2,
                    }}
                    d="M28.364 30.8a10.282 10.282 0 010-12.6l1.438-1.867c1.853-2.406 1.523-5.791-.761-7.815-2.285-2.024-5.776-2.024-8.061 0s-2.615 5.409-.762 7.815l1.438 1.867a10.282 10.282 0 010 12.6l-1.438 1.867c-1.853 2.406-1.523 5.791.762 7.815s5.776 2.024 8.061 0c2.284-2.024 2.614-5.409.761-7.815zm-5.35-17.967a1.946 1.946 0 011.232-1.799 2.039 2.039 0 012.179.42 1.91 1.91 0 01.434 2.121 2 2 0 01-1.846 1.202c-1.103 0-1.997-.87-1.999-1.944zm1.999 25.277a1.998 1.998 0 01-1.848-1.196 1.907 1.907 0 01.43-2.12 2.034 2.034 0 012.176-.423 1.943 1.943 0 011.232 1.796c-.001 1.071-.891 1.94-1.99 1.943z"
                />
            </motion.svg>
        </div>
    )
}

export default Logo
