import { getHomeHandler, searchSpotHandler } from "./get/home";
import {
  getRestaurantCalendarHandler,
  getRestaurantHandler,
} from "./get/restaurant";
import { getFestivalCalendarHandler, getFestivalHandler } from "./get/festival";
import {
  getFestivalReviewHandler,
  getRestaurantReviewHandler,
} from "./get/review";
import { getTouristSpotHandler } from "./get/touristSpot";
import { searchFoodHandler, getFoodHandler } from "./get/food";
import { getWishlistHandler, postWishHandler } from "./get/wishlist";
import { getReservationHandler } from "./get/reservation";
import { loginHandler, registerHandler } from "./account/account";

export const handlers = [
  searchSpotHandler,
  getHomeHandler,
  getRestaurantHandler,
  getRestaurantCalendarHandler,
  getFestivalCalendarHandler,
  getFestivalHandler,
  getTouristSpotHandler,
  getRestaurantReviewHandler,
  getFestivalReviewHandler,
  searchFoodHandler,
  getFoodHandler,
  getReservationHandler,
  getWishlistHandler,
  postWishHandler,
  loginHandler,
  registerHandler,
];
