import StarRating from "../atoms/StarRating";

const RestaurantCard = ({ children, averageScore }) => {
  return (
    <div className="rounded-tr-2xl rounded-br-2xl shadow-md bg-white p-4 m-2 text-xl">
      {children}
      <StarRating averageScore={averageScore} />
    </div>
  );
};

export default RestaurantCard;
