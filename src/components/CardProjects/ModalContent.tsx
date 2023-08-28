import useLanguage from '@/hooks/useLanguage'
import { projectTypes } from '@/types/projectTypes'
import Tag from './Tag'
import ActionButtons from './ActionButtons'
import Carousel from './Carousel'
import { AiOutlineClose } from 'react-icons/ai'

interface Props {
    handleCloseModal: () => void
    data: projectTypes
}

const ModalContent = ({ handleCloseModal, data }: Props) => {
    const { language } = useLanguage()

    return (
        <div className="space-y-5 ">
            {/* header */}
            <div className="flex items-center justify-between pb-4">
                <h1 className="text-2xl md:text-3xl">{data.title}</h1>
                <AiOutlineClose
                    className="text-2xl opacity-70 cursor-pointer hover:opacity-100 transition-all duration-100 "
                    onClick={handleCloseModal}
                />
            </div>
            {/* content */}
            <div className="grid grid-cols-5 gap-6">
                <div className="col-span-5 md:col-span-3 ">
                    {/* Carrossel de imagens */}
                    <Carousel data={data.imageCarousel} />
                </div>
                <div className="col-span-5 md:col-span-2 space-y-4">
                    <div className="space-y-1">
                        <h2 className="text-xl">
                            {language === 'pt' ? 'Descrição' : 'Description'}
                        </h2>
                        <p className="text-xs md:text-sm font-normal text-secondary">
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
            {/* Botões de ação / Footer */}
            <ActionButtons handleCloseModal={handleCloseModal} data={data} />
        </div>
    )
}

export default ModalContent
