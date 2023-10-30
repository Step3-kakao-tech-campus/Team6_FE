/**
 * email과 password의 조건들을 정의합니다. 조건에 맞지 않을 경우, message를 반환합니다. 모든 조건은 위에서 부터 검사하여 가장 먼저 조건에 맞지 않는 message를 반환합니다.
 * @type {[{condition: (function(*): boolean), message: string},{condition: (function(*): boolean), message: string}]}
 */
export const EMAIL_CONDITION = [
  {
    condition: (email) => {
      return email.length > 0;
    },
    message: "required.",
  },
  {
    condition: (email) => {
      const emailRegex = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
      return emailRegex.test(email);
    },
    message: "Email is not valid.",
  },
];

export const LOGIN_PASSWORD_CONDITION = [
  {
    condition: (password) => {
      return password.length > 0;
    },
    message: "required.",
  },
];

export const REGISTER_PASSWORD_CONDITION = [
  {
    condition: (password) => {
      return password.length > 0;
    },
    message: "required.",
  },
  {
    condition: (password) => {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      // 8자리 이상, 영문자와 숫자가 적어도 1개 이상씩 포함되어야 합니다.
      return passwordRegex.test(password);
    },
    message:
      "Password must be at least 8 characters long and contain at least one letter and one number.",
  },
];

export const NAME_CONDITION = [
  {
    condition: (name) => {
      return name.length > 0;
    },
    message: "required.",
  },
  {
    condition: (name) => {
      const nameRegex = /^[a-zA-Z]+$/;
      return nameRegex.test(name);
    },
    message: "Name must contain at least 1 letter.",
  },
];

export const NICKNAME_CONDITION = [
  {
    condition: (nickname) => {
      return nickname.length > 0;
    },
    message: "required.",
  },
  {
    condition: (nickname) => {
      const nicknameRegex = /^(?=.*[a-zA-Z])[a-zA-Z\d]+$/;
      return nicknameRegex.test(nickname);
    },
    message:
      "Nickname must be at least 1 characters long and contain at least one letter.",
  },
];

export const PASSWORD_CONFIRM_CONDITION = [
  {
    condition: (passwordConfirm) => {
      return passwordConfirm.length > 0;
    },
    message: "required.",
  },
  {
    condition: (passwordConfirm, password) => {
      return passwordConfirm === password;
    },
  },
];
