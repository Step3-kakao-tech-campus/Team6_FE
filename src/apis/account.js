import instance from "./api";

export const login = (data) => {
  const { email, password } = data;
  return instance.post("/login", {
    email,
    password,
  });
};

export const register = (data) => {
  const { email, password, username } =
    data;
  return instance.post("/register", {
    email,
    password,
    username,
  });
};
