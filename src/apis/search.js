import instance from "./api";

export const search = async (query) => {
  try {
    const result = await instance.get(`/api/search?query=${query}`);
    return result.data.response;
  } catch (error) {
    console.error("Error performing search:", error);
  }
};
