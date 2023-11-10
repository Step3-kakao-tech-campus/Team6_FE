import instance, { instanceFormData } from "./api";

export const getMyReviewById = async (id) => {
  const result = await instance.get(`/userinfo/reviews/${id}`);
  return result.data.response;
};
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

export const organizeModifyReview = (
  placeId,
  rating,
  description,
  file,
  deleteFile,
) => {
  const formData = new FormData();
  formData.append("placeId", placeId);
  formData.append("rating", rating);
  formData.append("description", description);
  formData.append("file", file);
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
  restaurant: modifyRestaurantReview,
  festival: modifyFestivalReview,
  touristSpot: modifyTouristSpotReview,
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

export const getMyReview = async () => {
  const result = await instance.get("/userinfo/reviews");
  return result.data.response;
};

export const deleteReview = async (reviewId) => {
  const {type} = await getMyReviewById(reviewId);
  // console.log(reviewInfo)
  const result = await instance.delete(`/${type}/reviews/${reviewId}`);
  // throw new Error("삭제되었습니다.");
  return result.data.response;
};
