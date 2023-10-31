import FOODS from "./datas/foods";

export const getFoods = (length) => {
  const selectedKeys = [
    "id",
    "name",
    "mainImage",
    "category",
    "description",
    "foodImage",
  ];
  const foodCard = Object.fromEntries(
    Object.entries(FOODS[0]).filter(([key, value]) =>
      selectedKeys.includes(key),
    ),
  );
  foodCard.image = "https://picsum.photos/200";
  return new Array(length).fill(foodCard);
};

export const getFoodDetail = (id) => {
  return FOODS.find((food) => food.id === parseInt(id));
};
