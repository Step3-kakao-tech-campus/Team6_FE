import instance from "./api";

export const getReservation = async () => {
  const restaurant = await instance.get("/userinfo/reservation/restaurant");
  const festival = await instance.get("/userinfo/reservation/festival");
  return {
    restaurant: restaurant.data.response,
    festival: festival.data.response,
  };
};

export const reserveFestival = async (reserveInfo) => {
  const { festivalId, date, time, headCount } = reserveInfo;
  const response = await instance.post("/festival/bookings", {
    festivalId,
    date,
    time,
    headCount,
  });
  return response.data;
};

export const reserveRestaurant = async (reserveInfo) => {
  const { restaurantId, date, time, headCount, message } = reserveInfo;
  const response = await instance.post("/restaurant/bookings", {
    restaurantId,
    date,
    time,
    headCount,
    message,
  });
  return response.data;
};

export const reserve = {
  restaurant: reserveRestaurant,
  festival: reserveFestival,
};
