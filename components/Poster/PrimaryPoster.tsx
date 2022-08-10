import Image, { StaticImageData } from "next/future/image";
import React from "react";
import Badge from "../Badge/Badge";

export type PrimaryPosterProps = {
  id: number;
  imageLocation: StaticImageData | string;
  name: string;
  theater: Array<"xxi" | "cgv" | "cinepolis" | "">;
};

const mapTheaterComponent = {
  xxi: <Badge text="XXI" color="bg-pastelYellow" />,
  cgv: <Badge text="CGV" color="bg-cgvRed" />,
  cinepolis: <Badge text="CINÉPOLIS" color="bg-cinepolisBlue" />,
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
