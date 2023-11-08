import TOURIST_SPOTS from "../datas/touristSpots";
import { rest } from "msw";
import { getRestaurantDetail } from "./restaurant";

export const getTouristSpots = (length) => {
  const selectedKeys = ["id", "name", "summary", "address", "isWished"];
  const touristSpot = Object.fromEntries(
    Object.entries(TOURIST_SPOTS[0]).filter(([key, value]) =>
      selectedKeys.includes(key),
    ),
  );
  touristSpot.image = "https://picsum.photos/200";
  return new Array(length).fill(touristSpot);
};

export const getTouristSpotDetail = (id) => {
  return TOURIST_SPOTS.find((restaurant) => restaurant.id === parseInt(id));
};

export const getTouristSpotHandler = rest.get(
  "/api/touristSpot/:id",
  (req, res, ctx) => {
    const id = req.params.id;
    if (getRestaurantDetail(id) != null)
      return res(
        ctx.status(200),
        ctx.json({
          success: true,
          response: getRestaurantDetail(id),
        }),
      );
    else
      return res(
        ctx.status(404),
        ctx.json({
          response: null,
        }),
      );
  },
);
