import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import SearchBar from "../../molecules/SearchBar";
import FilterBar from "../../molecules/FilterBar";
import FilterResults from "./organisms/FilterResults";
import { search } from "../../../apis/search";
import LoadingPage from "../loadingPage/LoadingPage";

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("location") || "";

  const [query, setQuery] = useState(initialQuery);
  const [filter, setFilter] = useState("all");
  const [searchKey, setSearchKey] = useState(["searchResults", query]);
  const [customError, setCustomError] = useState(null);

  // const {
  //   data: results,
  //   isLoading,
  //   error,
  // } = useQuery(searchKey, () => search(query), {
  //   onSuccess: (data) => {
  //     if (!data || data.length === 0) {
  //       setCustomError("No results found. Please try again.");
  //       return;
  //     }
  //     setCustomError(null);
  //     navigate(`/search?location=${encodeURIComponent(query)}`);
  //   },
  //   onError: (error) => {
  //     setCustomError("Something went wrong. Please try again.");
  //   },
  // });

  const handleSearch = (value) => {
    setSearchKey(["searchResults", value]);
  };

  return (
    <div className="mb-20 h-screen w-full overflow-y-auto">
      <SearchBar
        baseUrl={"/search"}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onSearch={handleSearch}
      />
      <FilterBar filter={filter} setFilter={setFilter} />
      {customError && (
        <div className="error-message m-4 text-xl font-bold">{customError}</div>
      )}
      {!customError && <FilterResults filter={filter} query={query} />}
    </div>
  );
};

export default SearchPage;
