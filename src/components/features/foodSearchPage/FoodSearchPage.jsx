import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../atoms/Input";
import { foodSearch } from "../../../apis/search";

const FoodSearchPage = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (query) => {
    const data = await foodSearch(query);
    setResults(data);
    navigate(`/foods?query=${encodeURIComponent(query)}`);
  };

  return (
    <div className="h-screen w-full bg-[url('https://media.cnn.com/api/v1/images/stellar/prod/181114130138-korean-food-2620014201204004k-jeonju-bibimbap.jpg?q=w_1600,h_900,x_0,y_0,c_fill/h_618')]">
      <h1 className="text-xl">Find Korea only for you</h1>
      <Input
        className="text-md mx-1 w-full rounded-lg bg-zinc-200 p-2 pl-10 outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for food"
        onKeyDown={(e) => e.key === "Enter" && handleSearch(query)}
      />
      <div className="food-list">
        {results.map((food) => (
          <Link key={food.id} to={`/foods/${food.id}`}>
            <div key={food.id} className="food-card">
              <img src={food.image} alt={food.name} />
              <h2>{food.name}</h2>
              <p>{food.category}</p>
              <p>{food.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FoodSearchPage;
