import StarRating from "../atoms/StarRating";
import WishButton from "../atoms/WishButton";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="shadow-rounded-card m-4 px-4">
      <div className="flex">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="my-4 h-32 w-24 rounded-md border-gray-300"
        />
        <div className="m-2 items-center">
          <h4 className="text-lg font-semibold text-[#FF4800]">
            {restaurant.name}
          </h4>
          <div className="clamp-3">{restaurant.summary}</div>
          <div className="flex items-center">
            <StarRating averageScore={restaurant.averageScore} />
            <span className="text-xs">{restaurant.averageScore}</span>
          </div>
        </div>
        <div className="mt-2">
          <WishButton initialIsWished={restaurant.liked} />
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
