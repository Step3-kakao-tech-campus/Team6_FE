import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Input from "../../atoms/Input";
import { foodSearch } from "../../../apis/search";
import { FiSearch } from "react-icons/fi";
import FoodCard from "../../molecules/cards/FoodCard";

const FoodSearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [currentQuery, setCurrentQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const fetchSearchResults = async (query) => {
    try {
      const data = await foodSearch(query);
      setResults(data);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Failed to fetch results.");
    }
  };

  const handleSearch = () => {
    if (!currentQuery.trim()) {
      setErrorMessage("Please enter a valid search term.");
      return;
    }
    setErrorMessage("");
    navigate(`/foods?query=${encodeURIComponent(currentQuery)}`);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("query") || "";
    setCurrentQuery(query);

    if (query) {
      fetchSearchResults(query);
    } else {
      setResults([]);
    }
  }, [location.search]);

  return (
    <div className="relative flex h-screen w-full flex-col bg-food-search bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col overflow-y-auto">
        <div
          className={`input flex w-full transition-all ${
            results?.length > 0
              ? "mt-6"
              : "h-[calc(100vh-66px)] flex-col items-center justify-center"
          }`}
        >
          {results?.length === 0 && (
            <h1 className="mb-4 text-center text-6xl font-extrabold text-white">
              Find Korea only for you
            </h1>
          )}
          <div className="food-search-bar relative flex w-full flex-col px-4">
            <FiSearch className="absolute left-10 top-3 text-gray-500" />
            <button
              className="absolute right-10 rounded py-2 font-bold text-black "
              onClick={handleSearch}
            >
              Search
            </button>
            <Input
              className="text-md w-full rounded-lg bg-gray-100 p-2 pl-16 outline-none"
              placeholder="Search for food"
              value={currentQuery}
              onChange={(e) => setCurrentQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
            {errorMessage && (
              <div className="mt-2 text-lg text-red-500">{errorMessage}</div>
            )}
          </div>
        </div>

        <div className="food-list grid w-full grid-cols-1 gap-0 pb-16 md:grid-cols-2">
          {results?.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodSearchPage;
