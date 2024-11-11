import React, { useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import slides from "../../data/projects";
import getProjectImage from "../../utils/image-project-util";

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
              className="bg-myBgColor bg-opacity-60 flex items-center justify-center p-2 h-[25vh] w-full cursor-pointer"
              onClick={() => handleSlideClick(index)}
            >
              <img
                src={getProjectImage(slide.image)}
                alt={slide.name}
                width="200"
                height="150"
                loading="lazy"
                className="h-[25vh] w-auto object-contain"
              />
            </div>
            <p className="mt-2 opacity-0">.</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
