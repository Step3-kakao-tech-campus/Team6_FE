import { rest } from "msw";

export const patchReviewHandler = rest.patch(
  "/:type/reviews/:id",
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: {},
      }),
    );
  },
);
