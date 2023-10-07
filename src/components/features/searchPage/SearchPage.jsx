import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import SearchBar from "../../molecules/SearchBar";
import FilterBar from "../../molecules/FilterBar";
import FilterResults from "./organisms/FilterResults";
import { search } from "../../../apis/search";

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("query") || "";

  const [query, setQuery] = useState(initialQuery);
  const [filter, setFilter] = useState("all");
  const [searchKey, setSearchKey] = useState(["searchResults", query]);
  const [customError, setCustomError] = useState(null);

  const {
    data: results,
    isLoading,
    error,
  } = useQuery(searchKey, () => search(query), {
    onSuccess: (data) => {
      if (!data || data.length === 0) {
        setCustomError("No results found. Please try again.");
        return;
      }
      setCustomError(null);
      navigate(`/search?query=${encodeURIComponent(query)}`);
    },
    onError: (error) => {
      console.log(error);
      setCustomError("검색 중 오류가 발생했습니다. 다시 시도해 주세요.");
    },
  });

  const handleSearch = (value) => {
    setSearchKey(["searchResults", value]);
  };

  return (
    <div className="w-full">
      <SearchBar
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onSearch={handleSearch}
      />
      {isLoading && <div>검색 중...</div>}
      <FilterBar filter={filter} setFilter={setFilter} />
      {customError && (
        <div className="error-message m-4 text-xl font-bold">{customError}</div>
      )}
      {!customError && (
        <FilterResults filter={filter} results={results || []} />
      )}
    </div>
  );
};

export default SearchPage;
