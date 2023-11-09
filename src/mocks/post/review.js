import { rest } from "msw";
import { REVIEW_POST_RESPONSE } from "../datas/reviews";

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

export const postTouristSpotReviewHandler = rest.post(
  "/touristSpot/reviews",
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
