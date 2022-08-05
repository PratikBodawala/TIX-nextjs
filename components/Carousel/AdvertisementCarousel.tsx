import React from 'react'
import Slider, {Settings} from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrimaryPoster from "../Poster/PrimaryPoster";
import CarouselArrow from "./CarouselArrow";
import Advertisement1 from "../Advertisement/Advertisement1";
import Advertisement2 from "../Advertisement/Advertisement2";
import Advertisement3 from "../Advertisement/Advertisement3";

const settings: Settings = {
    centerMode: true,
    // centerPadding: '60px',
    slidesToShow: 1,
    // autoplay: true,
    autoplaySpeed: 5000,
    className: '!flex gap-x-4',
    // adaptiveHeight: true,
    nextArrow: <CarouselArrow direction="right"/>,
    prevArrow: <CarouselArrow direction="left" />,
    dots: true,
};


const AdvertisementCarousel = () => (
    <div className="w-full mb-[177px]">
        <Slider {...settings} key={1} >
            <Advertisement1/>
            <Advertisement2/>
            <Advertisement3/>
        </Slider></div>
)
export default AdvertisementCarousel