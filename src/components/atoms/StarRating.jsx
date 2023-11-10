import { FaStar, FaStarHalf } from "react-icons/fa";

const StarRating = ({ averageRating }) => {
  const renderRatingStars = () => {
    const roundedScore = Math.round(averageRating * 2) / 2;
    const fullStars = Math.floor(roundedScore);
    const hasHalfStar = roundedScore % 1 === 0.5;

    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <FaStar
            key={i}
            color="#ffc107"
            style={{ display: "inline-block", fontSize: "16px" }}
          />,
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <FaStarHalf
            key={i}
            color="#ffc107"
            style={{ display: "inline-block", fontSize: "16px" }}
          />,
        );
      } else {
        stars.push(
          <FaStar
            key={i}
            color="#e4e5e9"
            style={{ display: "inline-block", fontSize: "16px" }}
          />,
        );
      }
    }

    return stars;
  };

  return <div className=" text-orange-500">{renderRatingStars()}</div>;
};

export default StarRating;
