import React from "react";
import logoImage from "/public/images/tix-id-1.png";
import globeImage from "/public/images/globe.svg";
import instagramIcon from "/public/images/instagram.svg";
import img7 from "/public/images/adv-image-7.png";
import img3 from "/public/images/adv-image-3.png";
import Image from "next/future/image";

const Advertisement1 = () => (
  <div className="w-[1296px] h-[304px] pt-[58px] pl-[103px] bg-advertisementGray relative">
    <Image
      className="mb-4"
      src={logoImage}
      height={32}
      width={64}
      alt={"Logo of TIX id"}
    />
    <h1 className="text-4xl max-w-[482px] mb-16">
      SEWA/BELI FILM dan SERIAL di TIX ID sekarang!
    </h1>
    <div className="flex">
      <Image
        src={globeImage}
        alt={"Globe icon"}
        className="mr-2"
        height={10}
        width={10}
      />
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target={"_blank"}
        rel={"noreferrer"}
        className="mr-[21.5px]"
      >
        www.tix.id
      </a>
      <Image
        src={instagramIcon}
        className="mr-2"
        alt={"Instagram icon"}
        height={11}
        width={11}
      />
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target={"_blank"}
        rel={"noreferrer"}
      >
        tix_id
      </a>
    </div>
    <Image
      src={img7}
      className="absolute top-[72px] left-[711px] "
      alt={"Image of Daniel Craig, looking sideways"}
    />
    <Image
      src={img3}
      className="absolute top-[82px] left-[800px] mr-[162px]"
      alt={"Image of Keanu Reeves, holding handgun"}
    />
  </div>
);
export default Advertisement1;
