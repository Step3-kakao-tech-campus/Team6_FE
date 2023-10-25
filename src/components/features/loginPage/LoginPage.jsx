import PageTitle from "../../atoms/PageTitle";
import button from "../../atoms/Button";
import Button from "../../atoms/Button";
import InputGroup from "../../molecules/InputGroup";

const LoginPage = () => {
  return (
    <div className={"login-page width-flex-layout flex h-screen items-center justify-center p-8"}>
      <div className={"login-form-container flex flex-col justify-center gap-4 w-full"}>
        <PageTitle title={"Login"} />
        <div className={"login-form w-full"}>
          <InputGroup label={"Email"} name={"email"} type={"email"} />
          <InputGroup label={"Password"} name={"password"} type={"password"} />
        </div>
        <Button
          as={button}
          className="login-button w-full rounded-full bg-tripKoOrange p-2 text-xl font-bold text-white"
          type="submit"
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
