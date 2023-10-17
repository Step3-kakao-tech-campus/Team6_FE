import instance from "./api";

const organizeError = (error) => {
  return {
    isSuccess: false,
    error: error.response.status,
    message: error.message,
  };
};

export const getRestaurantById = async (id) => {
  return await instance
    .get(`${id}`)
    .then((response) => {
      return response.data.response;
    })
    .catch((error) => Promise.reject(organizeError(error)));
};

export const getFestivalById = async (id) => {
  return await instance
    .get(`/festival/${id}`)
    .then((response) => {
      return response.data.response;
    })
    .catch((error) => Promise.reject(organizeError(error)));
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
    .catch((error) => Promise.reject(organizeError(error)));
};

export const getCalenderByIdAndType = async (id, type) => {
  return await instance
    .get(`/${type}/bookings/calender/${id}`)
    .then((response) => {
      return response.data.response;
    })
    .catch((error) => {
      return Promise.reject(organizeError(error));
    });
};
