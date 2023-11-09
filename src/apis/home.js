import instance from "./api";

export const getHome = async () => {
  const result = await instance.get("/home");
  return result.data;
};
