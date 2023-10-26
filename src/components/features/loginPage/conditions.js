export const EMAIL_CONDITION = [
  {
    condition: (email) => {
      return email.length > 0;
    },
    message: "Email is required.",
  },
  {
    condition: (email) => {
      const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
      return emailRegex.test(email);
    },
    message: "Email is not valid.",
  },
];

export const PASSWORD_CONDITION = [
  {
    condition: (password) => {
      return password.length > 0;
    },
    message: "Password is required.",
  },
];
