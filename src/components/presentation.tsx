import React from 'react'

const presentation = () => {
    return (
        <section>
            <div className="w-defaut h-[calc(100vh-68px)] flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 flex justify-center items-center">
                    <div className="text-6xl">
                        <h1>Olá tudo bem,</h1>
                        <p>Sou Jonatan</p>
                        <p>Desenvolvedor full stack</p>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 flex justify-center items-center">
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

export default presentation
