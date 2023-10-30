import instance from "./api";

export const wish = async (filter, id, isWished) => {
  const result = await instance.patch(`/userinfo/wish`, {
    filter,
    id,
    isWished,
  });
  return result.data.response;
};
