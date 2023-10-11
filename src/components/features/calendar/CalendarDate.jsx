const CalendarDate = ({ date, selectDate, available, selected, visible }) => {
  return (
    <div
      className={
        "calender-slide-body__date__item flex w-full justify-center " + date + " " +
        (visible
          ? available && visible
            ? "cursor-pointer "
            : "cursor-not-allowed "
          : "")
      }
      onClick={() => {
        if (available && visible) selectDate(date);
      }}
    >
      <span
        className={
          "flex h-8 w-8 items-center justify-center rounded-full " +
          (selected && visible ? "bg-tripKoOrange-500 " : "") + // 선택된 날짜에만 배경색을 넣어준다.
          (available && visible ? (!selected? "hover:bg-tripKoOrange-300 ":"")  // 선택되지 않은 날짜에만 hover 효과를 넣어준다.
            : "text-gray-400 ")
        }
      >
        {visible && date.getDate()}
      </span>
    </div>
  );
};

export default CalendarDate;
