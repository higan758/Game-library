import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

export default function HomeSlider() {
  return (
    <div style={{ position: 'relative' }}>
      {/* Text Overlay */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -30%)',
        textAlign: 'center',
        color: '#fff',
        zIndex: 10,
        width: '100%',
        padding: '0 20px',
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          background: 'linear-gradient(to right, #ff7eb3, #ff758c)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Game Library
        </h1>
        <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>
          Discover, collect, and play the best games from around the world. Your ultimate gaming destination awaits.
        </p>
        <div style={{ marginTop: '20px' }}>
          <button style={{
            backgroundColor: '#d946ef',
            color: '#fff',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            marginRight: '10px',
            cursor: 'pointer',
          }}>
            Browse Games
          </button>
          <button style={{
            backgroundColor: 'transparent',
            color: '#fff',
            padding: '10px 20px',
            border: '2px solid #d946ef',
            borderRadius: '8px',
            fontSize: '1rem',
            cursor: 'pointer',
          }}>
            View Deals
          </button>
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://images8.alphacoders.com/990/thumb-1920-990916.jpg"
            alt="Slide 1"
            style={{
              width: '100%',
              height: '90vh',
              objectFit: 'cover',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images5.alphacoders.com/135/thumb-1920-1350882.png"
            alt="Slide 2"
            style={{
              width: '100%',
              height: '90vh',
              objectFit: 'cover',
            }}
          />
        </SwiperSlide>
           <SwiperSlide>
          <img
            src="https://images2.alphacoders.com/134/thumb-1920-1346612.jpeg"
            alt="Slide 3"
            style={{
              width: '100%',
              height: '90vh',
              objectFit: 'cover',
            }}
          />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}
