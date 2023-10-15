import { useState } from "react";

const CalendarDate = ({ date, selectDate, available, selected, visible }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={
        "calender-slide-body__date__item flex h-12 w-full items-center justify-center " +
        (visible
          ? available && visible
            ? "cursor-pointer "
            : "cursor-not-allowed "
          : "")
      }
      onClick={() => {
        if (available && visible) selectDate(date);
      }}
      onMouseOver={() => {
        if (available && visible) setHover(true);
      }}
      onMouseOut={() => {
        if (available && visible) setHover(false);
      }}
    >
      <span
        className={
          "flex h-8 w-8 items-center justify-center rounded-full text-lg font-semibold " +
          (selected && visible ? "bg-tripKoOrange-500 " : "") + // 선택된 날짜에만 배경색을 넣어준다.
          (available && visible
            ? !selected && hover
              ? "bg-tripKoOrange-300 "
              : "" // 선택되지 않은 날짜에만 hover 효과를 넣어준다.
            : "text-gray-400 ")
        }
      >
        {visible && date.getDate()}
      </span>
    </div>
  );
};

export default CalendarDate;
