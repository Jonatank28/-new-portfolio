import useLanguage from '@/hooks/useLanguage'
import { projectTypes } from '@/types/projectTypes'
import Tag from './Tag'
import ActionButtons from './ActionButtons'
import CarrocelIamages from './CarrocelIamage'

interface Props {
    handleCloseModal: () => void
    data: projectTypes
}

const Content = ({ handleCloseModal, data }: Props) => {
    const { language } = useLanguage()

    return (
        <div className="space-y-5">
            {/* header */}
            <div>
                <h1 className="text-3xl">{data.title}</h1>
            </div>
            {/* content */}
            <div className="grid grid-cols-5 gap-6">
                <div className="col-span-3">
                    {/* Carrossel de imagens */}
                    <CarrocelIamages data={data} />
                </div>
                <div className="col-span-2 space-y-4">
                    <div className="space-y-1">
                        <h2 className="text-xl">
                            {language === 'pt' ? 'Descrição' : 'Description'}
                        </h2>
                        <p className="text-sm font-normal text-secondary">
                            {data.description}
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-xl">
                            {language === 'pt'
                                ? 'Tecnologias utilizadas'
                                : 'Technologies used'}
                        </h2>
                        <div className="flex items-center gap-2 flex-wrap">
                            {data.tecs.map((tec, index) => (
                                <Tag key={index} title={tec} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
            {/* Botões de ação */}
            <ActionButtons handleCloseModal={handleCloseModal} />
        </div>
    )
}

export default Content
