// mocks/handlers.js
import { rest } from "msw";
import { getMainPageResponse } from "./home";
import { getRestaurants, getRestaurantDetail } from "./restaurant";
import { getFestivalCards, getFestivalDetail } from "./festival";
import { getTouristSpots } from "./touristSpot";

export const handlers = [
  rest.get("/api/search", (req, res, ctx) => {
    const query = req.url.searchParams.get("query");

    if (query) {
      return res(
        ctx.status(200),
        ctx.json({
          results: {
            restaurants: getRestaurants(8),
            festivals: getFestivalCards(8),
            touristSpots: getTouristSpots(8),
          },
        }),
      );
    }

    return res(ctx.status(200), ctx.json({ result: {} }));
  }),

  rest.get("/home", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: getMainPageResponse(),
      }),
    );
  }),

  rest.get("/restaurant/:id", (req, res, ctx) => {
    const id = req.params.id;
    if (getRestaurantDetail(id) != null)
      return res(
        ctx.status(200),
        ctx.json({
          results: getRestaurantDetail(id),
        }),
      );
    else
      return res(
        ctx.status(404),
        ctx.json({
          results: null,
        }),
      );
  }),

  rest.get("/festival/:id", (req, res, ctx) => {
    const id = req.params.id;
    if (getFestivalDetail(id) != null)
      return res(
        ctx.status(200),
        ctx.json({
          results: getFestivalDetail(id),
        }),
      );
    else
      return res(
        ctx.status(404),
        ctx.json({
          results: null,
        }),
      );
  }),

  rest.get("/api/touristSpot/:id", (req, res, ctx) => {
    const id = req.params.id;
    if (getRestaurantDetail(id) != null)
      return res(
        ctx.status(200),
        ctx.json({
          results: getRestaurantDetail(id),
        }),
      );
    else
      return res(
        ctx.status(404),
        ctx.json({
          results: null,
        }),
      );
  }),
];
