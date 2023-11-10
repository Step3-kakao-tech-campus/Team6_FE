import instance from "./api";

export const getRestaurantById = async (id) => {
  return await instance
    .get(`/restaurant/${id}`)
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
  try {
    const response = await instance.get(`/foods/${id}`);

    // 서버 응답에서 success 상태를 확인
    if (response.data.success === false) {
      throw new Error(response.data.message || "Food details fetch failed");
    }

    return {
      isSuccess: true,
      result: response.data.response,
    };
  } catch (error) {
    // 에러 메시지를 포함하여 에러를 다시 throw
    if (error.code === 404) {
      alert("Cannot find food information.");
      window.history.back();
    }
    throw new Error(error.response?.data?.message || error.message);
  }
};

export const getCalenderByIdAndType = async (id, type) => {
  return await instance
    .get(`/${type}/bookings/calendar/${id}`)
    .then((response) => response.data.response)
    .catch((error) => Promise.reject(error));
};
