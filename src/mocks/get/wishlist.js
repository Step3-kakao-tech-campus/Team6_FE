import WISHLIST from "../datas/wishlist";
import { rest } from "msw";

export const getRestaurantWishlistHandler = rest.get(
  "/userinfo/wishlist/restaurants",
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: WISHLIST,
      }),
    );
  },
);

export const getFestivalWishlistHandler = rest.get(
  "/userinfo/wishlist/festivals",
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: WISHLIST,
      }),
    );
  },
);

export const getTouristSpotWishlistHandler = rest.get(
  "/userinfo/wishlist/touristSpots",
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: WISHLIST,
      }),
    );
  },
);
