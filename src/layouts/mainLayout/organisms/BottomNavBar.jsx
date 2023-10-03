import NavItem from "../molecules/NavItem";
import { AiOutlineSearch } from "react-icons/ai";

const BottomNavBar = ({ activatedTab }) => {
  return (
    <nav className="bottom-nav-bar fixed bottom-0 flex w-full min-w-[370px] max-w-[800px] justify-around divide-x divide-gray-300 rounded-t-2xl bg-white py-2 shadow-2xl drop-shadow ">
      <NavItem id={1} icon={<AiOutlineSearch size={30} />} label={"option1"} />
      <NavItem id={2} icon={<AiOutlineSearch size={30} />} label={"option2"} />
      <NavItem id={3} icon={<AiOutlineSearch size={30} />} label={"option3"} />
      <NavItem id={4} icon={<AiOutlineSearch size={30} />} label={"option4"} />
    </nav>
  );
};

export default BottomNavBar;
