import RESTAURANTS from "./datas/restaurants";

export const getRestaurants = (length) => {
  const selectedKeys = [
    "id",
    "name",
    "summary",
    "address",
    "averageScore",
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
