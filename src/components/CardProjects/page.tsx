import { projectTypes } from '@/types/projectTypes'
import { typesProject } from '@/data/typesProject'
import useLanguage from '@/hooks/useLanguage'
import Modal from '../utilities/Modal'
import { useState } from 'react'
import ModalContent from './ModalContent'

const CardProjects = ({ project }: { project: projectTypes }) => {
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const { language } = useLanguage()

    const projectType = typesProject[language]?.find(
        (type) => type.id === project.typeID
    )

    const handleOpenModal = () => {
        setModalOpen(true)
        document.documentElement.classList.add('overflow-hidden')
    }

    const handleCloseModal = () => {
        setModalOpen(false)
        document.documentElement.classList.remove('overflow-hidden')
    }

    return (
        <>
            <div
                className="bg-red block p-4 rounded-lg bg-secondary space-y-2 cursor-pointer"
                onClick={handleOpenModal}
            >
                <div className="overflow-hidden rounded-md flex justify-center items-center w-full">
                    <img
                        src={project.image}
                        className="object-cover object-left transform hover:scale-110 transition duration-1000 ease-in-out w-full  md:h-[300px] rounded-md"
                        alt=""
                    />
                </div>
                <div className="space-y-2">
                    <h1
                        className={`text-base p-1 rounded-lg inline-flex  text-secondary`}
                        style={{ backgroundColor: projectType?.color }}
                    >
                        {projectType?.title}
                    </h1>
                    <p className="text-sm font-normal text-secondary">
                        {project.description}
                    </p>
                </div>
            </div>
            {/* Abre ao clicar no projeto */}
            <Modal isOpen={modalOpen} onClose={handleCloseModal}>
                <ModalContent
                    handleCloseModal={handleCloseModal}
                    data={project}
                />
            </Modal>
        </>
    )
}

export default CardProjects
