import { Outlet } from "react-router-dom";
import BottomNavBar from "./organisms/BottomNavBar";

const MainLayout = () => {
  return (
    <>
      <div className={"main-layout flex w-full min-w-[400px] max-w-[800px] flex-col items-center pb-[70px]"}>
        <Outlet />
        <BottomNavBar activatedTab={1} />
      </div>
    </>
  );
};

export default MainLayout;
