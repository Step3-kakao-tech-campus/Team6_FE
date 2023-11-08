import instance from "./api";

export const getRestaurantById = async (id) => {
  return await instance
    .get(`${id}`)
    .then((response) => response.data.response)
    .catch((error) => Promise.reject(error));
};

export const getFestivalById = async (id) => {
  return await instance
    .get(`/festival/${id}`)
    .then((response) => response.data.response)
    .catch((error) => Promise.reject(error));
};

export const getSpotById = async (id) => {
  return await instance
    .get(`/touristSpot/${id}`)
    .then((response) => response.data.response)
    .catch((error) => Promise.reject(error));
};

export const getFoodById = async (id) => {
  return await instance
    .get(`/food/${id}`)
    .then((response) => {
      return {
        isSuccess: true,
        result: response.data.response,
      };
    })
    .catch((error) => Promise.reject(error));
};

export const getCalenderByIdAndType = async (id, type) => {
  return await instance
    .get(`/${type}/bookings/calender/${id}`)
    .then((response) => response.data.response)
    .catch((error) => Promise.reject(error));
};
