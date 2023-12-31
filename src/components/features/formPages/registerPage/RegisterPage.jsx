import button from "../../../atoms/Button";
import Button from "../../../atoms/Button";
import InputGroup from "../../../molecules/InputGroup";
import { useCallback, useState } from "react";
import useInputGroup from "../../../../hooks/useInputGroup";
import { checkConditions } from "../utils";
import { register } from "../../../../apis/account";
import {
  EMAIL_CONDITION,
  NAME_CONDITION,
  REGISTER_PASSWORD_CONDITION,
} from "../constraints";
import ErrorBox from "../../../atoms/ErrorBox";

const RegisterPage = () => {
  const [email, onChangeEmail, errorMsgEmail, validateEmail] = useInputGroup(
    "",
    (input) => checkConditions(EMAIL_CONDITION, input),
  );
  const [password, onChangePassword, errorMsgPassword, validatePassword] =
    useInputGroup("", (input) =>
      checkConditions(REGISTER_PASSWORD_CONDITION, input),
    );
  const [
    passwordConfirm,
    onChangePasswordConfirm,
    errorMsgPasswordConfirm,
    ,
    setErrorMsgPasswordConfirm,
  ] = useInputGroup("", null);
  const [username, onChangeUsername, errorMsgUsername, validateUsername] =
    useInputGroup("", (input, password) =>
      checkConditions(NAME_CONDITION, input, password),
    );

  const [errorMsgFromBE, setErrorMsgFromBE] = useState(null);

  const validatePasswordConfirm = useCallback(
    (password, passwordConfirm) => {
      if (password !== passwordConfirm) {
        setErrorMsgPasswordConfirm("password does not match");
        return false;
      } else {
        setErrorMsgPasswordConfirm("");
        return true;
      }
    },
    [setErrorMsgPasswordConfirm],
  );

  const allInputValid = useCallback(() => {
    return (
      validateEmail() &&
      validatePassword() &&
      validatePasswordConfirm() &&
      validateUsername()
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateEmail, validatePassword, validateUsername]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (allInputValid()) {
        register({
          email: email,
          password: password,
          username: username,
        })
          .then((res) => {
            alert("you have successfully registered, please log in.");
            window.location.href = "/login";
          })
          .catch((err) => {
            setErrorMsgFromBE(err.response.error.message);
          });
      }
    },
    [allInputValid, email, password, username],
  );

  // 엔터가 입력되었을 때, onSubmit 함수를 실행
  const onKeyPress = useCallback(
    (e) => {
      if (e.key === "Enter") {
        onSubmit(e);
      }
    },
    [onSubmit],
  );

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
        <h1 className={"text-4xl font-bold text-tripKoOrange"}>Sign Up</h1>
        <form className={"login-form w-full "}>
          <InputGroup
            label={"Email"}
            name={"email"}
            type={"text"}
            onChange={onChangeEmail}
            value={email}
            errorMsg={errorMsgEmail}
            onBlur={validateEmail}
            onKeyPress={onKeyPress}
          />
          <InputGroup
            label={"Password"}
            name={"password"}
            type={"password"}
            onChange={onChangePassword}
            value={password}
            errorMsg={errorMsgPassword}
            onBlur={validatePassword}
            onKeyPress={onKeyPress}
          />
          <InputGroup
            label={"Password Confirm"}
            name={"passwordConfirm"}
            type={"password"}
            onChange={onChangePasswordConfirm}
            value={passwordConfirm}
            errorMsg={errorMsgPasswordConfirm}
            onBlur={() => validatePasswordConfirm(password, passwordConfirm)}
            onKeyPress={onKeyPress}
          />
          <InputGroup
            label={"Username"}
            name={"username"}
            type={"text"}
            onChange={onChangeUsername}
            value={username}
            errorMsg={errorMsgUsername}
            onBlur={validateUsername}
            onKeyPress={onKeyPress}
          />
        </form>
        {errorMsgFromBE && (
          <ErrorBox>{errorMsgFromBE}</ErrorBox>
        )}
        <Button
          as={button}
          className="login-button w-full rounded-full bg-tripKoOrange p-2 text-xl font-bold text-white"
          onClick={onSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default RegisterPage;

//
