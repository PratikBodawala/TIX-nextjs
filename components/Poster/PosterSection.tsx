import Link from "next/link";
import Poster, { PosterProps } from "./Poster";
import React, { useState } from "react";

const data: PosterProps[] = [
  {
    name: "The Matrix: Resurrections",
    imageLocation: "/images/matrix.png",
    genre: ["Action", "Adventure", "Fantasy"],
  },
  {
    name: "Resident Evil: Welcome to Raccoon City",
    imageLocation: "/images/Resident_Evil.png",
    genre: ["Action", "Adventure", "Fantasy"],
  },
  {
    name: "Sword Art Online: Progressive - Aria of Starless Night",
    imageLocation: "/images/Sword_Art_Online.png",
    genre: ["Action", "Adventure", "Fantasy"],
  },
];

const PosterSection = () => (
  <div className="flex flex-col">
    <div className="flex w-full justify-between">
      <div className="flex flex-col">
        <h5 className="font-medium text-2xl text-shade900">Movies</h5>
        <p className="font-normal text-base text-shade700 mb-[30px]">
          Lorem ipsum dolor sit amet. Et dolorum libero eos enim tempora aut
        </p>
      </div>
      <Link href="#" className="flex">
        <a className="text-2xl font-medium text-skyBlue">See All</a>
      </Link>
    </div>
    <div className="flex gap-16 flex-wrap basis-1/3">
      {data.map(({ name, imageLocation, genre }) => (
        <Poster
          name={name}
          imgAlt={`Image of ${name}`}
          imageLocation={imageLocation}
          genre={genre}
          loading={"eager"}
          key={name}
        />
      ))}
    </div>
  </div>
);
export default PosterSection;
