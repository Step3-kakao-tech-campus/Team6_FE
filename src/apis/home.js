import instance from "./api";

export const getHome = async () => {
  const result = await instance.get("/home");
  console.log(result.data);
  return result.data;
};
