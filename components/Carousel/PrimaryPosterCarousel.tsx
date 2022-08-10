import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import PrimaryPoster, { PrimaryPosterProps } from "../Poster/PrimaryPoster";
import CarouselArrow from "./CarouselArrow";

const data: PrimaryPosterProps[] = [
  {
    id: 1,
    imageLocation: "/images/ps-1.webp",
    name: "Spiderman: No way home",
    theater: ["xxi", "cgv", "cinepolis"],
  },
  {
    id: 2,
    imageLocation: "/images/ps-2.webp",
    name: "Yowis ben finale",
    theater: ["xxi", "cgv", "cinepolis"],
  },
  {
    id: 3,
    imageLocation: "/images/ps-3.webp",
    name: "Aladdin",
    theater: ["xxi"],
  },
  {
    id: 4,
    imageLocation: "/images/ps-4.webp",
    name: "Thor Love and Thunder",
    theater: ["cgv", "cinepolis"],
  },
  {
    id: 5,
    imageLocation: "/images/ps-5.webp",
    name: "Avengers: Endgame",
    theater: ["xxi", "cgv", "cinepolis"],
  },
  {
    id: 6,
    imageLocation: "/images/ps-6.webp",
    name: "Captain Marvel",
    theater: ["xxi", "cinepolis"],
  },
  {
    id: 7,
    imageLocation: "/images/ps-7.webp",
    name: "Spiderman: Far from home",
    theater: ["xxi", "cgv"],
  },
];

const PrimaryPosterCarousel = () => (
  <div className="w-4/5">
    <Swiper
      spaceBetween={82}
      slidesPerView={2}
      loop={true}
      lazy={true}
      className="mb-24"
      navigation={true}
      modules={[Navigation]}
    >
      {data.map(({ id, imageLocation, name, theater }) => (
        <SwiperSlide key={id}>
          <PrimaryPoster
            key={id}
            id={id}
            loading={id < 3 ? "eager" : "lazy"}
            imageLocation={imageLocation}
            name={name}
            imgAlt={`image description of ${name}`}
            theater={theater}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);
export default PrimaryPosterCarousel;
