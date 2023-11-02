import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

const organizeError = (error) => {
  return {
    success: false,
    error: error.response.data.error,
    code: error.response.status,
  };
};

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
    if (error.response.status === 401 || error.response.status === 402) {
      // 401 Unauthorized
      localStorage.removeItem("token");
      alert("login is required.");
      window.location.href = "/login";
    }
    return Promise.reject(organizeError(error));
  },
);

export default instance;
