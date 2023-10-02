// 해당 영역은 아직 개발 중입니다.
import {AiOutlineClose} from "react-icons/ai";

const ReservationCalender = ({ isActive, setIsActive }) => {
  return (
    <div
      className={`reservation-calender-wrapper width-flex-layout fixed bottom-0 z-20 h-[80%] w-full bg-white overflow-y-scroll transition-all ease-in duration-200 rounded-t-3xl drop-shadow-xl ${
        isActive ? "" : "translate-y-full"
      }`}
    >
      <div className={"reservation-calender-container h-full w-full"}>
        <div className={"reservation-calender-header flex items-center justify-between px-2 py-4"}>
          <h2 className={"reservation-calender-header-title text-2xl font-bold"}>
            Select Date
          </h2>
          <button
            className={"reservation-calender-header-close-btn"}
            onClick={() => setIsActive(false)}
          >
            <AiOutlineClose size={30}/>
          </button>
        </div>
        <div className={"reservation-calender-content"}>
        </div>
      </div>
    </div>
  );
};

export default ReservationCalender;
