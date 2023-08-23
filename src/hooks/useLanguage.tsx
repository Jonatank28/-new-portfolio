import { LanguageContext, LanguageContextType } from '@/context/language'
import { useContext } from 'react'

const useLanguage = (): LanguageContextType => {
    return useContext(LanguageContext)
}

export default useLanguage
