// pages/SearchPage.js
import React, { useState } from "react";
import SearchBar from "../components/molecules/SearchBar";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(`/api/search?query=${query}`);
    const data = await response.json();
    setResults(data.results);
  };

  return (
    <div>
      <h1>Search Page</h1>
      <SearchBar
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onSearch={handleSearch}
      />
      <div>
        <h2>Restaurants:</h2>
        <ul>
          {results.restaurants &&
            results.restaurants.map((restaurant, index) => (
              <li key={index}>{restaurant.name}</li>
            ))}
        </ul>
        <h2>Festivals:</h2>
        <ul>
          {results.festivals &&
            results.festivals.map((festival, index) => (
              <li key={index}>{festival.name}</li>
            ))}
        </ul>
        <h2>Tourist Spots:</h2>
        <ul>
          {results.touristSpots &&
            results.touristSpots.map((spot, index) => (
              <li key={index}>{spot.name}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchPage;
