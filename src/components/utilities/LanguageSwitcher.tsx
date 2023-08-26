import useLanguage from '@/hooks/useLanguage'

const LanguageSwitcher = () => {
    const { changeLanguage, language } = useLanguage()
    const newLanguage = language === 'pt' ? 'en' : 'pt'
    return (
        <div>
            <button
                className="bg-primary shadow-lg p-2 rounded-lg"
                onClick={() => changeLanguage(newLanguage)}
            >
                {language === 'pt' ? 'en' : 'pt'}
            </button>
        </div>
    )
}

export default LanguageSwitcher
