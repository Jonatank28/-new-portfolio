import useLanguage from '@/hooks/useLanguage'
import Skills2 from './Skills2'

const Skills = () => {
    const { language } = useLanguage()

    return (
        <section>
            <div className="w-default space-y-2 pt-[50px]" id="skills">
                <h1 className="text-2xl font-bold">
                    {language === 'pt' ? 'Habilidades' : 'Skills'}
                </h1>
            </div>
            <div className="pt-6">
                <Skills2 />
            </div>
        </section>
    )
}

export default Skills
