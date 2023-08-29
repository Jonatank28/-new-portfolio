// 'use client'
import { createContext, useState, ReactNode } from 'react'

export type LanguageContextType = {
    language: string
    changeLanguage: (newLanguage: string) => void
}

const LanguageContext = createContext<LanguageContextType>(
    {} as LanguageContextType
)

type LanguageProviderProps = {
    children: ReactNode
}

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const storedLanguage =
        typeof window !== 'undefined' ? localStorage.getItem('language') : null
    const languageToSet = storedLanguage ?? 'pt'

    const [language, setLanguage] = useState(languageToSet)

    const changeLanguage = (newLanguage: string) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('language', newLanguage)
        }
        setLanguage(newLanguage)
    }

    const contextValue: LanguageContextType = {
        language,
        changeLanguage,
    }

    return (
        <LanguageContext.Provider value={contextValue}>
            {children}
        </LanguageContext.Provider>
    )
}

export { LanguageProvider, LanguageContext }
