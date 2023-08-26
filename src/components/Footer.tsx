import useLanguage from '@/hooks/useLanguage'

const Footer = () => {
    const { language } = useLanguage()

    return (
        <footer className="bg-secondary py-8">
            <div className="container mx-auto text-center text-secondary text-xs">
                <p>
                    &copy; {new Date().getFullYear()}{' '}
                    {language === 'pt'
                        ? `Seu Nome. Todos os
                        direitos reservados.
                    `
                        : `Your name. All the
                    rights reserved.`}
                </p>
            </div>
        </footer>
    )
}

export default Footer
