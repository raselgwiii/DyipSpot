import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CarouselCard from './CarouselCard';

export default () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='p-10'
    >
      <SwiperSlide><CarouselCard/></SwiperSlide>
      <SwiperSlide><CarouselCard/></SwiperSlide>
      <SwiperSlide><CarouselCard/></SwiperSlide>
      
    </Swiper>
  );
};