import React from 'react'

interface Props {
    title: string
    onClick?: () => void
    className: string
}

const Button = ({ title, onClick, className }: Props) => {
    return (
        <button
            className={`border p-2 text-base  hover:-translate-y-1 transform hover: rotate-1 transition-all duration-200  rounded-lg ${className}`}
            onClick={onClick}
        >
            {title}
        </button>
    )
}

export default Button
