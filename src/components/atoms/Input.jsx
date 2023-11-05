const Input = ({ type, value, onChange, onKeyDown, register, ...props }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      {...register}
      {...props}
    />
  );
};

export default Input;
