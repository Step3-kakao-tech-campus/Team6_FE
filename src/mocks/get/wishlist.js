import FESTIVALS from "../datas/festivals";
import RESTAURANTS from "../datas/restaurants";
import TOURIST_SPOTS from "../datas/touristSpots";
import { rest } from "msw";

export const getWishlist = (filter) => {
  switch (filter) {
    case "touristSpot":
      return {
        touristSpots: TOURIST_SPOTS.filter((item) => item.isWished),
      };
    case "restaurant":
      return {
        restaurants: RESTAURANTS.filter((item) => item.isWished),
      };
    case "festival":
      return {
        festivals: FESTIVALS.filter((item) => item.isWished),
      };
    default:
      return {
        touristSpots: TOURIST_SPOTS.filter((item) => item.isWished),
        restaurants: RESTAURANTS.filter((item) => item.isWished),
        festivals: FESTIVALS.filter((item) => item.isWished),
      };
  }
};

export const getWishlistHandler = rest.get(
  "/userinfo/wishlist/:filter",
  (req, res, ctx) => {
    const { filter } = req.params;
    const wishlistResponse = getWishlist(filter);

    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: wishlistResponse,
      }),
    );
  },
);
