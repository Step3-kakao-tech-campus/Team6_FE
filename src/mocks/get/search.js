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
  "/search/restaurants",
  (req, res, ctx) => {
    const location = req.url.searchParams.get("location");

    if (location) {
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

export const getSearchFestivalHandler = rest.get(
  "/search/festivals",
  (req, res, ctx) => {
    const location = req.url.searchParams.get("location");

    if (location) {
      return res(
        ctx.status(200),
        ctx.json({
          success: true,
          response: getFestivals(8),
        }),
      );
    }

    return res(ctx.status(200), ctx.json({ result: {} }));
  },
);

export const getSearchTouristSpotHandler = rest.get(
  "/search/touristSpots",
  (req, res, ctx) => {
    const location = req.url.searchParams.get("location");

    if (location) {
      return res(
        ctx.status(200),
        ctx.json({
          success: true,
          response: getTouristSpots(8),
        }),
      );
    }

    return res(ctx.status(200), ctx.json({ result: {} }));
  },
);
