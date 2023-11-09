import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { FaBars } from "react-icons/fa6";
import UserAvatar from "../atoms/UserAvatar";
import MapIcon from "../atoms/MapIcon";
import SideBar from "./cards/SideBar";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ value, onChange, onSearch }) => {
  const navigate = useNavigate();
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setUserToken(token);
  }, []);

  const handleSearch = () => {
    navigate(`/search?location=${encodeURIComponent(value)}`);
    if (typeof onSearch === "function") {
      onSearch(value);
    }
  };

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = () => setIsSideBarOpen(!isSideBarOpen);

  return (
    <div className="search-section relative flex items-center justify-between gap-2 p-2">
      <div className="sidebar-button relative">
        <Button onClick={toggleSideBar} aria-label="sidebar-button">
          <FaBars size={28} />
        </Button>
        <SideBar isOpen={isSideBarOpen} toggle={toggleSideBar} />
      </div>
      <div
        className={"input-wrapper relative w-[calc(100%-6rem)] rounded-full"}
      >
        <div className="absolute left-2 flex h-full items-center justify-center">
          <MapIcon size={20} color={"#FF4800"} />
        </div>
        <div className="search-button absolute right-6 flex h-full items-center justify-center">
          <Button onClick={handleSearch} aria-label="search-button">
            <FiSearch />
          </Button>
        </div>
        <Input
          className="text-md w-full rounded-lg bg-zinc-200 p-2 pl-10 outline-none"
          type="search"
          placeholder="Search your place.."
          value={value}
          onChange={onChange}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
      </div>
      <Link to={userToken ? "/userinfo" : "/login"}>
        {userToken ? (
          <UserAvatar
            image="https://picsum.photos/230"
            onClick={() => console.log("clicked")}
            className="h-[3rem] w-[3rem] rounded-full"
          />
        ) : (
          <Button
            onClick={() => navigate("/login")}
            className="text-tripKoOrange-500"
            aria-label="login-button"
          >
            Login
          </Button>
        )}
      </Link>
    </div>
  );
};

export default SearchBar;
