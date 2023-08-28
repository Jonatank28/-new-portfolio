import useLanguage from '@/hooks/useLanguage'
import linksContact from '@/data/linksContact'

const Links = () => {
    const { language } = useLanguage()
    const data = linksContact()

    return (
        <div className="pl:0 md:pl-20 h-full pb-6 md:pb-0">
            <h1 className="text-lg">
                {' '}
                {language === 'pt'
                    ? 'Informações de contato'
                    : 'Contact information'}
            </h1>
            <div className="flex flex-col gap-8 h-full mt-8 relative">
                <div className="absolute left-[42px] top-0 w-[1px] h-full bg-secondary" />
                {data.map((row) => (
                    <div className=" flex gap-6 items-center justify-start">
                        <div className="text-lg">{row.icon}</div>
                        <div className="h-full w-[1px] bg-secondary" />
                        <div>
                            <div className="text-sm">
                                <p className="text-primary">{row.name}</p>
                                <a
                                    href={row.url}
                                    target="_blank"
                                    className="text-secondary"
                                >
                                    {row.content}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Links
