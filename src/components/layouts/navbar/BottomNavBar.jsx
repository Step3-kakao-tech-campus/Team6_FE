import NavItem from "./NavItem";
import { AiOutlineHeart } from "react-icons/ai";
import { BiFoodMenu, BiMap } from "react-icons/bi";
import { HiOutlineTicket } from "react-icons/hi";
// import NavIndicator from "./NavIndicator";
import { activatedColor, deactivatedColor } from "./constants";

const getIconColor = (id, activatedTab) => {
    return deactivatedColor;
  // return id === activatedTab ? activatedColor : deactivatedColor;
};

const getLabelColor = (id, activatedTab) => {
    return "text-gray-500"
  // return id === activatedTab ? "text-tripKoOrange" : "text-gray-500";
};

const BottomNavBar = ({ activatedTab }) => {
  return (
    <nav className="bottom-nav-bar width-flex-layout fixed bottom-0 z-[20] flex justify-around divide-x divide-gray-300 rounded-t-2xl bg-white py-2 shadow-2xl drop-shadow">
      {/*<NavIndicator activatedTab={activatedTab} />*/}
      <NavItem
        id={1}
        to={"/"}
        icon={<BiMap size={30} color={getIconColor(1, activatedTab)} />}
        label={"Spots"}
        labelColor={getLabelColor(1, activatedTab)}
      />
      <NavItem
        id={2}
        to={"/foods"}
        icon={<BiFoodMenu size={30} color={getIconColor(2, activatedTab)} />}
        label={"Foods"}
        labelColor={getLabelColor(2, activatedTab)}
      />
      <NavItem
        id={3}
        to={"/userinfo/wishlist/all"}
        icon={
          <AiOutlineHeart size={30} color={getIconColor(3, activatedTab)} />
        }
        label={"Wishlist"}
        labelColor={getLabelColor(3, activatedTab)}
      />
      <NavItem
        id={4}
        to={"/userinfo/reservations/restaurant"}
        icon={
          <HiOutlineTicket size={30} color={getIconColor(4, activatedTab)} />
        }
        label={"Reservations"}
        labelColor={getLabelColor(4, activatedTab)}
      />
    </nav>
  );
};

export default BottomNavBar;
