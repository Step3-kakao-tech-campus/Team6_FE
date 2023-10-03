import StarRating from "../../../common/atoms/StarRating";

const RestaurantCard = ({ children, averageRating }) => {
  return (
    <div className="m-2 rounded-br-2xl rounded-tr-2xl bg-white p-4 text-xl shadow-md">
      {children}
      <StarRating averageRating={averageRating} />
    </div>
  );
};

export default RestaurantCard;
