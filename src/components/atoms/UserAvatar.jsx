import {applyStopPropagation} from "../../utils/applyStopPropagation";

const UserAvatar = ({image, onClick}) => {
  return (
    <button
      className="user-avatar w-full h-full overflow-hidden flex-shrink-0"
      onClick={(e) => onClick ? applyStopPropagation(e, onClick) : null}
    >
      <img src={image} alt="avatar" className={"w-full object-scale-down"} />
    </button>
  );
};

export default UserAvatar;
