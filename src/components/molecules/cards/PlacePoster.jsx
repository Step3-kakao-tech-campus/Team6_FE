import { Link } from "react-router-dom";
import CardTitle from "../../atoms/CardTitle";
import Photo from "../../atoms/Photo";
import StarRating from "../../atoms/StarRating";

const PlacePoster = ({ image, name, address, to, alt, averageRating }) => {
  return (
    <Link
      to={to ? to : "/"}
      className="place-card shadow-rounded-card flex flex-shrink-0 flex-col justify-between gap-1 p-2 md:w-[15rem]"
    >
      <div className={"place-card-info"}>
        <div
          className={
            "image-wrapper min-h-[11rem] w-full overflow-hidden rounded-lg md:h-[15rem]"
          }
        >
          <Photo
            src={image}
            alt={alt}
            className={"h-full w-full object-cover"}
          />
        </div>

        <CardTitle title={name} lineClamp={2} />
        <div className="place-card-address line-clamp-2 w-full">{address}</div>
      </div>
      <div className={"place-card-score flex items-center text-sm"}>
        <StarRating averageRating={averageRating} />
        {averageRating.toFixed(1)}
      </div>
    </Link>
  );
};

export default PlacePoster;
