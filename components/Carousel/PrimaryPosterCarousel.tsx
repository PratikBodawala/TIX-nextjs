import React from 'react'
import Slider, {Settings} from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrimaryPoster from "../Poster/PrimaryPoster";
const settings: Settings = {
    centerMode: true,
  centerPadding: '60px',
  slidesToShow: 2,
  className: 'm-auto',
  autoplay: true,
  adaptiveHeight:true
};

const PrimaryPosterCarousel = () => (
    <div className="w-3/5 m-auto max-h[707px]">
    <Slider {...settings}>
      {[1,2,3,4,5,6,7].map((i)=>(<PrimaryPoster key={i} imageLocation={`/images/ps-${i}.webp`} imgAlt={'image description'}/>))}

    </Slider></div>
)
export default PrimaryPosterCarousel