import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import { Navigation,Autoplay,Pagination,Scrollbar,A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import 'swiper/swiper-bundle.css'

function Swiperjs() {
  return (
    <div>
        <Swiper 
        modules={[Navigation,Pagination,Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={()=>console.log('slide change')}
        onSwiper={()=>console.log(Swiper)}
        autoplay={{delay:2000}}
        >
            <SwiperSlide>1</SwiperSlide>
            <SwiperSlide>2</SwiperSlide>
            <SwiperSlide>3</SwiperSlide>
            <SwiperSlide>4</SwiperSlide>

        </Swiper>

    </div>
  )
}

export default Swiperjs