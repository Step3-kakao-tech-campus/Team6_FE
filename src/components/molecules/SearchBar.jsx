import Input from "../atoms/Input";
// import mapIcon from "../../assets/map-icon.png";
import sideIcon from "../../assets/side-button.png";
import userImage from "../../assets/user-image.png";
import Button from "../atoms/Button";

const SearchBar = ({ onChange, value, onSearch }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="flex items-center justify-center mx-auto ">
      <Button onclick={() => console.log("to sideBar")}>
        <img src={sideIcon} alt="side" className="w-4 h-4" />
      </Button>
      {/* <div style={{ position: "relative" }}>
        <img
          src={mapIcon}
          alt="map"
          className="transform translate-x-1/2 -translate-y-1/2 w-4 h-4"
        />
      </div> */}
      <Input
        className="rounded-lg bg-zinc-200 p-1 m-2 text-lg w-2/3"
        type="search"
        placeholder="Search"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <Button onclick={() => console.log("to userProfile")}>
        <img src={userImage} alt="user" className="w-8 h-8" />
      </Button>
    </div>
  );
};

export default SearchBar;
