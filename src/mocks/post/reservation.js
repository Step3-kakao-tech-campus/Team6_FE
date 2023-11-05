import { rest } from "msw";
import {
  POST_FESTIVAL_RESERVATION,
  POST_RESTAURANT_RESERVATION,
} from "../datas/postReservation";

export const postRestaurantReservationHandler = rest.post(
  "/restaurant/bookings",
  async (req, res, ctx) => {
    const { restaurantId, date, time, people, message } = req.body;
    console.log("post!", restaurantId, date, time, people, message);
    try {
      return res(
        ctx.status(200),
        ctx.json({
          success: true,
          response: POST_RESTAURANT_RESERVATION,
        }),
      );
    } catch (error) {
      return res(
        ctx.status(404),
        ctx.json({
          success: false,
          response: null,
          error: error,
        }),
      );
    }
  },
);

export const postFestivalReservationHandler = rest.post(
  "/festival/bookings",
  async (req, res, ctx) => {
    try {
      return res(
        ctx.status(200),
        ctx.json({
          success: true,
          response: POST_FESTIVAL_RESERVATION,
        }),
      );
    } catch (error) {
      return res(
        ctx.status(404),
        ctx.json({
          success: false,
          response: null,
          error: error,
        }),
      );
    }
  },
);
