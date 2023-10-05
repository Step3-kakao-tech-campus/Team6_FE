const Button = ({ onclick, children }) => {
  return (
    <button onClick={onclick} type="button">
      {children}
    </button>
  );
};

export default Button;
