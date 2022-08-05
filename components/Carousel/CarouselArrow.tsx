import React from 'react';
import Image from 'next/future/image'
type CarouselArrowProps = {
    direction: 'left' | 'right',
}


const CarouselArrow: React.FC<CarouselArrowProps> = ({ direction }) => {
  return (
    <Image src={direction === 'left' ? '/images/CarouselLeftArrow.svg': '/images/CarouselRightArrow.svg'} alt={'Left Arrow'} width={72} height={72}/>
  );
}
export default CarouselArrow;