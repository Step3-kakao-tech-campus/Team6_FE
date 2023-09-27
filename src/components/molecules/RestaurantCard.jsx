import { FaStar } from "react-icons/fa";

const RestaurantCard = ({ children, averageScore }) => {
  const renderingRatingStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= averageScore) {
        stars.push(<FaStar key={i} color="#ffc107" />);
      } else {
        stars.push(<FaStar key={i} color="#e4e5e9" />);
      }
    }

    return stars;
  };

  return (
    <div className="rounded-tr-lg rounded-br-lg shadow-md bg-white p-4 m-2 text-xl">
      {children}
      <br />
      <div className="text-orange-500">{renderingRatingStars()}</div>
    </div>
  );
};

export default RestaurantCard;
