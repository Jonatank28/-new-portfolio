import useLanguage from '@/hooks/useLanguage'

const LanguageSwitcher = () => {
    const { changeLanguage, language } = useLanguage()
    const newLanguage = language === 'pt' ? 'en' : 'pt'
    return (
        <div>
            <button
                className="bg-primary shadow-lg p-[6px] rounded-lg"
                onClick={() => changeLanguage(newLanguage)}
            >
                {language === 'pt' ? (
                    <img src="usa.png" className="w-6 h-6" alt="" />
                ) : (
                    <img src="brazil.png" className="w-6 h-6" alt="" />
                )}
            </button>
        </div>
    )
}

export default LanguageSwitcher
