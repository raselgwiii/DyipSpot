import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import CarouselCard from './CarouselCard';
import useFetchJeeps from "../../CustomHooks/useFetchJeeps.js";
import JeepLogs from "../JeepLogs.jsx";

export default () => {

    const {LocationData, loading, error, setrefresh, refresh} = useFetchJeeps()
    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            loop={true}
centeredSlides={true}
            slidesPerView={'auto'}
            spaceBetween={15}
            coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            onSlideChange={(swiper) => console.log(swiper)}
            onSwiper={(swiper) => console.log(swiper)}
            className='py-5 px-10 w-full h-full'
        >
            {LocationData.map((DriverInformation, index) => {
                return (

                    <SwiperSlide   key={DriverInformation.id} className="h-full pt-5">
                        {({ isActive }) => (
                         <div>
                             <CarouselCard  isActive={isActive} DriverInformation={DriverInformation}/>
                           <JeepLogs isActive={isActive}/>
                         </div>
                        )}


                       </SwiperSlide>

                )

            })

            }


        </Swiper>
    );
};