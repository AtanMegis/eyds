import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import Card from './Card'
import { dataSolution } from '@helper/solution'
import { useEffect, useState } from 'react'

export const SwiperComponent = () => {
    const [solutions, setSolutions] = useState<any[]>([])

    useEffect(() => {
        setSolutions(dataSolution)
    }, [])

    return (
        <Swiper
            data-aos="fade-up"
            className="w-full max-w-full overflow-y-hidden"
            modules={[Pagination]}
            spaceBetween={10}
            slidesPerView={3}
            draggable={true}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            }}
        >
            {solutions.map((item) => (
                <SwiperSlide
                    key={item?.id}
                    className="flex w-full max-w-full overflow-x-hidden transform ease-in-out cursor-pointer"
                >
                    <Card img={item?.image} icon={item?.icon} title={item?.title} desc={item?.description} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
