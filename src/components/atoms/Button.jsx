const Button = ({ onclick, children }) => {
  return (
    <button onClick={onclick} className="button">
      {children}
    </button>
  );
};

export default Button;
