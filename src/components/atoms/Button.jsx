// 다형성을 가진 버튼 컴포넌트
const Button = ({
  as: Component = "button",
  variant = "primary",
  onClick,
  children,
  ...rest
}) => {
  const styles = {
    secondary: "bg-gray-500 text-white px-4 py-2 rounded",
    link: "text-blue-500 underline",
  };

  return (
    <Component className={styles[variant]} onClick={onClick} {...rest}>
      {children}
    </Component>
  );
};

export default Button;

// 다형성을 가진 버튼 컴포넌트 사용 예시
// 다음과 같이 사용할 수 있습니다.
// <Button as="a" href="/"> Go to Home </Button>
// <Button as={Link} to="/"> Go to Home </Button>
// <Button as="button" onClick={() => alert("clicked!")}> Click me! </Button>
// <Button as="button" onClick={() => alert("clicked!")} variant="secondary"> Click me! </Button>
// <Button as="button" onClick={() => alert("clicked!")} variant="link"> Click me! </Button>
// <Button as="button" onClick={() => alert("clicked!")} variant="link" disabled> Click me! </Button>
// <Button as="button" onClick={() => alert("clicked!")} variant="link" className="text-red-500"> Click me! </Button>
