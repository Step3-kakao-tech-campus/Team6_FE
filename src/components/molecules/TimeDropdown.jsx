import { getAvailableTimes } from "../../utils/convert";
import Dropdown from "./Dropdown";

const TimeDropdown = ({
  startTime,
  endTime,
  startBreakTime,
  endBreakTime,
  interval,
  value,
  onChange,
}) => {
  return (
    <>
      <Dropdown
        options={getAvailableTimes(
          startTime,
          endTime,
          interval,
          startBreakTime ?? startTime,
          endBreakTime ?? endTime,
        )}
        value={value}
        onChange={onChange ? onChange : () => {}} // onChange가 없으면 아무것도 하지 않는다.
        placeholder="Select an option"
      />
    </>
  );
};

export default TimeDropdown;
