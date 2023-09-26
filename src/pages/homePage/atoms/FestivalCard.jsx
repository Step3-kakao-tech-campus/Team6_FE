import { Link } from "react-router-dom";

const FestivalCard = ({ image, to, alt }) => {
  return (
    <div className="festival-card h-[280px] w-[220px] flex-shrink-0 overflow-hidden">
      <Link to={to} className={""}>
        <img
          className={"h-full w-full bg-yellow-500 transition-all hover:scale-105"}
          src={image}
          alt={alt}
        />
      </Link>
    </div>
  );
};

export default FestivalCard;
