import { REVIEW_POST_RESPONSE, REVIEWS } from "../datas/reviews";
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

export const postRestaurantReviewHandler = rest.post(
  "/restaurant/reviews",
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        error: null,
        response: REVIEW_POST_RESPONSE,
      }),
    );
  },
);

export const postFestivalReviewHandler = rest.post(
  "/festival/reviews",
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        error: null,
        response: REVIEW_POST_RESPONSE,
      }),
    );
  },
);
