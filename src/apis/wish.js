import instance from "./api";

export const addWish = async (id) => {
  try {
    const response = await instance.post(`/wishlist/${id}`);
    return {
      success: true,
      message: response.data.message,
    };
  } catch (error) {
    const status = error.response?.status || 500;
    const message =
      error.response?.data?.message || "알 수 없는 오류가 발생했습니다.";

    return {
      success: false,
      status,
      message,
    };
  }
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
    .get(`/userinfo/wishlist/restaurants`)
    .then((response) => ({
      isSuccess: true,
      result: response.data.response,
    }))
    .catch((error) => Promise.reject(error));
};

export const getFestivalWishlist = async () => {
  return await instance
    .get(`/userinfo/wishlist/festivals`)
    .then((response) => ({
      isSuccess: true,
      result: response.data.response,
    }))
    .catch((error) => Promise.reject(error));
};

export const getTouristSpotWishlist = async () => {
  return await instance
    .get(`/userinfo/wishlist/touristSpots`)
    .then((response) => ({
      isSuccess: true,
      result: response.data.response,
    }))
    .catch((error) => Promise.reject(error));
};
