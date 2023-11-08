import { applyStopPropagation } from "../../utils/applyStopPropagation";
import Photo from "./Photo";

const UserAvatar = ({ image, onClick, className }) => {
  return (
    <>
      <button
        className={`user-avatar overflow-hidden rounded-full ${className}`}
        onClick={(e) => (onClick ? applyStopPropagation(e, onClick) : null)}
        aria-label="user-avatar"
      >
        <Photo
          src={image}
          alt="avatar"
          className={"h-full w-full rounded-full object-scale-down"}
        />
      </button>
    </>
  );
};

export default UserAvatar;
