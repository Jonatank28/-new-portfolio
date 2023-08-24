import useLanguage from '@/hooks/useLanguage'
import { typesProject } from '@/data/typesProject'
import { projects } from '@/data/projects'
import { useState } from 'react'
import { typeProjectTypes } from '@/types/typeProjectTypes'
import Card from './Card'

const Projects = () => {
    const { language } = useLanguage()
    const [selectedType, setSelectedType] = useState(
        typesProject[language][0].id
    )
    const handleClickTypeSelect = (type: typeProjectTypes) => {
        setSelectedType(type.id)
    }

    return (
        <section id="projects">
            <div className="w-default space-y-2">
                <h1 className="text-2xl font-bold">
                    {language === 'pt' ? 'Projetos' : 'Projects'}
                </h1>
                {/* Cards */}
                <div className="space-y-8">
                    <div className="flex items-center gap-2">
                        {typesProject[language].map((type) => (
                            <span
                                onClick={() => handleClickTypeSelect(type)}
                                key={type.id}
                                className={`text-base font-medium cursor-pointer transition-all ${
                                    selectedType == type.id && 'text-decoration'
                                }`}
                            >
                                {type.title}
                            </span>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {projects[language].map((project) => (
                            <Card project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
