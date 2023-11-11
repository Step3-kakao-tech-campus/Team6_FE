import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../../molecules/SearchBar";
import FilterBar from "../../molecules/FilterBar";
import FilterResults from "./organisms/FilterResults";
import { search } from "../../../apis/search";
import {
  restaurantSearch,
  festivalSearch,
  touristSpotSearch,
} from "../../../apis/search";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("location") || "";

  const [query, setQuery] = useState(initialQuery);
  const [filter, setFilter] = useState("all");
  const [searchResults, setSearchResults] = useState({
    restaurants: [],
    festivals: [],
    touristSpots: [],
  });
  const [customError, setCustomError] = useState(null);

  useEffect(() => {
    if (query.trim()) {
      handleSearch();
    } else {
      setCustomError("Please enter a search term.");
    }
  }, [query]);

  const handleSearch = async () => {
    setCustomError(null);
    if (!query.trim()) {
      setCustomError("Please enter a search term.");
      return;
    }

    try {
      const results = await search(query);

      switch (filter) {
        case "all":
          break;
        case "restaurants":
          results.restaurants = await restaurantSearch(query);
          break;
        case "festivals":
          results.festivals = await festivalSearch(query);
          break;
        case "touristSpots":
          results.touristSpots = await touristSpotSearch(query);
          break;
        default:
          throw new Error("Invalid filter option");
      }
      setSearchResults(results);
    } catch (error) {
      setCustomError("Failed to fetch results. Please try again.");
    }
  };

  console.log(searchResults);
  return (
    <div className="mb-20 h-screen w-full overflow-y-auto">
      <SearchBar
        baseUrl={"/search"}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onSearch={handleSearch}
      />
      <FilterBar filter={filter} setFilter={setFilter} />
      {customError ? (
        <div className="error-message m-4 text-xl font-bold">{customError}</div>
      ) : (
        <FilterResults filter={filter} searchResults={searchResults} />
      )}
    </div>
  );
};

export default SearchPage;
