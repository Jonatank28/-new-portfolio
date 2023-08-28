import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

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
            autoHeight={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            navigation={true}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination, Navigation, Autoplay]}
        >
            {data.map((image, index) => (
                <SwiperSlide key={index}>
                    <img
                        className="h-[35vh] md:h-[60vh] object-cover"
                        src={image}
                        alt={`Image ${index}`}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Carousel
