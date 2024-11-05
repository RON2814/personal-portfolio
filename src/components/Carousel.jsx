import React, { useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import slides from "../data/slides";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousel = ({ activeIndex, onSlideChange }) => {
  const swiperRef = useRef(null); // Step 1: Create a ref for Swiper

  const handleSlideClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index); // Navigate to the clicked slide
    } else {
      console.error("Swiper instance is not available");
    }
  };

  return (
    <div className="carousel-container relative">
      <Swiper
        centeredSlides={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Navigation]}
        pagination={{
          clickable: true,
        }}
        navigation
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => onSlideChange(swiper.activeIndex)}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center">
            <div
              className="bg-gray-300 flex items-center justify-center p-10 cursor-pointer"
              onClick={() => handleSlideClick(index)}
            >
              <p className="text-lg font-bold">{slide.text}</p>
            </div>
            <p className="mt-2 opacity-0">{slide.text}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
