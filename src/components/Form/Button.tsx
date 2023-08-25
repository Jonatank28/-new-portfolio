import React from 'react'

interface Props {
    title: string
    onClick?: () => void
    className: string
    href?: string
}

const Button = ({ title, href, onClick, className }: Props) => {
    return (
        <button
            className={`border p-2 text-base hover:-translate-y-1 transform hover: rotate-1 transition-all duration-200  rounded-lg ${className}`}
            onClick={onClick}
        >
            <a href={href} target="_blank">
                {title}
            </a>
        </button>
    )
}

export default Button
