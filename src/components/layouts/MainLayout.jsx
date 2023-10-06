import { Outlet } from "react-router-dom";
import BottomNavBar from "../features/navbar/BottomNavBar";

const MainLayout = () => {
  return (
    <>
      <div className={"main-layout flex width-flex-layout flex-col items-center pb-[70px] shadow-inner"}>
        <Outlet />
        <BottomNavBar activatedTab={1} />
      </div>
    </>
  );
};

export default MainLayout;
