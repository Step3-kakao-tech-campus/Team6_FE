import NavItem from "../molecules/NavItem";
import {AiOutlineHeart} from "react-icons/ai";
import {GrMap} from "react-icons/gr";
import {BiFoodMenu} from "react-icons/bi";
import {HiOutlineTicket} from "react-icons/hi";

const BottomNavBar = ({ activatedTab }) => {
  return (
    <nav className="bottom-nav-bar width-flex-layout fixed bottom-0 flex justify-around bg-white py-2 shadow-2xl rounded-t-2xl drop-shadow divide-x divide-gray-300 ">
      <NavItem id={1} to={"/"} icon={<GrMap size={30} />} label={"Spots"} />
      <NavItem id={2} to={"/foods"} icon={<BiFoodMenu size={30} />} label={"Foods"} />
      <NavItem id={3} to={"/userinfo/wishlist/restaurant"} icon={<AiOutlineHeart size={30} />} label={"Wishlist"} />
      <NavItem id={4} to={"/userinfo/reservations/restaurant"} icon={<HiOutlineTicket size={30} />} label={"Reservations"} />
    </nav>
  );
};

export default BottomNavBar;
