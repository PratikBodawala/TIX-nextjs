import Image, { StaticImageData } from "next/future/image";
import React from "react";
import Badge from "../Badge/Badge";

export type PrimaryPosterProps = {
  id: number;
  imageLocation: StaticImageData | string;
  name: string;
  theater: Array<"xxi" | "cgv" | "cinepolis" | "">;
};

// Customer color contrast for accessibility
const mapTheaterComponent = {
  xxi: <Badge text="XXI" color="bg-pastelYellow" textColor={"#555"} />,
  cgv: <Badge text="CGV" color="bg-cgvRed" textColor={"#1c0000"} />,
  cinepolis: (
    <Badge text="CINÉPOLIS" color="bg-cinepolisBlue" textColor={"#a8a8a8"} />
  ),
  "": "",
};

const PrimaryPoster: React.FC<
  PrimaryPosterProps & { imgAlt: string; loading: "lazy" | "eager" }
> = ({ imageLocation, name, imgAlt, loading, theater = [""] }) => (
  <div className="flex flex-col items-center">
    <Image
      className="rounded-2xl mb-[52px]"
      src={imageLocation}
      alt={imgAlt}
      height={707}
      width={495}
      loading={loading}
    />
    <h2 className="font-bold text-4xl mb-[30px]">{name}</h2>

    <div className="flex gap-x-[18px]">
      {theater.map((theaterType) => mapTheaterComponent[theaterType])}
    </div>
  </div>
);

export default PrimaryPoster;
