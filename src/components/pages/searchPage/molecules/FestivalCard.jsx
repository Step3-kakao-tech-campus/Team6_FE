import StarRating from "../../../common/atoms/StarRating";

const FestivalCard = ({ children, averageScore }) => {
  return (
    <div className="m-2 bg-white px-6 py-2 text-xl shadow-md">
      {children}
      <StarRating averageScore={averageScore} />
    </div>
  );
};

export default FestivalCard;
