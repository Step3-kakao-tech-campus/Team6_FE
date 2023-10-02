const Input = ({ type, placeholder, value, onChange, onKeyDown, ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      {...props}
    />
  );
};

export default Input;
