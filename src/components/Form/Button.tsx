import React from 'react'

interface Props {
    title: string
    onClick?: () => void
    className: string
    href?: string
    disabled?: boolean
}

const Button = ({ title, href, onClick, disabled, className }: Props) => {
    return (
        <button
            className={`border p-[6px] md:p-2 text-sm md:text-base hover:-translate-y-1 transform hover:rotate-1 transition-all duration-200  rounded-lg ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            <a href={href} target="_blank">
                {title}
            </a>
        </button>
    )
}

export default Button
