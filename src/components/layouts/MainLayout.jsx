import { Outlet } from "react-router-dom";
import BottomNavBar from "./navbar/BottomNavBar";
import { createContext, useState } from "react";

export const NavContext = createContext();

const MainLayout = () => {
    const [activatedTab, setActivatedTab] = useState(1);
    return (
        <NavContext.Provider value={{ activatedTab, setActivatedTab }}>
            <div
                className={
                    "main-layout width-flex-layout flex flex-col items-center shadow-lg"
                }
            >
                <Outlet />
                <BottomNavBar activatedTab={activatedTab} />
            </div>
        </NavContext.Provider>
    );
};

export default MainLayout;
