import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-secondary py-4">
            <div className="container mx-auto text-center text-secondary text-xs">
                <p>
                    &copy; {new Date().getFullYear()} Seu Nome. Todos os
                    direitos reservados.
                </p>
            </div>
        </footer>
    )
}

export default Footer
