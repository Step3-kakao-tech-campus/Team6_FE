import { Link } from "react-router-dom";

const FestivalCard = ({ image, to, alt }) => {
  return (
    <div className="festival-card h-[420px] min-w-[370px] flex-shrink-0 overflow-hidden">
      <Link to={to} className={""}>
        <img
          className={"h-full w-full bg-tripKoOrange-300 transition-all hover:scale-105 object-cover"}
          src={image}
          alt={alt}
        />
      </Link>
    </div>
  );
};

export default FestivalCard;
