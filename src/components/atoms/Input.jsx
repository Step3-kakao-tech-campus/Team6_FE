const Input = ({
  name,
  type,
  value,
  onChange,
  onKeyDown,
  register,
  ...props
}) => {
  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      {...(register ? register(name, { required: true }) : {})}
      {...props}
    />
  );
};

export default Input;
