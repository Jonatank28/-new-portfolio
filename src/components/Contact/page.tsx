import useLanguage from '@/hooks/useLanguage'
import Form from './Form'
import Links from './Links'

const Contact = () => {
    const { language } = useLanguage()

    return (
        <section>
            <div className="w-default space-y-2 pt-[50px]" id="contact">
                <h1 className="text-2xl font-bold">
                    {language === 'pt' ? 'Contato' : 'Contact'}
                </h1>
                <div className="grid grid-cols-2 gap-10">
                    <div className="col-span-2 md:col-span-1">
                        <Form />
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <Links />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
