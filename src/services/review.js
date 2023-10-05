import instance from "./api";


export const getRestaurantReviewById = async (id) => {
    const result = await instance.get(`/restaurant/reviews/${id}`);
    return result.data.response;
};
