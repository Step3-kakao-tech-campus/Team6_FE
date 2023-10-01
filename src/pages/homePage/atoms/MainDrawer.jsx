import { AiOutlineMenu } from "react-icons/ai";

const MainDrawer = ({onClick}) => {
  return (
    <button className="main-drawer" onClick={onClick}>
      <AiOutlineMenu size={40}/>
    </button>
  );
};

export default MainDrawer;
