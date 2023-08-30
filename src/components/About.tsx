'use client'
import { about } from '@/data/about'
import useLanguage from '@/hooks/useLanguage'
import { useEffect, useState } from 'react'
import Divider from './utilities/Divider'

const About = () => {
    const { language } = useLanguage()
    const [t3Formatted, setT3Formatted] = useState(about[language].t3)

    // Verifica se o idioma foi alterado e formata o texto novamente com a classe de decoração
    useEffect(() => {
        const regex = new RegExp('(Jonatan)', 'g')
        const regex1 = new RegExp('(React)', 'g')
        const regex2 = new RegExp('(Node)', 'g')
        const regex3 = new RegExp('(MySQL)', 'g')
        const newT3 = about[language].t3
            .replace(regex, '<span class="text-decoration font-bold">$1</span>')
            .replace(
                regex1,
                '<span class="text-decoration font-bold">$1</span>'
            )
            .replace(
                regex2,
                '<span class="text-decoration font-bold">$1</span>'
            )
            .replace(
                regex3,
                '<span class="text-decoration font-bold">$1</span>'
            )
        setT3Formatted(newT3)
    }, [language])

    return (
        <section className="w-full z-50">
            <div
                className="grid grid-cols-3 gap-10 w-default pt-[50px]"
                id="about"
            >
                <div className="col-span-3 md:col-span-1">
                    <img
                        src="https://github.com/Jonatank28.png"
                        alt="Foto de perfil do github"
                    />
                </div>
                <div className="col-span-3 md:col-span-2 space-y-5">
                    <div className="">
                        <h1 className="text-2xl font-extrabold">
                            {about[language].t1}
                        </h1>
                        <h3 className="font-bold text-sm text-decoration">
                            {about[language].t2}
                        </h3>
                    </div>
                    <div className="text-sm font-normal leading-loose text-secondary  space-y-2">
                        <p
                            dangerouslySetInnerHTML={{ __html: t3Formatted }}
                        ></p>
                        <p>{about[language].t4}</p>
                        <p>{about[language].t5}</p>
                    </div>
                    <Divider />
                </div>
            </div>
        </section>
    )
}

export default About
