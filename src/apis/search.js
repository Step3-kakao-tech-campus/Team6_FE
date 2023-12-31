import instance from "./api";

export const search = async (query) => {
  const result = await instance.get(`/api/search?query=${query}`);
  return result.data.response;
};

export const foodSearch = async (query) => {
  const result = await instance.get(`/api/search/food?query=${query}`);
  return result.data.response;
};
