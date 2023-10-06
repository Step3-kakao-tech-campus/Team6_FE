import { useNavigate } from "react-router-dom";

const UserInfoButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/userinfo");
  };
  return (
    <button
      className="user-info-button h-[2.5rem] w-[2.5rem] overflow-hidden rounded-3xl flex-shrink-0"
      onClick={handleClick}
    >
      <img src="https://picsum.photos/200" alt="avatar" className={"w-full object-scale-down"} />
    </button>
  );
};

export default UserInfoButton;
