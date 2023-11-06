import Select from "react-select";
import { useMemo } from "react";
import { NATIONS } from "../nations";

const NationSelector = ({ onChange, onBlur }) => {
  const options = useMemo(() => {
    return NATIONS.map((nation) => {
      return { value: nation.name, label: `${nation.flag} ${nation.name}` };
    });
  }, []);
  return (
    <>
      <Select options={options} onChange={onChange} onBlur={onBlur} className={"account-input border-0"} />
    </>
  );
};

export default NationSelector;
