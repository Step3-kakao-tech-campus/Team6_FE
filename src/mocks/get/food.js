import FOODS from "../datas/foods";
import { rest } from "msw";

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

export const searchFoodHandler = rest.get("/food", (req, res, ctx) => {
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

export const getFoodHandler = rest.get("/food/:id", (req, res, ctx) => {
  console.log(req.params);

  const id = req.params.id;
  if (getFoods(id) != null)
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: getFoodDetail(id),
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
