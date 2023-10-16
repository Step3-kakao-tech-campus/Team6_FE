// 다형성을 가진 버튼 컴포넌트
const Button = ({ as: Component = "button", onClick, children, ...rest }) => {
  return (
    <Component onClick={onClick} {...rest}>
      {children}
    </Component>
  );
};

export default Button;

{
  /* <Button onClick={() => alert('Button clicked!')}>Click Me</Button> */
}

{
  /* <Button as="a" href="https://example.com">Visit Example</Button> */
}

{
  /* <Button as="div" onClick={() => alert('Div clicked!')}>Click Me</Button> */
}
