import { useState } from "react";

/**
 * InputRroup을 사용하기 위한 커스텀 훅
 * @param initialValue {string} 초기값
 * @param validateFunction {function} 유효성 검사 함수 [ (value) => { return value.length > 0 ? "" : "required." } ]
 * @returns {[string,onChange,string,(function(): boolean),((value: (((prevState: string) => string) | string)) => void)]}
 */
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

  return [value, onChange, errorMsg, validate, setErrorMsg];
};

export default useInputGroup;
