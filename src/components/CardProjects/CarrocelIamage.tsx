import { projectTypes } from '@/types/projectTypes'

interface Props {
    data: projectTypes
}

const CarrocelIamages = ({ data }: Props) => {
    return (
        <div>
            <img src={data.image} alt="" />
        </div>
    )
}

export default CarrocelIamages
