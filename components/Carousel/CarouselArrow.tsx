import type {FC} from 'react';
import Image from "next/future/image";
type CarouselArrowProps = {
  direction: "left" | "right";
};

const CarouselArrow: FC<CarouselArrowProps> = ({ direction }) => {
  return (
    // TODO not sure if this is the best way to do this
    <Image
      src={
        direction === "left"
          ? "/images/CarouselLeftArrow.svg"
          : "/images/CarouselRightArrow.svg"
      }
      alt={"Left Arrow"}
      width={72}
      height={72}
    />
  );
};
export default CarouselArrow;
