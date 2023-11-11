import { getHomeHandler } from "./get/home";
import {
  getSearchFestivalHandler,
  getSearchHandler,
  getSearchRestaurantHandler,
  getSearchTouristSpotHandler,
} from "./get/search";
import {
  getRestaurantCalendarHandler,
  getRestaurantHandler,
} from "./get/restaurant";
import { getFestivalCalendarHandler, getFestivalHandler } from "./get/festival";
import {
  getReviewedHandler,
  getMyReviewHandler,
  getMyReviewsHandler,
  getFestivalReviewHandler,
  getRestaurantReviewHandler,
  getTouristSpotReviewHandler,
} from "./get/review";
import { getTouristSpotHandler } from "./get/touristSpot";
import { searchFoodHandler, getFoodHandler } from "./get/food";
import {
  getFestivalWishlistHandler,
  getRestaurantWishlistHandler,
  getTouristSpotWishlistHandler,
} from "./get/wishlist";
import { loginHandler, registerHandler } from "./account/account";
import { getUserinfoHandler } from "./get/userinfo";
import {editUserHandler, uploadUserImageHandler} from "./patch/userinfo";
import {
  getFestivalReservationHandler,
  getRestaurantReservationHandler,
} from "./get/reservation";
import {
  postFestivalReservationHandler,
  postRestaurantReservationHandler,
} from "./post/reservation";
import {
  postFestivalReviewHandler,
  postRestaurantReviewHandler,
  postTouristSpotReviewHandler,
} from "./post/review";
import { deleteWishHandler, postWishHandler } from "./post/wishlist";
import { patchReviewHandler } from "./patch/review";
import { deleteReviewHandler } from "./delete/review";

export const handlers = [
  // Search
  getSearchHandler,
  getSearchRestaurantHandler,
  getSearchFestivalHandler,
  getSearchTouristSpotHandler,
  searchFoodHandler,

  getHomeHandler,

  //detail
  getRestaurantHandler,
  getFestivalHandler,
  getTouristSpotHandler,
  getFoodHandler,

  getRestaurantWishlistHandler,
  getFestivalWishlistHandler,
  getTouristSpotWishlistHandler,

  //wishlist
  postWishHandler,
  deleteWishHandler,

  //account
  loginHandler,
  registerHandler,
  getUserinfoHandler,
  editUserHandler,
  uploadUserImageHandler,

  // Calendar
  getRestaurantCalendarHandler,
  getFestivalCalendarHandler,

  // Reservations
  postRestaurantReservationHandler,
  getRestaurantReservationHandler,
  postFestivalReservationHandler,
  getFestivalReservationHandler,

  // Reviews
  getReviewedHandler,
  getMyReviewHandler,
  getMyReviewsHandler,

  getFestivalReviewHandler,
  getRestaurantReviewHandler,
  getTouristSpotReviewHandler,

  postRestaurantReviewHandler,
  postFestivalReviewHandler,
  postTouristSpotReviewHandler,

  deleteReviewHandler,

  patchReviewHandler,
];
