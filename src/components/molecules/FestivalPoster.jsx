import { Link } from "react-router-dom";
import Photo from "../atoms/Photo";

const FestivalPoster = ({ image, to, alt }) => {
  return (
    <div className="festival-card h-[26rem] w-[22rem] flex-shrink-0 overflow-hidden">
      <Link to={to} className={""}>
        <Photo
          className={"h-full w-full transition-all hover:scale-105 duration-300 object-cover"}
          src={image}
          alt={alt}
        />
      </Link>
    </div>
  );
};

export default FestivalPoster;
