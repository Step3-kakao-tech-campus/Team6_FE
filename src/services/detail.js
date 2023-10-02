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
      return {
        isSuccess: true,
        result: response.data.results,
      };
    })
    .catch(error => Promise.reject(
        organizeError(error)
    ));
};
