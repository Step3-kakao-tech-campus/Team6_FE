import { Outlet } from "react-router-dom";
import BottomNavBar from "./navbar/BottomNavBar";
import { createContext, useState } from "react";

export const NavContext = createContext();

const MainLayout = ({navIndicate}) => {
  const [activatedTab, setActivatedTab] = useState(1);
  return (
    <NavContext.Provider value={{ activatedTab, setActivatedTab }}>
      <div
        className={
          "main-layout width-flex-layout flex flex-col items-center shadow-lg"
        }
      >
        <Outlet />
          {/* TODO: redux를 이용한 navbar 관리, 새로고침과 같은 상황에서도 대응이 가능하며 contextProvider보다 효과적입니다!*/}
        <BottomNavBar activatedTab={activatedTab} />
      </div>
    </NavContext.Provider>
  );
};

export default MainLayout;
