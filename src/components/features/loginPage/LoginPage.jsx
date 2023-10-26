import button from "../../atoms/Button";
import Button from "../../atoms/Button";
import InputGroup from "../../molecules/InputGroup";
import { useCallback, useState } from "react";
import useInputGroup from "../../../hooks/useInputGroup";
import {checkConditions} from "./utils";
import {EMAIL_CONDITION, PASSWORD_CONDITION} from "./conditions";

const LoginPage = () => {

  const [email, onChangeEmail, errorMsgEmail, validateEmail] = useInputGroup("", (input) => checkConditions(EMAIL_CONDITION, input));
  const [password, onChangePassword, errorMsgPassword, validatePassword] = useInputGroup("", (input) => checkConditions(PASSWORD_CONDITION, input));
  const [errorMsgFromBE, setErrorMsgFromBE] = useState(null);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    if (validateEmail() && validatePassword()) {
      alert("로그인 성공!");
      //TODO : 로그인 성공 시, 서버에 로그인 요청을 보내고, 성공 시, 메인 페이지로 이동
    }
  }, [validateEmail, validatePassword]);

  // 엔터가 입력되었을 때, onSubmit 함수를 실행
  const onKeyPress = useCallback((e) => {
    if (e.key === "Enter") {
      onSubmit(e);
    }
  }, [onSubmit]);



  return (
    <div
      className={
        "login-page width-flex-layout flex h-screen items-center justify-center p-8"
      }
    >
      <div
        className={
          "login-form-container flex w-full flex-col justify-center gap-4"
        }
      >
        <h1 className={"text-4xl font-bold text-tripKoOrange"}>Login</h1>
        <div className={"login-form w-full"}>
          <InputGroup
            label={"Email"}
            name={"email"}
            type={"text"}
            onChange={onChangeEmail}
            value={email}
            errorMsg={errorMsgEmail}
            onBlur={() => {
              validateEmail();
            }}
            onKeyPress={onKeyPress}
          />
          <InputGroup
            label={"Password"}
            name={"password"}
            type={"password"}
            onChange={onChangePassword}
            value={password}
            errorMsg={errorMsgPassword}
            onBlur={() => {
              validatePassword();
            }}
            onKeyPress={onKeyPress}
          />
        </div>
        {errorMsgFromBE && (
          <div className={"error-backend error-box"}>{errorMsgFromBE}</div>
        )}
        <Button
          as={button}
          className="login-button w-full rounded-full bg-tripKoOrange p-2 text-xl font-bold text-white"
          onClick={onSubmit}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;

//
