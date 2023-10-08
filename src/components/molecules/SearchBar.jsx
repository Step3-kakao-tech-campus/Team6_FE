import { useNavigate } from "react-router-dom";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { FaBars } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import UserAvatar from "../atoms/UserAvatar";

const SearchBar = ({ value, onChange, onSearch }) => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search?query=${encodeURIComponent(value)}`);
    if (typeof onSearch === "function") {
      onSearch(value);
    }
  };

  return (
    <div className="relative m-2 flex items-center">
      <Button onClick={() => console.log("to sideBar")}>
        <FaBars size={28} />
      </Button>
      <FaMapMarkerAlt
        size={15}
        className="absolute left-11 top-3 h-6 text-orange-500"
      />
      <Input
        className="text-md mx-1 w-full rounded-lg bg-zinc-200 p-2 pl-10 outline-none"
        type="search"
        placeholder="Search the location"
        value={value}
        onChange={onChange}
        onKeyPress={(e) => e.key === "Enter" && handleSearch()}
      />
      <UserAvatar
        image={"https://picsum.photos/230"}
        onClick={() => console.log("clicked")}
        className="h-12 w-12 rounded-full"
      />
    </div>
  );
};

export default SearchBar;
