import { Link } from "react-router-dom";
import Photo from "../../atoms/Photo";

const FoodCard = ({ food }) => {
  return (
    <Link to={`/foods/${food.id}`}>
      <div
        key={food.id}
        className="food-card shadow-rounded-card mx-4 my-2 items-center bg-white p-4"
      >
        <Photo
          src={food.image}
          alt={food.name}
          className="mb-2 h-36 w-full rounded-md object-cover"
        />
        <span className="text-sm text-gray-500">{food.category}</span>
        <h2 className="my-1 text-2xl font-bold">{food.name}</h2>
        <p className="mb-4 text-gray-500 clamp-3">{food.summary}</p>
      </div>
    </Link>
  );
};

export default FoodCard;
