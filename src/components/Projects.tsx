import useLanguage from '@/hooks/useLanguage'
import { typesProject } from '@/data/typesProject'
import { projects } from '@/data/projects'
import { useState } from 'react'
import { typeProjectTypes } from '@/types/typeProjectTypes'
import { useSpring, animated } from 'react-spring'
import Card from './CardProjects/page'

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
                                    selectedType == type.id &&
                                    'text-decoration font-bold'
                                }`}
                            >
                                {type.title}
                            </span>
                        ))}
                    </div>
                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> */}
                        {filteredProjects.map((project) => (
                            <Card project={project} key={project.id} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
