import {
  FESTIVAL_RESERVATIONS,
  RESTAURANT_RESERVATIONS,
} from "../datas/reservations";
import { rest } from "msw";

export const getRestaurantReservation = () => {
  return RESTAURANT_RESERVATIONS;
};

export const getFestivalReservation = () => {
  return FESTIVAL_RESERVATIONS;
};

export const getRestaurantReservationHandler = rest.get(
  "/userinfo/reservation/restaurant",
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: getRestaurantReservation(),
      }),
    );
  },
);

export const getFestivalReservationHandler = rest.get(
  "/userinfo/reservation/festival",
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: getFestivalReservation(),
      }),
    );
  },
);
