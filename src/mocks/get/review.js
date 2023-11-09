import { REVIEWS } from "../datas/reviews";
import { rest } from "msw";
import { getRestaurantDetail } from "./restaurant";
import { getFestivalDetail } from "./festival";

export const getReviews = (length) => {
  if (typeof length !== "number") {
    return {};
  }
  return REVIEWS[0];
};

export const getRestaurantReviewHandler = rest.get(
  "/restaurant/reviews/:id",
  (req, res, ctx) => {
    const id = req.params.id;
    if (getRestaurantDetail(id) != null)
      return res(
        ctx.status(200),
        ctx.json({
          success: true,
          response: getReviews(8),
        }),
      );
    else
      return res(
        ctx.status(404),
        ctx.json({
          success: false,
          response: null,
        }),
      );
  },
);

export const getFestivalReviewHandler = rest.get(
  "/festival/reviews/:id",
  (req, res, ctx) => {
    const id = req.params.id;
    if (getFestivalDetail(id) != null)
      return res(
        ctx.status(200),
        ctx.json({
          success: true,
          response: getReviews(8),
        }),
      );
    else
      return res(
        ctx.status(404),
        ctx.json({
          success: false,
          response: null,
        }),
      );
  },
);

export const getTouristSpotReviewHandler = rest.get(
  "/touristSpot/reviews/:id",
  (req, res, ctx) => {
    const id = req.params.id;
    if (getFestivalDetail(id) != null)
      return res(
        ctx.status(200),
        ctx.json({
          success: true,
          response: getReviews(8),
        }),
      );
    else
      return res(
        ctx.status(404),
        ctx.json({
          success: false,
          response: null,
        }),
      );
  },
);

export const getReviewedHandler = rest.get(
  "/userinfo/reviews/:type/:id",
  (req, res, ctx) => {
    const reviewed = Math.random() >= 0.5;
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: {
          reviewed: reviewed,
          review: reviewed ? 1 : null,
        },
      }),
    );
  },
);
