import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import DateScheduleButton from "../../components/Schedule/DateScheduleButton";
import isPast from "date-fns/isPast";
import Dropdown from "../../components/Dropdown/Dropdown";
const datesDiff = [-2, -1, 0, 1, 2, 3, 4, 5];
const data = { name: "Spiderman: No way home" };
const Movie = () => (
  <section className="px-[72px]">
    <h1 className="mt-6 mb-4 font-bold text-3xl text-shade900">Select Date</h1>
    <p className="text-base font-normal text-shade700">
      Lorem ipsum dolor sit amet. Et dolorum libero eos enim tempora aut
    </p>
    <div className="flex">
      <div className="flex flex-col w-3/5">
        <Swiper spaceBetween={100} slidesPerView={6} className="w-[500px]">
          {datesDiff.map((diff) => {
            const d = new Date();
            d.setDate(d.getDate() + diff);
            return (
              <SwiperSlide key={diff}>
                <DateScheduleButton
                  date={d}
                  variant={isPast(d) ? "inactive" : "active"}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="h-[1px] w-full bg-hrColor my-[22px]" />
        <Dropdown />
      </div>
      <div className="flex w-2/5 justify-center items-center">{data.name}</div>
    </div>

    {/*<p>{movie.description}</p>*/}
  </section>
);
export default Movie;
