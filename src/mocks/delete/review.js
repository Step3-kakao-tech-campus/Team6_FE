import { rest } from "msw";

export const deleteReviewHandler = rest.delete(
  `/restaurant/reviews/:id`,
  (req, res, ctx) => {
    const id = req.params.id;
    const success = true;
    if (success === false)
      return res(
        ctx.status(404),
        ctx.json({
          success: false,
          error: "Review not found",
          response: null,
        }),
      );
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        error: null,
        response: {
          message: `delete review id : ${id}`,
        },
      }),
    );
  },
);
