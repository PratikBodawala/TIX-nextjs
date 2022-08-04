import Image, {StaticImageData} from "next/future/image";
import React from "react";

type PrimaryPosterProps = {
    imageLocation: StaticImageData|string,
    imgAlt:string
}


const PrimaryPoster: React.FC<PrimaryPosterProps> = ({imageLocation, imgAlt}) => <>
            <Image className="rounded-2xl" src={imageLocation} alt={imgAlt} height={707} width={495}/>
</>

export default PrimaryPoster