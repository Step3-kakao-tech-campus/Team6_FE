import instance from "./api";

// export const wish = async (filter, id, isWished) => {
//   return await instance
//     .patch(`/userinfo/wishlist`, {
//       filter,
//       id,
//       isWished,
//     })
//     .then((response) => {
//       return {
//         isSuccess: true,
//         result: response.data.response,
//       };
//     })
//     .catch((error) => Promise.reject(error));
// };

export const addWish = async (id) => {
  return await instance
    .post(`/wishlist/${id}`)
    .then((response) => ({
      isSuccess: true,
      message: response.data.message,
    }))
    .catch((error) => Promise.reject(error));
};

export const deleteWish = async (id) => {
  return await instance
    .delete(`/wishlist/${id}`)
    .then((response) => ({
      isSuccess: true,
      message: response.data.message,
    }))
    .catch((error) => Promise.reject(error));
};

export const getAllWishlist = async () => {
  return await instance
    .get(`/userinfo/wishlist/all`)
    .then((response) => {
      return {
        isSuccess: true,
        result: response.data.response,
      };
    })
    .catch((error) => Promise.reject(error));
};

export const getRestaurantWishlist = async () => {
  return await instance
    .get(`/userinfo/wishlist/restaurant`)
    .then((response) => ({
      isSuccess: true,
      result: response.data.response,
    }))
    .catch((error) => Promise.reject(error));
};

export const getFestivalWishlist = async () => {
  return await instance
    .get(`/userinfo/wishlist/festival`)
    .then((response) => ({
      isSuccess: true,
      result: response.data.response,
    }))
    .catch((error) => Promise.reject(error));
};

export const getTouristSpotWishlist = async () => {
  return await instance
    .get(`/userinfo/wishlist/touristSpot`)
    .then((response) => ({
      isSuccess: true,
      result: response.data.response,
    }))
    .catch((error) => Promise.reject(error));
};
