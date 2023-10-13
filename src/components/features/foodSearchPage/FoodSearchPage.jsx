import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Input from "../../atoms/Input";
import { foodSearch } from "../../../apis/search";
import { FiSearch } from "react-icons/fi";

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
    }
  }, [location.search]);

  const fetchSearchResults = async (query) => {
    const data = await foodSearch(query);
    setResults(data);
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center overflow-y-auto">
      <div className="bg-food-search h-full w-full flex-col items-center justify-center overflow-y-auto">
        <div className="w-full bg-cover bg-center backdrop-blur-sm">
          <div
            className={`input w-full transition-all ${
              results.length > 0 ? "mt-6 flex" : "h-screen"
            }`}
          >
            {results.length === 0 && (
              <h1 className="mb-4 text-center text-6xl font-extrabold">
                Find Korea only for you
              </h1>
            )}
            <FiSearch className="absolute left-8 top-3 text-gray-500" />
            <Input
              className="text-md mx-4 w-full rounded-lg p-2 pl-10 outline-none"
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
          {results.length > 0 && currentQuery && (
            <h3 className="mx-4 mt-2 text-xl">
              Searching for "{currentQuery}"
            </h3>
          )}
          <div className="food-list grid w-full grid-cols-1 gap-0 md:grid-cols-2">
            {results.map((food) => (
              <Link key={food.id} to={`/foods/${food.id}`}>
                <div
                  key={food.id}
                  className="food-card shadow-rounded-card mx-4 my-2 items-center bg-white p-4"
                >
                  <img
                    src={food.image}
                    alt={food.name}
                    className="mb-2 h-36 w-full rounded-md object-cover"
                  />
                  <span className="text-sm text-gray-500">{food.category}</span>
                  <h2 className="my-1 text-2xl font-bold">{food.name}</h2>
                  <p className="mb-4 text-gray-500 clamp-3">{food.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodSearchPage;
