import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

const Modal = ({ isOpen, children }: Props) => {
    const modalRef = useRef<HTMLDivElement>(null)

    // Não deixa o scroll da pagina acontecer quando o modal estiver aberto
    useEffect(() => {
        if (isOpen) {
            modalRef?.current?.focus()
            document.body.classList.add('modal-open')
        } else {
            document.body.classList.remove('modal-open')
        }
    }, [isOpen])

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-default modal-open fixed inset-0 z-50 flex items-center justify-center"
                    ref={modalRef}
                >
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black"
                    ></motion.div>

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="bg-secondary p-6 rounded-lg shadow-md relative z-10"
                    >
                        <div>{children}</div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal
