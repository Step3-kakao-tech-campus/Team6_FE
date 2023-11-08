import { rest } from "msw";
import { getFestivals } from "./festival";
import { getRestaurants } from "./restaurant";
import { getTouristSpots } from "./touristSpot";

export const getSearchHandler = rest.get("/search", (req, res, ctx) => {
  const location = req.url.searchParams.get("location");

  if (location) {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: {
          restaurants: getRestaurants(8),
          festivals: getFestivals(8),
          touristSpots: getTouristSpots(8),
        },
      }),
    );
  }

  return res(ctx.status(200), ctx.json({ result: {} }));
});

export const getSearchRestaurantHandler = rest.get(
  "/search/restaurant",
  (req, res, ctx) => {
    const query = req.url.searchParams.get("query");

    if (query) {
      return res(
        ctx.status(200),
        ctx.json({
          success: true,
          response: getRestaurants(8),
        }),
      );
    }

    return res(ctx.status(200), ctx.json({ result: {} }));
  },
);
