import Input from "../atoms/Input";

const InputGroup = ({
  label,
  name,
  value,
  onChange,
  type,
  errorMsg,
  onBlur,
  onKeyPress,
}) => {
  return (
    <div className="input-group">
      <div className={"label-container flex w-full justify-between"}>
        <label htmlFor={name} className={"text-lg font-semibold"}>
          {label}
        </label>
        {errorMsg.length > 0 && (
          <span className={"font-semibold text-red-500"}>{errorMsg}</span>
        )}
      </div>
      <Input
        name={name}
        value={value}
        onChange={onChange}
        className={"account-input " + (errorMsg.length>0? "border-red-500" : "")}
        type={type}
        onBlur={onBlur}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default InputGroup;
