import { FaStar } from "react-icons/fa";

const StarRating = ({ averageScore }) => {
  const renderRatingStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= averageScore) {
        stars.push(
          <FaStar
            key={i}
            color="#ffc107"
            style={{ display: "inline-block", fontSize: "16px" }}
          />
        );
      } else {
        stars.push(
          <FaStar
            key={i}
            color="#e4e5e9"
            style={{ display: "inline-block", fontSize: "16px" }}
          />
        );
      }
    }

    return stars;
  };

  return <div className="text-orange-500">{renderRatingStars()}</div>;
};

export default StarRating;
