import { projectTypes } from '@/types/projectTypes'
import { typesProject } from '@/data/typesProject'
import useLanguage from '@/hooks/useLanguage'

const CardProjects = ({ project }: { project: projectTypes }) => {
    const { language } = useLanguage()

    const projectType = typesProject[language]?.find(
        (type) => type.id === project.typeID
    )

    return (
        <>
            <div className="bg-red block p-4 rounded-lg bg-secondary space-y-2 cursor-pointer">
                <div className="overflow-hidden rounded-md flex justify-center items-center w-full">
                    <img
                        src={project.image}
                        className="object-cover object-left transform hover:scale-110 transition duration-1000 ease-in-out w-full  md:h-[300px] rounded-md"
                        alt=""
                    />
                </div>
                <div className="space-y-2">
                    <h1
                        className={`text-base p-1 rounded-lg inline-flex text-old`}
                        style={{ backgroundColor: projectType?.color }}
                    >
                        {projectType?.title}
                    </h1>
                    <p className="text-sm font-normal text-secondary">
                        {project.description.length > 100
                            ? project.description.slice(0, 100) + '...'
                            : project.description}
                    </p>
                </div>
            </div>
        </>
    )
}

export default CardProjects
