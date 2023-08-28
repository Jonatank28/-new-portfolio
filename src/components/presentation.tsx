'use client'
import useLanguage from '@/hooks/useLanguage'
import { apresentation } from '@/data/apresentation'

const Presentation = () => {
    const { language } = useLanguage()

    return (
        <section id="home">
            <div className="w-default h-screen md:h-[calc(100vh-68px)] flex flex-col lg:flex-row">
                <div className="w-full h-full lg:w-1/2 flex justify-center items-center pt-30">
                    <div className="text-center lg:text-start text-[40px] lg:text-6xl font-bold">
                        <h1>{apresentation[language].t1}</h1>
                        <p>{apresentation[language].t2}</p>
                        <p>{apresentation[language].t3}</p>
                    </div>
                </div>
                <div className="w-full h-full lg:w-1/2 flex justify-center items-center">
                    <img
                        className="w-[900px]"
                        src="bgPresentation.svg"
                        alt=""
                    />
                </div>
            </div>
        </section>
    )
}

export default Presentation
