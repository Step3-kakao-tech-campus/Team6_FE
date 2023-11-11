import button from "../../../atoms/Button";
import Button from "../../../atoms/Button";
import InputGroup from "../../../molecules/InputGroup";
import { useCallback, useState } from "react";
import useInputGroup from "../../../../hooks/useInputGroup";
import { checkConditions } from "../utils";
import { REQUIRED_CONDITION } from "../constraints";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../../apis/account";
import { useDispatch } from "react-redux";
import { reducerLogin } from "../../../../store/slice/userSlice";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [id, onChangeId, errorMsgId, validateId] = useInputGroup("", (input) =>
    checkConditions([REQUIRED_CONDITION], input),
  );
  const [password, onChangePassword, errorMsgPassword, validatePassword] =
    useInputGroup("", (input) => checkConditions([REQUIRED_CONDITION], input));
  const [errorMsgFromBE, setErrorMsgFromBE] = useState(null);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (validateId() && validatePassword()) {
        login({
          memberId: id,
          password: password,
        })
          .then((res) => {
            dispatch(reducerLogin(id));
            window.location.href = "/";
          })
          .catch((err) => {
            if (err.message) setErrorMsgFromBE(err.message);
            else {
              setErrorMsgFromBE("Unknown error");
            }
          });
      }
    },
    [validateId, validatePassword, id, password, dispatch],
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
        "login-page width-flex-layout flex h-screen flex-col items-center justify-center p-8"
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
            label={"ID"}
            name={"ID"}
            type={"text"}
            onChange={onChangeId}
            value={id}
            errorMsg={errorMsgId}
            onBlur={validateId}
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
        </div>
        {errorMsgFromBE && (
          <div className={"error-backend error-box"}>{errorMsgFromBE}</div>
        )}
        <Button
          as={button}
          className="login-button w-full rounded-full bg-tripKoOrange p-2 text-xl font-bold text-white"
          onClick={onSubmit}
          aria-label="login-button"
        >
          Login
        </Button>
      </div>
      <div
        className={
          "additional-links flex items-center justify-center gap-2 text-lg font-bold"
        }
      >
        Don't have an account?
        <Link to={"/register"} className={"text-tripKoOrange"}>
          sign up
        </Link>
      </div>
      <div
        className={
          "additional-links flex items-center justify-center gap-2 text-lg font-bold"
        }
      >
        <div
          className={"flex rounded-full px-8 py-2 shadow"}
          onClick={() => {
            navigate("/oauth2/authorization/google");
          }}
        >
          <FcGoogle size={30} />
          Login with Google
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

//
