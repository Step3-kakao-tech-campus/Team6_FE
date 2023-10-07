import { getFestivals } from "./festival";
import { getRestaurants } from "./restaurant";
import { getTouristSpots } from "./touristSpot";

export const getMainPageResponse = () => {
  return {
    festivals: getFestivals(8),
    restaurants: getRestaurants(8),
    touristSpots: getTouristSpots(8),
  };
};
