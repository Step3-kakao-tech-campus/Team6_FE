import instance, { instanceFormData } from "./api";

export const getReviewByPage = async (id, page) => {
    const result = await instance.get(`/reviews/${id}?page=${page}`);
    return result.data.response.reviews;
};

export const organizeReview = (placeId, rating, description, file) => {
  const formData = new FormData();
  formData.append("placeId", placeId);
  formData.append("rating", rating);
  formData.append("description", description);
  formData.append("file", file);
  return formData;
};

export const postRestaurantReview = async (
  placeId,
  rating,
  description,
  file,
) => {
  const result = await instanceFormData.post(
    "/restaurant/reviews",
    organizeReview(placeId, rating, description, file),
  );
  return result.data.response;
};

export const postFestivalReview = async (
  placeId,
  rating,
  description,
  file,
) => {
  const result = await instanceFormData.post(
    "/festival/reviews",
    organizeReview(placeId, rating, description, file),
  );
  return result.data.response;
};

export const postTouristSpotReview = async (
  placeId,
  ratings,
  description,
  file,
) => {
  const result = await instanceFormData.post(
    "/touristSpot/reviews",
    organizeReview(placeId, ratings, description, file),
  );
  return result.data.response;
};

export const postReview = {
  restaurant: postRestaurantReview,
  festival: postFestivalReview,
  touristSpot: postTouristSpotReview,
};

export const getIsReviewed = async (placeId, type) => {
  const result = await instance.get(`/userinfo/reviews/${type}/${placeId}`);
  return result.data.response;
};
