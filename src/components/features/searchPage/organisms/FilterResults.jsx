import { useState, useEffect } from "react";
import RestaurantCard from "../../../molecules/cards/RestaurantCard";
import FestivalCard from "../../../molecules/cards/FestivalCard";
import TouristSpotCard from "../../../molecules/cards/TouristSpotCard";
import { Link } from "react-router-dom";
import {
  search,
  festivalSearch,
  restaurantSearch,
  touristSpotSearch,
} from "../../../../apis/search";

const FilterResults = ({ filter, query }) => {
  const [results, setResults] = useState({
    restaurants: [],
    festivals: [],
    touristSpots: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (filter === "all") {
          const allData = await search(query);
          setResults((prevResults) => ({
            ...prevResults,
            restaurants: allData.restaurants,
            festivals: allData.festivals,
            touristSpots: allData.touristSpots,
          }));
        }
        if (filter === "restaurants") {
          const restaurantData = await restaurantSearch(query);
          setResults((prevResults) => ({
            ...prevResults,
            restaurants: restaurantData,
          }));
        }
        if (filter === "festivals") {
          const festivalData = await festivalSearch(query);
          setResults((prevResults) => ({
            ...prevResults,
            festivals: festivalData,
          }));
        }
        if (filter === "touristSpots") {
          const touristSpotData = await touristSpotSearch(query);
          setResults((prevResults) => ({
            ...prevResults,
            touristSpots: touristSpotData,
          }));
        }
      } catch (error) {
        console.error("Failed to fetch filter results:", error);
      }
    };

    fetchData();
  }, [filter]);

  return (
    <div>
      {filter === "all" || filter === "restaurants" ? (
        <div>
          <h2 className="mx-4 text-xl font-bold">Restaurants</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {results?.restaurants?.map((restaurant, index) => (
              <Link to={`/restaurant/${restaurant.id}`}>
                <RestaurantCard key={index} restaurant={restaurant} />
              </Link>
            ))}
          </div>
        </div>
      ) : null}
      {filter === "all" || filter === "festivals" ? (
        <div>
          <h2 className="m-4 text-xl font-bold">Festivals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {results?.festivals?.map((festival, index) => (
              <Link to={`/festival/${festival.id}`}>
                <FestivalCard key={index} festival={festival} />
              </Link>
            ))}
          </div>
        </div>
      ) : null}
      {filter === "all" || filter === "touristSpots" ? (
        <div>
          <h2 className="m-4 text-xl font-bold">Tourist Spots</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {results?.touristSpots?.map((touristSpot, index) => (
              <Link to={`/touristSpot/${touristSpot.id}`}>
                <TouristSpotCard key={index} touristSpot={touristSpot} />
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default FilterResults;
