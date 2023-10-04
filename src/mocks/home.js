import { getFestivalCards } from "./festival";
import { getRestaurantCards } from "./restaurant";
import { getTouristSpotCards } from "./touristSpot";

export const getMainPageResponse = () => {
  return {
    festivals: getFestivalCards(8),
    restaurants: getRestaurantCards(8),
    touristSpots: getTouristSpotCards(8),
  };
};
