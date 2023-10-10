import { applyStopPropagation } from "../../utils/applyStopPropagation";

const UserAvatar = ({ image, onClick, className }) => {
  return (
    <button
      className={`user-avatar ${className}`}
      onClick={(e) => (onClick ? applyStopPropagation(e, onClick) : null)}
    >
      <img
        src={image}
        alt="avatar"
        className={"w-full rounded-full object-scale-down"}
      />
    </button>
  );
};

export default UserAvatar;
