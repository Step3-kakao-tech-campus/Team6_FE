import FESTIVALS from "../datas/festivals";
import RESTAURANTS from "../datas/restaurants";
import TOURIST_SPOTS from "../datas/touristSpots";
import { rest } from "msw";

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

export const getWishlistHandler = rest.get(
  "/userinfo/wishlist",
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

export const postWishHandler = rest.patch(
  "/userinfo/wishlist",
  (req, res, ctx) => {
    const { filter, id, isWished } = req.body;

    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        message: `Wish status updated for ${filter} with ID ${id} to ${isWished}.`,
      }),
    );
  },
);
