import {getFestivalCards} from "./festival";
import {getRestaurantCards} from "./restaurant";
import {getTouristSpotsResponse} from "./touristSpot";

export const getMainPageResponse = () => {
  return {
    festivals: getFestivalCards(8),
    restaurants: getRestaurantCards(8),
    touristSpots: getTouristSpotsResponse(8),
  };
};
