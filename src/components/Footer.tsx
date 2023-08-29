import React from 'react'
import useLanguage from '@/hooks/useLanguage'
import Logo from './Header/Logo'

const Footer = () => {
    const { language } = useLanguage()

    return (
        <footer className="bg-secondary py-8">
            <div className="flex justify-center gap-2 items-center text-secondary text-xs">
                <p>&copy; {new Date().getFullYear()}</p>
                <Logo />
                <p>
                    {language === 'pt'
                        ? 'Todos os direitos reservados.'
                        : 'All the rights reserved.'}
                </p>
            </div>
        </footer>
    )
}

export default Footer
