const Input = ({ type, value, onChange, onKeyPress, ...props }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      {...props}
    />
  );
};

export default Input;
