import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavItem from "./NavItem";
import { AiOutlineHeart } from "react-icons/ai";
import { BiFoodMenu, BiMap } from "react-icons/bi";
import { HiOutlineTicket } from "react-icons/hi";

import { activatedColor, deactivatedColor } from "./constants";
import NavIndicator from "./NavIndicator";

const getIconColor = (id, activatedTab) => {
  return id === activatedTab ? activatedColor : deactivatedColor;
};

const getLabelColor = (id, activatedTab) => {
  return id === activatedTab ? "text-tripKoOrange" : "text-gray-500";
};

const BottomNavBar = ({ activatedTab }) => {
  const location = useLocation();
  const [localActivatedTab, setLocalActivatedTab] = useState(activatedTab);

  useEffect(() => {
    if (location.pathname === "/") {
      setLocalActivatedTab(1);
    } else if (location.pathname.includes("/foods")) {
      setLocalActivatedTab(2);
    } else if (location.pathname.includes("/userinfo/wishlist/")) {
      setLocalActivatedTab(3);
    } else if (location.pathname.includes("/userinfo/reservations/")) {
      setLocalActivatedTab(4);
    } else {
      setLocalActivatedTab(0);
    }
  }, [location]);

  return (
    <nav className="bottom-nav-bar width-flex-layout fixed bottom-0 z-[20] flex justify-around divide-x divide-gray-300 rounded-t-2xl bg-white py-2 shadow-2xl drop-shadow">
      {localActivatedTab !== 0 && <NavIndicator activatedTab={localActivatedTab} />}
      <NavItem
        id={1}
        to={"/"}
        icon={<BiMap size={30} color={getIconColor(1, localActivatedTab)} />}
        label={"Spots"}
        labelColor={getLabelColor(1, localActivatedTab)}
      />
      <NavItem
        id={2}
        to={"/foods"}
        icon={
          <BiFoodMenu size={30} color={getIconColor(2, localActivatedTab)} />
        }
        label={"Foods"}
        labelColor={getLabelColor(2, localActivatedTab)}
      />
      <NavItem
        id={3}
        to={"/userinfo/wishlist/all"}
        icon={
          <AiOutlineHeart
            size={30}
            color={getIconColor(3, localActivatedTab)}
          />
        }
        label={"Wishlist"}
        labelColor={getLabelColor(3, localActivatedTab)}
      />
      <NavItem
        id={4}
        to={"/userinfo/reservations/restaurant"}
        icon={
          <HiOutlineTicket
            size={30}
            color={getIconColor(4, localActivatedTab)}
          />
        }
        label={"Reservations"}
        labelColor={getLabelColor(4, localActivatedTab)}
      />
    </nav>
  );
};

export default BottomNavBar;
