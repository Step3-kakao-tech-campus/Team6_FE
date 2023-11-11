import instance, { instanceFormData } from "./api";

export const getMyReviewById = async (id) => {
  const result = await instance.get(`/userinfo/reviews/${id}`);
  return result.data.response;
};
export const getRestaurantReviewById = async (id) => {
  const result = await instance.get(`/reviews/restaurant/${id}`);
  return result.data.response;
};

export const getFestivalReviewById = async (id) => {
  const result = await instance.get(`/reviews/festival/${id}`);
  return result.data.response;
};

export const getTouristSpotReviewById = async (id) => {
  const result = await instance.get(`/reviews/touristSpot/${id}`);
  return result.data.response;
};

export const getReviewByIdAndType = async (id, type) => {
  if (type === "RESTAURANT") {
    return await getRestaurantReviewById(id);
  } else if (type === "FESTIVAL") {
    return await getFestivalReviewById(id);
  } else if (type === "TOURIST_SPOT") {
    return await getTouristSpotReviewById(id);
  }
};

export const organizeReview = (placeId, rating, description, file) => {
  const formData = new FormData();
  formData.append("placeId", placeId);
  formData.append("rating", Math.ceil(rating));
  formData.append("description", description);
  formData.append("image", file);
  return formData;
};

export const organizeModifyReview = (
  placeId,
  rating,
  description,
  file,
  deleteFile,
) => {
  const formData = new FormData();
  formData.append("placeId", placeId);
  formData.append("rating", Math.ceil(rating));
  formData.append("description", description);
  formData.append("image", file);
  formData.append("deleteFile", deleteFile);
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

export const modifyRestaurantReview = async (
  placeId,
  rating,
  description,
  file,
  deleteFile,
) => {
  const result = await instanceFormData.patch(
    `/restaurant/reviews/${placeId}`,
    organizeModifyReview(placeId, rating, description, file, deleteFile),
  );
  return result.data.response;
};

export const modifyFestivalReview = async (
  placeId,
  rating,
  description,
  file,
  deleteFile,
) => {
  const result = await instanceFormData.patch(
    `/festival/reviews/${placeId}`,
    organizeModifyReview(placeId, rating, description, file, deleteFile),
  );
  return result.data.response;
};

export const modifyTouristSpotReview = async (
  placeId,
  rating,
  description,
  file,
  deleteFile,
) => {
  const result = await instanceFormData.patch(
    `/touristSpot/reviews/${placeId}`,
    organizeModifyReview(placeId, rating, description, file, deleteFile),
  );
  return result.data.response;
};

export const modifyReview = {
  RESTAURANT: modifyRestaurantReview,
  FESTIVAL: modifyFestivalReview,
  TOURIST_SPOT: modifyTouristSpotReview,
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
  RESTAURANT: postRestaurantReview,
  FESTIVAL: postFestivalReview,
  TOURIST_SPOT: postTouristSpotReview,
};

export const getIsReviewed = async (placeId, type) => {
  const result = await instance.get(`/userinfo/reviews/${type}/${placeId}`);
  return result.data.response;
};

export const getMyReview = async () => {
  const result = await instance.get("/userinfo/reviews");
  return result.data.response;
};

export const deleteReview = async (reviewId) => {
  const { type } = await getMyReviewById(reviewId);
  const result = await instance.delete(`/${type}/reviews/${reviewId}`);
  return result.data.response;
};
