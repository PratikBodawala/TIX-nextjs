import type { NextPage } from "next";
import PrimaryPosterCarousel from "../components/Carousel/PrimaryPosterCarousel";
import React from "react";
import AdvertisementCarousel from "../components/Carousel/AdvertisementCarousel";
import PosterSection from "../components/Poster/PosterSection";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center px-[72px]">
      <PrimaryPosterCarousel />
      <AdvertisementCarousel />
      <PosterSection />
    </div>
  );
};

export default Home;
