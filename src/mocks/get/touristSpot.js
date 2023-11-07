import TOURIST_SPOTS from "../datas/touristSpots";
import { rest } from "msw";

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

export const getTouristSpotHandler = rest.get(
  "/touristSpot/:id",
  (req, res, ctx) => {

    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: TOURIST_SPOTS[0],
      }),
    );
  },
);
