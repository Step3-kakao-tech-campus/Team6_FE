import { useState } from "react";
import SectionTitle from "../../atoms/SectionTitle";
import CalendarSlide from "./CalendarSlide";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

const Calendar = ({ selectedDate, setSelectedDate, unavailableDays }) => {
  const [monthState, setMonthState] = useState(
    new Date(new Date().getFullYear(), new Date().getMonth()),
  );
  return (
    <div className={"calender flex flex-col"}>
      <SectionTitle title={"Select date to visit"} />
      <div className={"calender-header flex justify-center gap-2"}>
        <button
          className={"calender-header-button"}
          onClick={() => {
            if (
              // 현재 달보다 작은 달로 이동할 경우, 이전 달로 이동할 수 없다.
              new Date(monthState.getFullYear(), monthState.getMonth() - 1) >=
              new Date(new Date().getFullYear(), new Date().getMonth())
            )
              setMonthState(
                new Date(monthState.getFullYear(), monthState.getMonth() - 1),
              );
          }}
          aria-label="previous-month-button"
        >
          <BiLeftArrowAlt size={30} />
        </button>
        <div
          className={"calender-month text-xl font-bold text-tripKoOrange-500"}
        >
            {monthState.toLocaleString("en-US", { month: "long" }).slice(0, 3)}
            {" "}
            {monthState.getFullYear()}
        </div>
        <button
          className={"calender-header-button"}
          onClick={() => {
            setMonthState(
              new Date(monthState.getFullYear(), monthState.getMonth() + 1),
            );
          }}
          aria-label="next-month-button"
        >
          <BiRightArrowAlt size={30} />
        </button>
      </div>
      <CalendarSlide
        monthState={monthState}
        unavailableDays={unavailableDays}
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
      />
    </div>
  );
};
export default Calendar;
