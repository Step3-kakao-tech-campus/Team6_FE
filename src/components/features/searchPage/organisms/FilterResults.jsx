import RestaurantCard from "../../../molecules/cards/RestaurantCard";
import FestivalCard from "../../../molecules/cards/FestivalCard";
import TouristSpotCard from "../../../molecules/cards/TouristSpotCard";

const FilterResults = ({ results, filter }) => {
  return (
    <div>
      {filter === "all" || filter === "restaurants" ? (
        <div>
          <h2 className="mx-4 text-xl font-bold">Restaurants</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {results?.restaurants?.map((restaurant, index) => (
              <RestaurantCard key={index} restaurant={restaurant} />
            ))}
          </div>
        </div>
      ) : null}
      {filter === "all" || filter === "festivals" ? (
        <div>
          <h2 className="m-4 text-xl font-bold">Festivals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {results?.festivals?.map((festival, index) => (
              <FestivalCard key={index} festival={festival} />
            ))}
          </div>
        </div>
      ) : null}
      {filter === "all" || filter === "touristSpots" ? (
        <div>
          <h2 className="m-4 text-xl font-bold">Tourist Spots</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {results?.touristSpots?.map((touristSpot, index) => (
              <TouristSpotCard key={index} touristSpot={touristSpot} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default FilterResults;
