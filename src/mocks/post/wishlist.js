import { rest } from "msw";

export const postWishHandler = rest.post("/wishlist/:id", (req, res, ctx) => {
  const { id } = req.params;
  return res(
    ctx.status(200),
    ctx.json({
      success: true,
      message: `Wish status updated for ${id}.`,
    }),
  );
});

export const deleteWishHandler = rest.delete(
  "/wishlist/:id",
  (req, res, ctx) => {
    const { id } = req.params;
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        message: `Wish status updated for ${id}.`,
      }),
    );
  },
);
