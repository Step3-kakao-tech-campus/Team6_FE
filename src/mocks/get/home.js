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

export const searchSpotHandler = rest.get("/api/search", (req, res, ctx) => {
    const query = req.url.searchParams.get("query");

    if (query) {
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
})