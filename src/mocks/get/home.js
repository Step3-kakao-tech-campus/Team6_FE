import { getFestivals } from "./festival";
import { getRestaurants } from "./restaurant";
import { getTouristSpots } from "./touristSpot";
import { rest } from "msw";

export const getMainPageResponse = () => {
  return {
    festivals: getFestivals(8),
    restaurants: getRestaurants(8),
    touristSpots: getTouristSpots(8),
  };
};

export const getHomeHandler = rest.get("/home", (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      success: true,
      response: getMainPageResponse(),
    }),
  );
});
