import Input from "../atoms/Input";
import { FaBars } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import userImage from "../assets/user-image.png";
import Button from "../atoms/Button";

const SearchBar = ({ onChange, value, onSearch }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="mx-auto flex items-center justify-center ">
      <Button onclick={() => console.log("to sideBar")}>
        <FaBars size={20} />
      </Button>
      <FaMapMarkerAlt size={15} className="mx-2 text-orange-500" />
      <Input
        className="m-2 w-2/3 rounded-lg bg-zinc-200 py-1 pl-6 text-lg"
        type="search"
        placeholder="Search"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <Button onclick={() => console.log("to userProfile")}>
        <img src={userImage} alt="user" className="h-8 w-8" />
      </Button>
    </div>
  );
};

export default SearchBar;
