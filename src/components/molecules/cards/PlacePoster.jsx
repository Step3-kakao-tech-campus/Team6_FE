import { Link } from "react-router-dom";
import CardTitle from "../../atoms/CardTitle";
import Photo from "../../atoms/Photo";
import StarRating from "../../atoms/StarRating";

const PlacePoster = ({ image, name, address, to, alt, averageScore }) => {
  return (
    <Link
      to={to ? to : "/"}
      className="place-card shadow-rounded-card flex flex-shrink-0 flex-col gap-1 p-2 md:w-[15rem]"
    >
      <div
        className={
          "image-wrapper min-h-[11rem] w-full overflow-hidden rounded-lg md:h-[15rem]"
        }
      >
        <Photo src={image} alt={alt} className={"h-full w-full object-cover"} />
      </div>
      <div className={"place-card-info"}>
        <CardTitle title={name} lineClamp={2} />
        <div className="place-card-address line-clamp-2 w-full">{address}</div>
        {
          averageScore &&
          <div className={"place-card-score flex items-center text-sm"}>
            <StarRating averageScore={averageScore} />{averageScore}
          </div>
        }
      </div>
    </Link>
  );
};

export default PlacePoster;
