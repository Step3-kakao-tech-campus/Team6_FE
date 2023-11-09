import Input from "../atoms/Input";

/**
 * InputGroup component입니다.
 * @param label {string} - 표시할 input label입니다. input옆에 보여집니다.
 * @param name {string} - 해당 input의 name입니다. input의 id와 같습니다.
 * @param value {string} - 해당 input의 value입니다. 내부에 입력할/입력된 값입니다.
 * @param onChange {function} - input의 value를 변경하는 함수를 넣어주세요.
 * @param type {string} - input의 type을 정해주세요.
 * @param errorMsg {string} - 외부에서 에러 메시지를 넣어주세요. 0글자 이상일 경우, 에러 메시지를 띄우며 input의 border를 빨간색으로 표시합니다.
 * @param onBlur {function} - 커서를 잃을 때 작동하는 함수입니다. 외부에서 검증 함수를 넣어주세요. input의 value를 감지 후 에러 메시지를 띄웁니다.
 * @param onKeyPress {function} - 입력 도중 enter를 감지하기 위한 함수입니다. 외부에서 입력 도중 enter를 감지하면 실행할 함수를 넣어주세요.
 * @returns {JSX.Element}
 * @constructor
 */
const InputGroup = ({
  label,
  name,
  value,
  onChange,
  type,
  errorMsg,
  onBlur,
  onKeyPress,
  register,
}) => {
  return (
    <div className="input-group w-full">
      <div className={"label-container flex w-full justify-between"}>
        <label htmlFor={name} className={"text-lg font-semibold"}>
          {label}
        </label>
        {errorMsg?.length > 0 && (
          <span className={"font-semibold text-red-500"}>{errorMsg}</span>
        )}
      </div>
      <Input
        name={name}
        value={value}
        onChange={onChange}
        className={
          "account-input " + (errorMsg?.length > 0 ? "border-red-500" : "")
        }
        type={type}
        onBlur={onBlur}
        onKeyPress={onKeyPress}
        register={register}
      />
    </div>
  );
};

export default InputGroup;
