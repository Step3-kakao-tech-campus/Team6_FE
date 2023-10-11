import { useEffect, useState } from "react";
import SectionTitle from "../../atoms/SectionTitle";
import CalendarSlide from "./CalendarSlide";

const Calendar = ({ selectedDate, setSelectedDate, unavailableDays }) => {
  const [monthState, setMonthState] = useState(new Date());
  useEffect(() => { // TODO : 이 부분이 없을 경우, 처음에는 달력이 제대로 렌더링되지 않는다.
    setMonthState(new Date(monthState.getFullYear(), monthState.getMonth()));
  }, []);
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
