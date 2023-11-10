import FESTIVALS from "../datas/festivals";
import { rest } from "msw";
import { getRestaurantDetail } from "./restaurant";
import { festivalAvailable } from "../datas/availableDates";

export const getFestivals = (length) => {
  const selectedKeys = [
    "id",
    "name",
    "summary",
    "address",
    "averageRating",
    "isWished",
    "period",
    "price",
  ];
  const festivalCard = Object.fromEntries(
    Object.entries(FESTIVALS[0]).filter(([key, value]) =>
      selectedKeys.includes(key),
    ),
  );
  festivalCard.image = "https://picsum.photos/200";
  return new Array(length).fill(festivalCard);
};

export const getFestivalDetail = (id) => {
  return FESTIVALS.find((festival) => festival.id === parseInt(id));
};

export const getFestivalHandler = rest.get("/festival/:id", (req, res, ctx) => {
  const id = req.params.id;
  if (getFestivalDetail(id) != null)
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: getFestivalDetail(id),
      }),
    );
  else
    return res(
      ctx.status(404),
      ctx.json({
        success: false,
        response: null,
        error: "Festival not found",
      }),
    );
});

export const getFestivalCalendarHandler = rest.get(
  "/festival/bookings/calendar/:id",
  (req, res, ctx) => {
    const id = req.params.id;
    if (getRestaurantDetail(id) != null)
      return res(
        ctx.status(200),
        ctx.json({
          success: true,
          response: festivalAvailable,
        }),
      );
  },
);
