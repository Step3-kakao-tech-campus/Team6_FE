import instance from "./api";

export const login = async (data) => {
  const { email, password } = data;
  const result = await instance.post("/login", {
    email,
    password,
  }).then(
    (response) => {
        localStorage.setItem("token", response.headers.token);
        return response.data.response;
    }
  ).catch(
    (error) => {
      return Promise.reject(error.error);
    }
  )
};

export const register = async (data) => {
  return await instance.post("/register", data);
};
