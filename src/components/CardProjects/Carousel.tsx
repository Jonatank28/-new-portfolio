import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

interface Props {
    data: string[]
}

const Carousel = ({ data }: Props) => {
    return (
        <Swiper
            style={{
                //@ts-ignore
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
            }}
            loop={true}
            navigation={true}
            pagination={true}
            modules={[Pagination, Navigation]}
        >
            {data.map((image, index) => (
                <SwiperSlide key={index}>
                    <img src={image} alt={`Image ${index}`} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Carousel
