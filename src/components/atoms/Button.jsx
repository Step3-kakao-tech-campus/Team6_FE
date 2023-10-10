// 다형성을 가진 버튼 컴포넌트
const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default Button;
