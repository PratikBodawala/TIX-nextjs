import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import PrimaryPoster from "../Poster/PrimaryPoster";
import CarouselArrow from "./CarouselArrow";

const data = [
  { id: 1, path: "/images/ps-1.webp", name: "Spiderman: No way home" },
  { id: 2, path: "/images/ps-2.webp", name: "Yowis ben finale" },
  { id: 3, path: "/images/ps-3.webp", name: "Aladdin" },
  { id: 4, path: "/images/ps-4.webp", name: "Thor Love and Thunder" },
  { id: 5, path: "/images/ps-5.webp", name: "Avengers: Endgame" },
  { id: 6, path: "/images/ps-6.webp", name: "Captain Marvel" },
  { id: 7, path: "/images/ps-7.webp", name: "Spiderman: Far from home" },
];

const PrimaryPosterCarousel = () => (
  <div className="w-4/5">
    <Swiper spaceBetween={82} slidesPerView={2} loop={true} lazy={true}>
      {data.map(({ id, path, name }) => (
        <SwiperSlide key={id}>
          <PrimaryPoster
            key={id}
            loading={id < 3 ? "eager" : "lazy"}
            imageLocation={path}
            name={name}
            imgAlt={`image description of ${name}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);
export default PrimaryPosterCarousel;
