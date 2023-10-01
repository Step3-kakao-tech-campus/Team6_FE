import RestaurantCard from "../molecules/RestaurantCard";
import FestivalCard from "../molecules/FestivalCard";

const FilterResults = ({ filter, results, query }) => {
  return (
    <div>
      {filter === "all" || filter === "restaurants" ? (
        <div>
          <h2 className="text-xl font-bold m-2">Restaurants</h2>
          <ul>
            {results.restaurants &&
              results.restaurants
                .filter((restaurant) => restaurant.address.includes(query))
                .map((restaurant, index) => (
                  <RestaurantCard
                    key={index}
                    averageScore={restaurant.averageScore}
                  >
                    <div className="flex items-center">
                      <img
                        src={restaurant.image}
                        alt={restaurant.name}
                        className="w-28 rounded-lg"
                      />
                      <div className="text-[#FF4800] text-sm/12 font-semibold pl-2 m-2">
                        <span className="mb-0">{restaurant.name}</span>
                        <br />
                        <span className="text-sm text-gray-400">
                          {restaurant.summary}
                        </span>
                      </div>
                    </div>
                  </RestaurantCard>
                ))}
          </ul>
        </div>
      ) : null}
      {filter === "all" || filter === "festivals" ? (
        <div>
          <h2 className="text-xl font-bold m-2">Festivals</h2>
          <ul>
            {results.festivals &&
              results.festivals
                .filter((festival) => festival.address.includes(query))
                .map((festival, index) => (
                  <FestivalCard
                    key={index}
                    averageScore={festival.averageScore}
                  >
                    <div className="text-[#FF4800] font-semibold">
                      {festival.name}
                    </div>
                    <div className="text-sm">{festival.address}</div>
                  </FestivalCard>
                ))}
          </ul>
        </div>
      ) : null}
      {filter === "all" || filter === "touristSpots" ? (
        <div>
          <h2 className="text-xl font-bold m-2">Tourist Spots</h2>
          <ul>
            {results.touristSpots &&
              results.touristSpots
                .filter((touristSpot) => touristSpot.address.includes(query))
                .map((touristSpot, index) => (
                  <RestaurantCard key={index}>
                    <li>{touristSpot.name}</li>
                  </RestaurantCard>
                ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default FilterResults;
