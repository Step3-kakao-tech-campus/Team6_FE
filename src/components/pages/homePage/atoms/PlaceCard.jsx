import { Link } from "react-router-dom";

const PlaceCard = ({ image, name, address, to, alt }) => {
  return (
    <Link
      to={to}
      className="place-card flex flex-shrink-0 flex-col gap-1 p-2 md:w-[15rem] shadow-rounded-card"
    >
      <div
        className={
          "image-wrapper w-full overflow-hidden rounded-lg bg-tripKoOrange-300 md:h-[15rem] min-h-[11rem]"
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
      <div className={"place-card-info"}>
        <div className="place-card__name line-clamp-2 w-full text-xl font-bold">
          {name}
        </div>
        <div className="place-card__address line-clamp-2 w-full">{address}</div>
      </div>
    </Link>
  );
};

export default PlaceCard;
