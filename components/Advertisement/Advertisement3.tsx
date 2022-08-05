import React from 'react'
import bgImage from '/public/images/adv-3-bg.png'
import Image from 'next/future/image'

const Advertisement3 = () => (
    <div className="w-[1296px] h-[304px] flex flex-col items-center justify-center">
        <Image className="absolute" src={bgImage} height={304} width={1296} alt={'Image of movie shooting props'}/>
        <h1 className="text-[54px] z-10 text-white font-bold">Pesan Tiket Film di TIX ID</h1>
        <h5 className="text-xl z-10 font-normal text-white">#BebasAntri</h5>
    </div>)
export default Advertisement3