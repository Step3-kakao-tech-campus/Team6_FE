import Input from "../atoms/Input";
import Button from "../atoms/Button";

const SearchBar = ({ onChange, value, onSearch }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="search-bar">
      <Input
        type="search"
        placeholder="Search"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <Button onClick={onSearch}>Search</Button>
    </div>
  );
};

export default SearchBar;
