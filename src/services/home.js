import instance from "./api";

export const getHome = async () => {
  const result = await instance.get("api/home");
  return result.data.results;
};
