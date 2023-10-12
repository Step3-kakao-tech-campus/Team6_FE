import { useEffect, useState } from "react";
import SectionTitle from "../../atoms/SectionTitle";
import CalendarSlide from "./CalendarSlide";

const Calendar = ({ selectedDate, setSelectedDate, unavailableDays }) => {
  const [monthState, setMonthState] = useState(new Date(new Date().getFullYear(), new Date().getMonth()));
  return (
    <div className={"calender flex flex-col"}>
      <SectionTitle title={"Select date to visit"} />
      <div className={"calender-header flex justify-center"}>
        <button
          className={"calender-header-button"}
          onClick={() => {
            setMonthState(
              new Date(monthState.getFullYear(), monthState.getMonth() - 1),
            );
          }}
        >
          {"<"}
        </button>
        <div className={"calender-month"}>
          {monthState.getFullYear()}년 {monthState.getMonth() + 1}월
        </div>
        <button
          className={"calender-header-button"}
          onClick={() => {
            setMonthState(
              new Date(monthState.getFullYear(), monthState.getMonth() + 1),
            );
          }}
        >
          {">"}
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
