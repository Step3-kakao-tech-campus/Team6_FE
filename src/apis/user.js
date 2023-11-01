import instance from "./api";

export const user = async () => {
  const result = await instance.get("/userinfo");
  return result.data.response;
};
