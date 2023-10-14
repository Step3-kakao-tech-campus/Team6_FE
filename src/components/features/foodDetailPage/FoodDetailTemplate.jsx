import PageTitleBar from "../../molecules/PageTitleBar";
import SectionTitle from "../../atoms/SectionTitle";
import StarRating from "../../atoms/StarRating";

const FoodDetailTemplate = ({ food }) => {
  const { name, image, description, ingredients, restaurant } =
    food?.result || {};

  return (
    <div className="food-detail-page w-full">
      <PageTitleBar name={name} />
      <div className="food-image-wrapper width-flex-layout fixed top-0 -z-10 w-full overflow-hidden">
        <img src={image} alt={image} className="h-96 w-full object-cover" />
      </div>
      <div className="bg-white pb-16">
        <div className="festival-detail-content relative mt-80">
          <SectionTitle title="Information" />
          <div className="detail-content-container px-2">{description}</div>
        </div>
        <div className="py-4">
          <SectionTitle title="Ingredient" />
          <div className="detail-content-container px-2">
            {ingredients?.map((ingredient) => (
              <div className="flex items-center justify-between">
                <span>{ingredient.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="py-4">
          <SectionTitle title="Famous Retaurants" />
          <div className="flex flex-col px-2">
            <span className="text-lg font-bold">{restaurant.name}</span>
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-gray-400">
                {restaurant.location}
              </span>
              <div className="mr-2 flex items-baseline">
                <StarRating averageScore={restaurant.rating} />
                <span className="ml-2 text-xs">{restaurant.rating}</span>
              </div>
            </div>
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="h-40 w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailTemplate;
