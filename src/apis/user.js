import instance from "./api";

export const user = async () => {
  const result = await instance.get("/userinfo");
  return result.data.response;
};

export const editUser = async (data) => {
  const result = await instance.patch("/userinfo/edit", data);
  return result.data.response;
};
