const Input = ({ type, value, onChange, onKeyDown, ...props }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      {...props}
    />
  );
};

export default Input;
