import RestaurantCard from "../molecules/RestaurantCard";
import FestivalCard from "../molecules/FestivalCard";

const FilterResults = ({ filter, results, query }) => {
  return (
    <div>
      {filter === "all" || filter === "restaurants" ? (
        <div>
          <h2 className="m-2 text-xl font-bold">Restaurants</h2>
          <ul>
            {results.restaurants &&
              results.restaurants
                .filter((restaurant) => restaurant.address.includes(query))
                .map((restaurant, index) => (
                  <RestaurantCard
                    key={index}
                    restaurant={restaurant}
                  ></RestaurantCard>
                ))}
          </ul>
        </div>
      ) : null}
      {filter === "all" || filter === "festivals" ? (
        <div>
          <h2 className="m-2 text-xl font-bold">Festivals</h2>
          <ul>
            {results.festivals &&
              results.festivals
                .filter((festival) => festival.address.includes(query))
                .map((festival, index) => (
                  <FestivalCard
                    key={index}
                    averageScore={festival.averageScore}
                  >
                    <div className="font-semibold text-[#FF4800]">
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
          <h2 className="m-2 text-xl font-bold">Tourist Spots</h2>
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
