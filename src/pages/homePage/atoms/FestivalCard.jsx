import {Link} from "react-router-dom";

const FestivalCard = ({ image, to, alt }) => {
  return (
    <div className="festival-card flex-shrink-0">
      <Link to={to}>
        <img className={"w-[220px] h-[280px] bg-yellow-500"} src={image} alt={alt} />
      </Link>
    </div>
  );
};

export default FestivalCard;