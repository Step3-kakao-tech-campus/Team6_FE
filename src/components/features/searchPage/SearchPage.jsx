import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import SearchBar from "../../molecules/SearchBar";
import FilterBar from "../../molecules/FilterBar";
import FilterResults from "./organisms/FilterResults";
import { search } from "../../../apis/search";

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("query") || "";

  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleSearch = async (searchQuery) => {
    const searchResults = await search(searchQuery);
    setResults(searchResults);
    navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
  };

  useEffect(() => {
    if (initialQuery) {
      handleSearch(initialQuery);
    }
  }, [initialQuery]);

  return (
    <div className="w-full">
      <SearchBar
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onSearch={handleSearch}
      />
      <FilterBar filter={filter} setFilter={setFilter} />
      <FilterResults filter={filter} results={results} query={query} />
    </div>
  );
};

export default SearchPage;
