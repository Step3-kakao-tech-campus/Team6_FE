// 다형성을 가진 버튼 컴포넌트
const Button = ({ onclick, children }) => {
  return (
    <button onClick={onclick} type="button">
      {children}
    </button>
  );
};

export default Button;
