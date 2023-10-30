import FESTIVALS from "./datas/festivals";
import RESTAURANTS from "./datas/restaurants";
import TOURIST_SPOTS from "./datas/touristSpots";

export const getWishlist = () => {
  return {
    data: {
      response: {
        touristSpots: TOURIST_SPOTS.filter((item) => item.isWished),
        restaurants: RESTAURANTS.filter((item) => item.isWished),
        festivals: FESTIVALS.filter((item) => item.isWished),
      },
    },
  };
};
