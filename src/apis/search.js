import instance from "./api";

export const search = async (location) => {
  const result = await instance.get(`/search?location=${location}`);
  return result.data.response;
};

export const restaurantSearch = async (location) => {
  const result = await instance.get(`/search/restaurants?location=${location}`);
  return result.data.response;
};

export const festivalSearch = async (location) => {
  const result = await instance.get(`/search/festivals?location=${location}`);
  return result.data.response;
};

export const touristSpotSearch = async (location) => {
  const result = await instance.get(
    `/search/touristSpots?location=${location}`,
  );
  return result.data.response;
};

export const foodSearch = async (query) => {
  const result = await instance.get(`/foods?query=${query}`);
  return result.data.response;
};
