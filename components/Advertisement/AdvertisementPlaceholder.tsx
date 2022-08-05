import React from 'react'
const AdvertisementPlaceholder: React.FC<{id:number}> = ({id})=>(
    <div className="w-[1296px] h-[304px] bg-advertisementGray flex items-center justify-center">
        <span>Placeholder Advertise {id}</span>
    </div>)
export default AdvertisementPlaceholder