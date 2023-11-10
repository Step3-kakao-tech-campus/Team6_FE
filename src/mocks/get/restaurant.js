import RESTAURANTS from "../datas/restaurants";
import { rest } from "msw";
import { restaurantAvailable } from "../datas/availableDates";

export const getRestaurants = (length) => {
  const selectedKeys = [
    "id",
    "name",
    "summary",
    "address",
    "averageRating",
    "isWished",
  ];
  const restaurantCard = Object.fromEntries(
    Object.entries(RESTAURANTS[0]).filter(([key, value]) =>
      selectedKeys.includes(key),
    ),
  );
  restaurantCard.image = "https://picsum.photos/200";
  return new Array(length).fill(restaurantCard);
};

export const getRestaurantDetail = (id) => {
  return RESTAURANTS.find((restaurant) => restaurant.id === parseInt(id));
};

export const getRestaurantHandler = rest.get(
  "/restaurant/:id",
  (req, res, ctx) => {
    const id = req.params.id;
    if (getRestaurantDetail(id) != null)
      return res(
        ctx.status(200),
        ctx.json({
          success: true,
          response: getRestaurantDetail(id),
        }),
      );
    else
      return res(
        ctx.status(404),
        ctx.json({
          success: false,
          response: null,
        }),
      );
  },
);

export const getRestaurantCalendarHandler = rest.get(
  "/restaurant/bookings/calendar/:id",
  (req, res, ctx) => {
    const id = req.params.id;
    if (getRestaurantDetail(id) != null)
      return res(
        ctx.status(200),
        ctx.json({
          success: true,
          response: restaurantAvailable,
        }),
      );
  },
);
