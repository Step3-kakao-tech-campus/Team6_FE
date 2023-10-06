import { Link } from "react-router-dom";
import CardTitle from "../atoms/CardTitle";

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
        <CardTitle title={name} lineClamp={2}/>
        <div className="place-card-address line-clamp-2 w-full">{address}</div>
      </div>
    </Link>
  );
};

export default PlaceCard;
