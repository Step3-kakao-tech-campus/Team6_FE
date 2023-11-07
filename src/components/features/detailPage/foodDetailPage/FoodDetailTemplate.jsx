import PageTitleBar from "../../../molecules/PageTitleBar";
import SectionTitle from "../../../atoms/SectionTitle";
import { FaStar } from "react-icons/fa";
import Photo from "../../../atoms/Photo";
import HorizontalListSection from "../../carousel/HorizontalListSection";

const FoodDetailTemplate = ({ food }) => {
  const { name, mainImage, description, foodImage, ingredients, restaurant } =
    food?.result || {};

  return (
    <div className="food-detail-page w-full">
      <PageTitleBar name={name} />
      <div className="food-image-wrapper width-flex-layout fixed top-0 -z-10 w-full overflow-hidden">
        <Photo
          src={mainImage}
          alt={name}
          className="h-96 w-full object-cover"
        />
      </div>
      <div className="bg-white pb-16">
        <div className="food-detail-content relative mt-80">
          <SectionTitle title="Information" />
          <div className="detail-content-container mb-2 px-2">
            {description}
          </div>
          <HorizontalListSection>
            {foodImage?.map((image, index) => (
              <Photo
                key={index}
                src={image}
                alt={`${name} image`}
                className="h-60 w-60 flex-shrink-0 object-cover"
              />
            ))}
          </HorizontalListSection>
        </div>
        <div className="py-4">
          <SectionTitle title="Ingredient" />
          <div className="detail-content-container px-2">
            {ingredients?.map((ingredient, index) => (
              <div key={index} className="flex items-center justify-between">
                <span>{ingredient}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="py-4">
          <SectionTitle title="Famous Retaurants" />
          <div className="flex flex-col px-2">
            {restaurant.map((restaurant) => (
              <div key={restaurant.name} className="my-2">
                <span className="text-lg font-bold">{restaurant.name}</span>
                <div className="mb-2 flex items-baseline justify-between">
                  <span className="text-sm text-gray-400">
                    {restaurant.location}
                  </span>
                  <div className="mr-2 flex">
                    <FaStar color="#ffc107" />
                    <span className="ml-2 text-xs">
                      {restaurant.averageRating}
                    </span>
                  </div>
                </div>
                <Photo
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="h-60 w-full rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailTemplate;
