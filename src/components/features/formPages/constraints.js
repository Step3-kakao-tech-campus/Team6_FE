export const REQUIRED_CONDITION = {
  condition: (value) => {
    return value.length > 0;
  },
  message: "required.",
};

/**
 * email과 password의 조건들을 정의합니다. 조건에 맞지 않을 경우, message를 반환합니다. 모든 조건은 위에서 부터 검사하여 가장 먼저 조건에 맞지 않는 message를 반환합니다.
 * @type {[{condition: (function(*): boolean), message: string},{condition: (function(*): boolean), message: string}]}
 */
export const EMAIL_CONDITION = [
  REQUIRED_CONDITION,
  {
    condition: (email) => {
      const emailRegex = new RegExp(
        "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
      );
      return emailRegex.test(email);
    },
    message: "Please enter a valid email address",
  },
];

export const ID_CONDITION = [
  REQUIRED_CONDITION,
  {
    condition: (id) => {
      // 숫자와 영문을 포함한 8~20자리
      const idRegex = new RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,20}$");
      return idRegex.test(id);
    },
    message:
      "at least 6 characters long and contain at least one letter and one number.",
  },
];
export const PASSWORD_CONDITION = [
  REQUIRED_CONDITION,
  {
    condition: (password) => {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      return passwordRegex.test(password);
    },
    message:
      "at least 8 characters long and contain at least one letter and one number.",
  },
];

export const NAME_CONDITION = [
  REQUIRED_CONDITION,
  {
    condition: (name) => {
      const nameRegex = /^[a-zA-Z]+$/;
      return nameRegex.test(name);
    },
    message: "Name must contain at least 1 letter.",
  },
];

export const NICKNAME_CONDITION = [
  REQUIRED_CONDITION,
  {
    condition: (nickname) => {
      const nicknameRegex = new RegExp("^[a-zA-Z0-9]{4,20}$");
      return nicknameRegex.test(nickname);
    },
    message:
      "Nickname must be at least 4 characters long.",
  },
];

export const PASSWORD_CONFIRM_CONDITION = [
  REQUIRED_CONDITION,
  {
    condition: (passwordConfirm, password) => {
      return passwordConfirm === password;
    },
  },
];
