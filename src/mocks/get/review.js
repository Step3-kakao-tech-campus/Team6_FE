import { MY_REVIEW, REVIEWS } from "../datas/reviews";
import { rest } from "msw";
import { MYREVIEW } from "../datas/myreview";

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

export const getMyReviewHandler = rest.get(
  "/userinfo/reviews/:id",
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: MY_REVIEW,
      }),
    );
  },
);

export const getMyReviewsHandler = rest.get(
  "/userinfo/reviews",
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: MYREVIEW,
      }),
    );
  },
);
