import React from 'react'
import Button from '../Form/Button'
import useLanguage from '@/hooks/useLanguage'

interface Props {
    handleCloseModal: () => void
}

const ActionButtons = ({ handleCloseModal }: Props) => {
    const { language } = useLanguage()

    return (
        <div className="flex justify-between">
            <div>
                <Button
                    className="border-red-500 text-red-400"
                    title={language === 'pt' ? 'Fechar' : 'Close'}
                    onClick={handleCloseModal}
                />
            </div>
            <div className="flex items-center gap-4">
                <Button
                    className="bg-blue-500 border-blue-500"
                    title={language === 'pt' ? 'Repositório' : 'Repositorie'}
                />
                <Button
                    className="bg-green-500 border-green-500"
                    title={language === 'pt' ? 'Ver Projeto' : 'View project'}
                />
            </div>
        </div>
    )
}

export default ActionButtons
