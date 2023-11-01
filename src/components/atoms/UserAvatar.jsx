import { Link } from "react-router-dom";
import { applyStopPropagation } from "../../utils/applyStopPropagation";
import Photo from "./Photo";

const UserAvatar = ({ image, onClick, className }) => {
  return (
    <Link to={"/userinfo"}>
      <button
        className={`user-avatar overflow-hidden rounded-full ${className}`}
        onClick={(e) => (onClick ? applyStopPropagation(e, onClick) : null)}
      >
        <Photo
          src={image}
          alt="avatar"
          className={"h-full w-full rounded-full object-scale-down"}
        />
      </button>
    </Link>
  );
};

export default UserAvatar;
