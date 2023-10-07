import { Link } from "react-router-dom";

const FestivalPoster = ({ image, to, alt }) => {
  return (
    <div className="festival-card h-[26rem] w-[22rem] flex-shrink-0 overflow-hidden">
      <Link to={to} className={""}>
        <img
          className={"h-full w-full bg-tripKoOrange-300 transition-all hover:scale-105 duration-300 object-cover"}
          src={image}
          alt={alt}
        />
      </Link>
    </div>
  );
};

export default FestivalPoster;
