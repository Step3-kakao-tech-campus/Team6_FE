import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { FaBars } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

const SearchBar = ({ onChange, value, onSearch }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="relative m-2 flex items-center">
      <Button onclick={() => console.log("to sideBar")}>
        <FaBars size={20} />
      </Button>
      <FaMapMarkerAlt
        size={15}
        className="absolute left-10 top-1 h-6 text-orange-500"
      />
      <Input
        className="text-md mx-2 w-full rounded-lg bg-zinc-200 p-1 pl-10 outline-none"
        type="search"
        placeholder="Search"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <Button onclick={() => console.log("to userProfile")}>
        <FaUserCircle size={30} className="mr-2" />
      </Button>
    </div>
  );
};

export default SearchBar;
