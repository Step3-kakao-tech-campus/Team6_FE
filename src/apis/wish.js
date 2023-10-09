import instance from "./api";

export const wish = async (filter, id, isWished) => {
  const result = await instance.patch(`/api/${filter}/${id}/wish`, {
    isWished,
  });
  return result.data.response;
};
