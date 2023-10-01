import StarRating from "../atoms/StarRating";

const FestivalCard = ({ children, averageScore }) => {
  return (
    <div className="shadow-md bg-white py-2 px-6 m-2 text-xl">
      {children}
      <StarRating averageScore={averageScore} />
    </div>
  );
};

export default FestivalCard;
