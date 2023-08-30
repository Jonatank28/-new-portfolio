import React, { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import useLanguage from '@/hooks/useLanguage'
import { typesProject } from '@/data/typesProject'
import { projects } from '@/data/projects'
import { typeProjectTypes } from '@/types/typeProjectTypes'
import Card from './CardProjects/page'
import { projectTypes } from '@/types/projectTypes'
import Modal from './utilities/Modal'
import ModalContent from './CardProjects/ModalContent'

interface Props {
    project: projectTypes
}

const AnimatedProjectCard = ({ project }: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const animatedProps = useSpring({
        opacity: 1,
        transform: 'translateY(0px) scale(1)',
        from: {
            opacity: 0,
            transform: 'translateY(10px) scale(0.9)',
        },
        reset: true,
        config: {
            tension: 100,
            friction: 8,
        },
    })

    useEffect(() => {
        if (isModalOpen) {
            document.documentElement.classList.add('overflow-hidden')
        } else {
            document.documentElement.classList.remove('overflow-hidden')
        }
    }, [isModalOpen])

    return (
        <div>
            <animated.div style={animatedProps} onClick={toggleModal}>
                <Card project={project} />
            </animated.div>
            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={toggleModal}>
                    <ModalContent
                        handleCloseModal={toggleModal}
                        data={project}
                    />
                </Modal>
            )}
        </div>
    )
}

const Projects = () => {
    const { language } = useLanguage()
    const [selectedType, setSelectedType] = useState(
        typesProject[language][0].id
    )

    const handleClickTypeSelect = (type: typeProjectTypes) => {
        setSelectedType(type.id)
    }

    const filteredProjects =
        selectedType === 1
            ? projects[language]
            : projects[language].filter(
                  (project) => project.typeID === selectedType
              )

    return (
        <section>
            <div className="w-default space-y-2 pt-[50px]" id="projects">
                <h1 className="text-2xl font-bold">
                    {language === 'pt' ? 'Projetos' : 'Projects'}
                </h1>
                <div className="space-y-8">
                    <div className="flex items-center gap-4">
                        {typesProject[language].map((type) => (
                            <span
                                onClick={() => handleClickTypeSelect(type)}
                                key={type.id}
                                className={`text-base cursor-pointer transition-all ${
                                    selectedType == type.id
                                        ? 'text-decoration font-bold'
                                        : 'font-light'
                                }`}
                            >
                                {type.title}
                            </span>
                        ))}
                    </div>
                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredProjects.map((project) => (
                            <AnimatedProjectCard
                                key={project.id}
                                project={project}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
