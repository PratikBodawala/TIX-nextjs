import format from "date-fns/format";
import style from "/styles/DateScheduleButton.module.css";
import React from "react";
export type DateScheduleButtonProps = {
  date: Date;
  variant: "active" | "inactive";
};
const DateScheduleButton: React.FC<DateScheduleButtonProps> = ({
  date,
  variant = "active",
}) => (
  <label>
    <input
      disabled={variant === "inactive"}
      type={"radio"}
      name={"dateSchedule"}
      className={style.dateScheduleButton}
      value={format(date, "yyyy-MM-dd")}
    />
    <div className="flex flex-col border rounded-lg border-shade600 w-[86px] h-[82px] justify-center items-center hover:bg-btnHover hover:text-white focus-within:bg-btnHover cursor-pointer">
      <span
        className={variant === "active" ? "text-shade600" : "text-shade400"}
      >
        {format(date, "d LLL")}
      </span>
      <span className="font-xl font-black">
        {format(date, "ccc").toLowerCase()}
      </span>
    </div>
  </label>
);
export default DateScheduleButton;
