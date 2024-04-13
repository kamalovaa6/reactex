import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation,  Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide slide1">
            <div className="slide-content">
              <h1>Улучшайте свой дом с SAFQ!</h1>
              <p>Откройте мир качественных товаров для дома и сделайте свой дом идеальным.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide slide2">
            <div className="slide-content">
              <h1>Ваш дом заслуживает лучшего!</h1>
              <p>С нами вы найдете все, что нужно для создания уюта и комфорта в вашем доме.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide slide3">
            <div className="slide-content">
              <h1>Сделайте свой дом уникальным!</h1>
              <p>Выберите из огромного ассортимента товаров для дома и создайте свой стиль.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
