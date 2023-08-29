import React from 'react'
import { motion } from 'framer-motion'

const Logo = () => {
    const letters = ['<', 'J', 'o', 'n', 'a', 't', 'a', 'n', '/', '>']

    return (
        <div className="flex justify-center items-center">
            <motion.div>
                {letters.map((letter, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            background: `linear-gradient(to right, var(--decoration), var(--bg-secondary))`,
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            x: [-8, 0, 8, 0][index % 4],
                            textShadow: '0px 0px 6px rgba(3, 218, 197, 0.2)',
                        }}
                        transition={{
                            delay: index * 0.2,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            duration: 1,
                        }}
                        style={{
                            fontFamily: 'sans-serif',
                            fontSize: '1rem', // Aumentando o tamanho da fonte
                            fontWeight: 'bold',
                            letterSpacing: '0.15em',
                            lineHeight: '1.4', // Ajustando o espaçamento entre linhas
                        }}
                    >
                        {letter}
                    </motion.span>
                ))}
            </motion.div>
        </div>
    )
}

export default Logo
