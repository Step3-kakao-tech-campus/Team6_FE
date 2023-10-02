// mocks/handlers.js
import { rest } from "msw";
import { getMainPageResponse } from "./home";
import { getRestaurantCards, getRestaurantDetail } from "./restaurant";
import { getFestivalCards, getFestivalDetail } from "./festival";

export const handlers = [
  rest.get("/api/search", (req, res, ctx) => {
    const query = req.url.searchParams.get("query");

    if (query) {
      return res(
        ctx.status(200),
        ctx.json({
          results: {
            restaurants: getRestaurantCards(8),
            festivals: getFestivalCards(8),
            touristSpot: getRestaurantCards(8),
          },
        }),
      );
    }

    return res(ctx.status(200), ctx.json({ result: {} }));
  }),

  rest.get("/api/home", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: getMainPageResponse(),
      }),
    );
  }),

  rest.get("/api/restaurant/:id", (req, res, ctx) => {
    const id = req.params.id;
    return res(
      ctx.status(200),
      ctx.json({
        results: getRestaurantDetail(id),
      }),
    );
  }),

  rest.get("/api/festival/:id", (req, res, ctx) => {
    const id = req.params.id;
    return res(
      ctx.status(200),
      ctx.json({
        results: getRestaurantDetail(id),
      }),
    );
  }),

  rest.get("/api/touristSpot/:id", (req, res, ctx) => {
    const id = req.params.id;
    return res(
      ctx.status(200),
      ctx.json({
        results: getRestaurantDetail(id),
      }),
    );
  }),
];
