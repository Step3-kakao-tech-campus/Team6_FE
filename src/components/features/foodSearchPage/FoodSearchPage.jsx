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

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("query");
    if (query) {
      navigate(`/foods?query=${encodeURIComponent(query)}`, { replace: true });
      fetchSearchResults(query);
      setCurrentQuery(query);
    } else {
      setResults([]);
      setCurrentQuery("");
    }
  }, [location.search, navigate]);

  const fetchSearchResults = async (query) => {
    const data = await foodSearch(query);
    setResults(data);
  };

  return (
    <div className="relative flex h-screen w-full flex-col bg-food-search bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col overflow-y-auto">
        <div
          className={`input flex w-full transition-all ${
            results.length > 0
              ? "mt-6"
              : "h-[calc(100vh-66px)] flex-col items-center justify-center"
          }`}
        >
          {results?.length === 0 && (
            <h1 className="mb-4 text-center text-6xl font-extrabold text-white">
              Find Korea only for you
            </h1>
          )}
          <div className="relative flex w-full flex-col px-4">
            <FiSearch className="absolute left-10 top-3 text-gray-500" />
            <Input
              className="text-md w-full rounded-lg bg-gray-100 p-2 pl-16 outline-none"
              placeholder="Search for food"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  navigate(
                    `/foods?query=${encodeURIComponent(e.target.value)}`,
                  );
                }
              }}
            />
          </div>
        </div>
        {results?.length > 0 && currentQuery && (
          <h3 className="mx-4 mt-2 text-lg">Searching for "{currentQuery}"</h3>
        )}
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
