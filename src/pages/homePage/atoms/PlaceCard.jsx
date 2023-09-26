import { Link } from "react-router-dom";

const PlaceCard = ({ image, name, address, to, alt }) => {
  return (
    <Link
      to={to}
      className="spot-card flex flex-shrink-0 flex-col gap-1 rounded-lg border border-gray-500 p-2 md:w-[180px]"
    >
      <div
        className={
          "image-wrapper w-full overflow-hidden rounded-lg bg-tripKoOrange-300 md:h-[180px] min-h-[180px]"
        }
      >
        <picture>
          <source srcSet={image} />
          <img
            src={image}
            alt={alt}
            className={"h-full w-full object-cover"}
          />
        </picture>
      </div>
      <div className={"card-info"}>
        <div className="spot-card__name line-clamp-2 w-full text-xl font-bold">
          {name}
        </div>
        <div className="spot-card__address line-clamp-2 w-full">{address}</div>
      </div>
    </Link>
  );
};

export default PlaceCard;
