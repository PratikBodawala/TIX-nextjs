import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CarouselArrow from "./CarouselArrow";
import Advertisement1 from "../Advertisement/Advertisement1";
import Advertisement2 from "../Advertisement/Advertisement2";
import Advertisement3 from "../Advertisement/Advertisement3";

const AdvertisementCarousel = () => (
  <div className="w-full mb-[177px]">
    <Swiper loop={true} lazy={true}>
      <SwiperSlide>
        <Advertisement1 />
      </SwiperSlide>
      <SwiperSlide>
        <Advertisement2 />
      </SwiperSlide>
      <SwiperSlide>
        <Advertisement3 />
      </SwiperSlide>
    </Swiper>
  </div>
);
export default AdvertisementCarousel;
