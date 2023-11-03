import instance from "./api";

export const getRestaurantReviewById = async (id) => {
  const result = await instance.get(`/restaurant/reviews/${id}`);
  return result.data.response;
};

export const getFestivalReviewById = async (id) => {
  const result = await instance.get(`/festival/reviews/${id}`);
  return result.data.response;
};

export const getReviewByIdAndType = async (id, type) => {
  if (type === "restaurant") {
    return await getRestaurantReviewById(id);
  } else if (type === "festival") {
    return await getFestivalReviewById(id);
  } else {
    return null;
  }
};
