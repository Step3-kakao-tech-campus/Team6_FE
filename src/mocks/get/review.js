import { REVIEWS } from "../datas/reviews";
import { rest } from "msw";

export const getReviews = (length) => {
  if (typeof length !== "number") {
    return {};
  }
  return REVIEWS[0];
};

export const getReviewHandler = rest.get("/reviews/:id", (req, res, ctx) => {
  const page = req.url.searchParams.get("page");
  if (page < 5) {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: REVIEWS,
      }),
    );
  }
  return res(
    ctx.status(200),
    ctx.json({
      success: true,
      response: {
        reviews: [],
        averageRating: 0,
      },
    }),
  );
});

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
