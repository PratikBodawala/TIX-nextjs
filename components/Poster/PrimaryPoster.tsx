import Image, {StaticImageData} from "next/future/image";
import React from "react";
import Badge from "../Badge/Badge";

type PrimaryPosterProps = {
    imageLocation: StaticImageData|string,
    imgAlt:string,
    name:string
}


const PrimaryPoster: React.FC<PrimaryPosterProps> = ({imageLocation, name, imgAlt}) => (<div className="flex flex-col items-center">
            <Image className="rounded-2xl mb-[52px]" src={imageLocation} alt={imgAlt} height={707} width={495} />
    <h2 className="font-bold text-4xl mb-[30px]">{name}</h2>

    <div className="flex gap-x-[18px]">
        <Badge text='XXI' color='bg-pastelYellow' />
        <Badge text='CGV' color='bg-cgvRed'/>
        <Badge text='CINÉPOLIS' color='bg-cinepolisBlue'/>
    </div>
</div>)

export default PrimaryPoster