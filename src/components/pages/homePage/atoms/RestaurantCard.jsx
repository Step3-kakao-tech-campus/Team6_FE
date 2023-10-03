import {Link} from "react-router-dom";

const RestaurantCard = ({ image, alt, to, name, address }) => {
  return (
    <Link to={to} className="restaurant-card flex-shrink-0 bg-yellow-500 w-[180px]">
      <img className={"w-full min-h-[180px]"} src={image} alt={`${alt}`} />
      <div className="restaurant-card__content">
        <div className="restaurant-card__content__name line-clamp-2 w-full">
          {name}
        </div>
        <div className="restaurant-card__content__address line-clamp-2 w-full">
          {address}
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
