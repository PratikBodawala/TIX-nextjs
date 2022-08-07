import React from "react";
import logoImage from "/public/images/tix-id-transprant.png";
import Image from "next/future/image";
import googlePlay from "/public/images/Google-Play.webp";
import appStore from "/public/images/App-Store.webp";
const Advertisement2 = () => (
  <div className="w-[1296px] h-[304px] bg-royalBlue flex flex-col items-center justify-center">
    <Image
      src={logoImage}
      height={122}
      width={293}
      alt={"Logo of TIX id"}
      quality="100"
    />
    <h4 className="text-2xl font-normal text-white mb-[18px]">
      Download Sekarang!
    </h4>
    <div className="flex gap-6">
      <Image
        src={googlePlay}
        alt={"Google Play badge"}
        height={50}
        width={200}
        quality={100}
      />
      <Image
        src={appStore}
        alt={"App Store badge"}
        height={50}
        width={200}
        quality={100}
      />
    </div>
  </div>
);
export default Advertisement2;
