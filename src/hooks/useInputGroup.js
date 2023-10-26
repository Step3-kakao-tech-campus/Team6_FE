import { useState } from "react";

const useInputGroup = (initialValue, validateFunction) => {
  const [value, setValue] = useState(initialValue);
  const [errorMsg, setErrorMsg] = useState("");

  const validate = () => {
    setErrorMsg(validateFunction(value));
    return validateFunction(value) === "";
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return [value, onChange, errorMsg, validate];
};

export default useInputGroup;
