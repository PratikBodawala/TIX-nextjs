import React from 'react'
import Slider, {Settings} from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrimaryPoster from "../Poster/PrimaryPoster";
import CarouselArrow from "./CarouselArrow";

const settings: Settings = {
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 2,
    // autoplay: true,
    className: '!flex gap-x-4',
    // adaptiveHeight: true,
    nextArrow: <CarouselArrow direction="right"/>,
    prevArrow: <CarouselArrow direction="left" />,
};

const data =[
    {id:1,path: '/images/ps-1.webp', name:'Spiderman: No way home'},
    {id:2, path: '/images/ps-2.webp', name:'Yowis ben finale'},
    {id:3, path:'/images/ps-3.webp', name:'Aladdin'},
    {id:4, path: '/images/ps-4.webp', name: 'Thor Love and Thunder'},
    {id:5, path: '/images/ps-5.webp', name:'Avengers: Endgame'},
    {id:6, path: '/images/ps-6.webp', name: 'Captain Marvel'},
    {id:7, path: '/images/ps-7.webp', name: 'Spiderman: Far from home'},]

const PrimaryPosterCarousel = () => (
    <div className="w-4/5">
        <Slider {...settings} >
            {data.map(({id, path, name}) => (
                <PrimaryPoster key={id} imageLocation={path} name={name} imgAlt={`image description of ${name}`}/>))}

        </Slider></div>
)
export default PrimaryPosterCarousel