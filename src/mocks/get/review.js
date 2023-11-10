import { MY_REVIEW, REVIEWS } from "../datas/reviews";
import { rest } from "msw";
import { MYREVIEW } from "../datas/myreview";

export const getReviews = (length) => {
  return REVIEWS
};

export const getRestaurantReviewHandler = rest.get(
  "/reviews/restaurant/:id",
  (req, res, ctx) => {
    // const id = req.params.id;
    // if (getRestaurantDetail(id) != null)
      return res(
        ctx.status(200),
        ctx.json({
          success: true,
          response: getReviews(8),
        }),
      );
    // else
    //   return res(
    //     ctx.status(404),
    //     ctx.json({
    //       success: false,
    //       response: null,
    //     }),
    //   );
  },
);

export const getFestivalReviewHandler = rest.get(
  "/reviews/festival/:id",
  (req, res, ctx) => {
    // const id = req.params.id;
    // if (getFestivalDetail(id) != null)
      return res(
        ctx.status(200),
        ctx.json({
          success: true,
          response: getReviews(8),
        }),
      );
    // else
    //   return res(
    //     ctx.status(404),
    //     ctx.json({
    //       success: false,
    //       response: null,
    //     }),
    //   );
  },
);

export const getTouristSpotReviewHandler = rest.get(
    "/reviews/touristSpot/:id",
    (req, res, ctx) => {
        // const id = req.params.id;
        // if (getFestivalDetail(id) != null)
            return res(
                ctx.status(200),
                ctx.json({
                    success: true,
                    response: getReviews(8),
                }),
            );
        // else
        //     return res(
        //         ctx.status(404),
        //         ctx.json({
        //             success: false,
        //             response: null,
        //         }),
        //     );
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
