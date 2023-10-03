import { FaStar } from "react-icons/fa";

const StarRating = ({ averageScore }) => {
  const renderRatingStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const isFilled = i <= averageScore;
      const starColor = isFilled ? "#ffc107" : "#e4e5e9";

      stars.push(
        <FaStar
          key={i}
          color={starColor}
          style={{
            display: "inline-block",
            fontSize: "1rem",
          }}
        />,
      );
    }

    return stars;
  };

  return <div className="text-orange-500">{renderRatingStars()}</div>;
};

export default StarRating;
