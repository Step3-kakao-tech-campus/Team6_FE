import instance from "./api";

export const wish = async (filter, id, isWished) => {
  console.log(`filter: ${filter}, id: ${id}, isWished: ${isWished}`);
  const result = await instance.patch(`/userinfo/wishlist`, {
    filter,
    id,
    isWished,
  });
  return result.data.response;
};

export const getWishlist = async () => {
  const result = await instance.get(`/userinfo/wishlist`);
  return result.data.response;
};
