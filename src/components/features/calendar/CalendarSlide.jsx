import CalendarDate from "./CalendarDate";
import { isAvailableDay, isSameDay } from "./utils";

const CalendarSlide = ({ monthState, unavailableDays, setSelectedDate, selectedDate }) => {
  return (
    <div className={"calender-slide"}>
        <div className={"calender-slide-body__day grid grid-cols-7 text-lg font-semibold"}>
          {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
            <div className={"calender-slide-body__day__item flex justify-center"}>
              {day}
            </div>
          ))}
        </div>
        <div className={"calender-slide-body__date grid grid-cols-7"}>
          {
            // 42개의 div를 만들어서 각각의 div에 날짜를 넣어준다.
            Array.from({ length: 42 }, (_, i) => {
              const date = new Date(
                monthState.getFullYear(),
                monthState.getMonth(),
                i - monthState.getDay() + 1,
              );
              return (
                <CalendarDate
                  date={date}
                  selectDate={() => setSelectedDate(date)}
                  available={isAvailableDay(date, unavailableDays) && date.getMonth() === monthState.getMonth()} // available이고, 현재 달에 속하는 날짜만 선택할 수 있도록 한다.
                  visible={date.getMonth() === monthState.getMonth()}
                  selected={selectedDate && isSameDay(selectedDate, date)}
                  key={i}
                />
              );
            })
          }
      </div>
    </div>
  );
};

export default CalendarSlide;
