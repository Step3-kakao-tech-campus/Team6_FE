import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) { // 401 Unauthorized
        localStorage.removeItem("token");
      }
      return Promise.reject(error);
    },
);

export default instance;
