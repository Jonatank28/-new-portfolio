import { useState } from 'react'
import { motion } from 'framer-motion'
import linksContact from '@/data/linksContact'
import Link from 'next/link'

const FixedContacts = () => {
    const data = linksContact()
    const [hovered, setHovered] = useState(false)

    const handleHover = () => {
        setHovered(!hovered)
    }

    return (
        <motion.div
            className={`fixed bottom-12 left-20 ${
                hovered ? 'translate-x-7' : ''
            }`}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <ul className="flex flex-col gap-4">
                {data.map((contact, index) => (
                    <motion.li
                        className="flex flex-col justify-center items-center"
                        key={contact.id}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Link
                            href={contact.url}
                            target="_blank"
                            className="p-3 bg-secondary hover:bg-decoration hover:text-white rounded-full flex justify-center items-center mb-3"
                        >
                            <span className="text-xl">{contact.icon}</span>
                        </Link>
                        {index !== data.length - 1 && (
                            <div className="h-[5px] w-[1px] bg-decoration" />
                        )}
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    )
}

export default FixedContacts
