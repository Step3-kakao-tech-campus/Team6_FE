import { useNavigate } from "react-router-dom";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { FaBars } from "react-icons/fa6";
import UserAvatar from "../atoms/UserAvatar";
import MapIcon from "../atoms/MapIcon";

const SearchBar = ({ value, onChange, onSearch }) => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search?query=${encodeURIComponent(value)}`);
    if (typeof onSearch === "function") {
      onSearch(value);
    }
  };

  return (
    <div className="search-section relative flex items-center gap-2 p-2 justify-between">
      <Button onClick={() => console.log("to sideBar")}>
        <FaBars size={28} />
      </Button>
      <div className={"input-wrapper relative rounded-full w-[calc(100%-6rem)]"}>
      <div className="absolute flex justify-center items-center h-full left-2">
        <MapIcon size={20} color={"#FF4800"} />
      </div>
        <Input
          className="text-md w-full rounded-lg bg-zinc-200 p-2 pl-10 outline-none"
          type="search"
          placeholder="Search your place..."
          value={value}
          onChange={onChange}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
      </div>
      <UserAvatar
        image={"https://picsum.photos/230"}
        onClick={() => console.log("clicked")}
        className="h-[3rem] w-[3rem] rounded-full"
      />
    </div>
  );
};

export default SearchBar;
