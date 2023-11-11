import FOODS from "../datas/foods";
import FOOD from "../datas/food";
import { rest } from "msw";

export const getFoods = () => {
  const selectedKeys = ["id", "name", "image", "category", "summary"];

  return FOODS.map((food) => {
    const foodCard = Object.fromEntries(
      Object.entries(food).filter(([key, value]) => selectedKeys.includes(key)),
    );
    foodCard.image = "https://picsum.photos/200";
    return foodCard;
  });
};

export const getFood = (id) => {
  const selectedKeys = [
    "id",
    "name",
    "category",
    "description",
    "mainImage",
    "foodImage",
    "ingredients",
    "restaurant",
  ];

  const foodItem = FOOD.find((food) => food.id === parseInt(id));
  if (!foodItem) {
    return null; // 해당 id의 음식이 없는 경우
  }
  const food = Object.fromEntries(
    Object.entries(foodItem).filter(([key, value]) =>
      selectedKeys.includes(key),
    ),
  );
  food.mainImage = "https://picsum.photos/205";
  return food;
};

export const searchFoodHandler = rest.get("/foods", (req, res, ctx) => {
  const query = req.url.searchParams.get("query");

  if (query) {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: getFoods(8),
      }),
    );
  }
  return res(ctx.status(200), ctx.json({ result: {} }));
});

export const getFoodHandler = rest.get("/foods/:id", (req, res, ctx) => {
  const id = req.params.id;
  if (getFood(id) != null)
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: getFood(id),
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
});
