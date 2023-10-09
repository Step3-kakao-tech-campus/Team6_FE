import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import Input from "../../atoms/Input";
import SearchBar from "../../molecules/SearchBar";
import { foodSearch } from "../../../apis/search";

const FoodSearchPage = () => {
  const navigate = useNavigate();
  const [foodSearchParams] = useSearchParams();
  const initialQuery = foodSearchParams.get("query") || "";

  const [query, setQuery] = useState(initialQuery);
  const [searchKey, setSearchKey] = useState(["searchResults", query]);
  const [customError, setCustomError] = useState(null);

  const {
    data: results,
    isLoading,
    error,
  } = useQuery(searchKey, () => foodSearch(query), {
    onSuccess: (data) => {
      if (!data || data.length === 0) {
        setCustomError("No results found. Please try again.");
        return;
      }
      setCustomError(null);
      navigate(`/foods?query=${encodeURIComponent(query)}`);
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
    <div>
      <h1 className="text-xl">Find Korea only for you</h1>

      <Input
        className="text-md mx-1 w-full rounded-lg bg-zinc-200 p-2 pl-10 outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for food"
        onKeyDown={(e) => e.key === "Enter" && handleSearch(query)}
      />
    </div>
  );
};

export default FoodSearchPage;
