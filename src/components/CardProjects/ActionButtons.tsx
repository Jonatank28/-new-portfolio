import React from 'react'
import Button from '../Form/Button'
import useLanguage from '@/hooks/useLanguage'
import { projectTypes } from '@/types/projectTypes'

interface Props {
    handleCloseModal: () => void
    data: projectTypes
}

const ActionButtons = ({ handleCloseModal, data }: Props) => {
    const { language } = useLanguage()

    return (
        <div className="flex justify-between">
            <div>
                <Button
                    className="border-red-500 text-red-400 hover:text-white hover:bg-red-500 text-old"
                    title={language === 'pt' ? 'Fechar' : 'Close'}
                    onClick={handleCloseModal}
                />
            </div>
            <div className="flex items-center gap-4">
                <Button
                    className="bg-blue-500 border-blue-500 text-old"
                    title={language === 'pt' ? 'Repositório' : 'Repositorie'}
                    href={data.repository}
                />
                <Button
                    className="bg-green-500 border-green-500 text-old"
                    title={language === 'pt' ? 'Ver Projeto' : 'View project'}
                    href={data.link}
                />
            </div>
        </div>
    )
}

export default ActionButtons
