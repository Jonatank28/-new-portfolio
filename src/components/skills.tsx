'use client'

import useLanguag from '@/hooks/useLanguage'

const skills = () => {
    const { language } = useLanguag()

    return (
        <section>
            <div className="w-default pt-[50px]" id="skills">
                <h1 className="text-2xl font-bold">
                    {language === 'pt' ? 'Habilidades' : 'Skills'}
                </h1>
            </div>
        </section>
    )
}

export default skills
