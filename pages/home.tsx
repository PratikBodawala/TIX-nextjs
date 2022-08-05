import type {NextPage } from 'next';
import PrimaryPosterCarousel from "../components/Carousel/PrimaryPosterCarousel";
import React from "react";
import AdvertisementCarousel from "../components/Carousel/AdvertisementCarousel";

const Home: NextPage = () => {
  return (<>
          <PrimaryPosterCarousel/>
      <AdvertisementCarousel/>
      </>)
}

export default Home
