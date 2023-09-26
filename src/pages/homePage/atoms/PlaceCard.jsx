import { Link } from "react-router-dom";

const PlaceCard = ({ image, name, address, to, alt }) => {
  return (
    <Link
      to={to}
      className="spot-card w-[180px] flex-shrink-0 rounded-lg border border-gray-500 p-2 flex flex-col gap-1"
    >
      <div className={"image-wrapper h-[180px] w-full rounded-lg bg-tripKoOrange-300 overflow-hidden"}>
        <img
          className={"h-full w-full hover:scale-105 transition-all"}
          src={image}
          alt={`${alt}`}
        />
      </div>
      <div className={"card-info"}>
        <div className="spot-card__name line-clamp-2 font-bold text-xl w-full">
          {name}
        </div>
        <div className="spot-card__address line-clamp-2 w-full">
          {address}
        </div>
      </div>
    </Link>
  );
};

export default PlaceCard;
