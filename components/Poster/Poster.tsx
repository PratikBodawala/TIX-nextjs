import Image from "next/future/image";
import type { FC } from "react";
export type PosterProps = {
  imageLocation: string;
  name: string;
  genre: string[];
  // imgAlt: string;
  // loading: "lazy" | "eager";
};
const Poster: FC<
  PosterProps & { imgAlt: string; loading: "lazy" | "eager" }
> = ({ imageLocation, name, genre = [""], imgAlt, loading }) => (
  <div className="flex flex-col">
    <Image
      src={imageLocation}
      alt={imgAlt}
      width={359}
      height={533}
      loading={loading}
      className="rounded-2xl"
    />
    <h3 className="font-medium text-xl mt-[53px] w-[359px]">{name}</h3>
    <p className="font-normal">{genre.join(", ")}</p>
  </div>
);
export default Poster;
