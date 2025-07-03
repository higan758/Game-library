import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';

export default function HomeSlider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img
            src="https://images2.alphacoders.com/134/thumb-1920-1346612.jpeg"
            alt="Slide"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              borderRadius: '8px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
            }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://images5.alphacoders.com/135/thumb-1920-1350882.png"
            alt="Slide"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              borderRadius: '8px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
            }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
