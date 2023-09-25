import { useState } from "react";
import SearchBar from "../components/molecules/SearchBar";

const SearchPage = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log(`Searching for: ${query}`);
  };

  return (
    <div>
      <h1>Search Page</h1>
      <SearchBar
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onSearch={handleSearch}
      />
    </div>
  );
};

export default SearchPage;
