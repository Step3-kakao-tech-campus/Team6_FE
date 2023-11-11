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
