import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavItem from "./NavItem";
import { AiOutlineHeart } from "react-icons/ai";
import { BiFoodMenu, BiMap } from "react-icons/bi";
import { HiOutlineTicket } from "react-icons/hi";

import { activatedColor, deactivatedColor } from "./constants";
import NavIndicator from "./NavIndicator";
import { setIndicator } from "../../../store/slice/navStateSlice";
import { useDispatch, useSelector } from "react-redux";
import { ModalContext } from "../../../App";

const getIconColor = (id, activatedTab) => {
  return id === activatedTab ? activatedColor : deactivatedColor;
};

const getLabelColor = (id, activatedTab) => {
  return id === activatedTab ? "text-tripKoOrange" : "text-gray-500";
};

const BottomNavBar = () => {
  const location = useLocation();
  const localActivatedTab = useSelector(
    (state) => state.navState.navState.indicator,
  );
  const dispatch = useDispatch();

  const { hide } = useContext(ModalContext);

  useEffect(() => {
    if (location.pathname === "/") {
      dispatch(setIndicator(1));
    } else if (location.pathname.includes("/foods")) {
      dispatch(setIndicator(2));
    } else if (location.pathname.includes("/userinfo/wishlist/")) {
      dispatch(setIndicator(3));
    } else if (location.pathname.includes("/userinfo/reservations/")) {
      dispatch(setIndicator(4));
    } else {
      dispatch(setIndicator(0));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <nav
      className="bottom-nav-bar width-flex-layout fixed bottom-0 z-[20] flex justify-around divide-x divide-gray-300 rounded-t-2xl bg-white py-2 shadow-2xl drop-shadow"
      onClick={(e) => {
        hide();
      }}
    >
      {localActivatedTab !== 0 && (
        <NavIndicator activatedTab={localActivatedTab} />
      )}
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
