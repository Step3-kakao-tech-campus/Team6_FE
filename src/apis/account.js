import instance from "./api";

export const login = async (data) => {
  const { id, password } = data;
  return instance.post("/login", {
    id,
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
