'use client'
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
    const [language, setLanguage] = useState('pt')

    const changeLanguage = (newLanguage: string) => {
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
