import instance from "./api";

export const getReservation = async () => {
  const restaurant = await instance.get("/userinfo/reservation/restaurant");
  const festival = await instance.get("/userinfo/reservation/festival");
  return {
    restaurant: restaurant.data.response,
    festival: festival.data.response,
  };
};

export const reserveFestival = async (festivalId, date, time, headCount) => {
  const response = await instance.post("/festival/bookings", {
    festivalId,
    date,
    time,
    headCount,
  });
  return response.data;
};

/**
 *
 * @param restaurantId {number}
 * @param date {string}
 * @param time {string}
 * @param headCount {number}
 * @param message {string}
 * @returns {Promise<any>}
 */
export const reserveRestaurant = async (
  restaurantId,
  date,
  time,
  headCount,
  message,
) => {
  const response = await instance.post("/restaurant/bookings", {
    restaurantId,
    date,
    time,
    headCount,
    message,
  });
  return response.data;
};
