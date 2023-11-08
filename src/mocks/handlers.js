import { getHomeHandler, searchSpotHandler } from "./get/home";
import {
  getRestaurantCalendarHandler,
  getRestaurantHandler,
} from "./get/restaurant";
import { getFestivalCalendarHandler, getFestivalHandler } from "./get/festival";
import {
  getFestivalReviewHandler,
  getRestaurantReviewHandler,
  getReviewedHandler,
  postFestivalReviewHandler,
  postRestaurantReviewHandler,
} from "./get/review";
import { getTouristSpotHandler } from "./get/touristSpot";
import { searchFoodHandler, getFoodHandler } from "./get/food";
import { getWishlistHandler, postWishHandler } from "./get/wishlist";
import { loginHandler, registerHandler } from "./account/account";
import { editUserHandler, getUserinfoHandler } from "./get/userinfo";
import {
  getFestivalReservationHandler,
  getRestaurantReservationHandler,
} from "./get/reservation";
import {
  postFestivalReservationHandler,
  postRestaurantReservationHandler,
} from "./post/reservation";

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
  getRestaurantReservationHandler,
  getFestivalReservationHandler,
  getWishlistHandler,
  postWishHandler,
  loginHandler,
  registerHandler,
  getUserinfoHandler,
  editUserHandler,
  postFestivalReviewHandler,
  postRestaurantReviewHandler,
  postRestaurantReservationHandler,
  postFestivalReservationHandler,
  getReviewedHandler,
];
