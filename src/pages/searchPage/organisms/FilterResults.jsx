import RestaurantCard from "../molecules/RestaurantCard";

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
                    <img src="/images/restaurant.jpg" alt="restaurant" />
                    <span className="text-orange-500 font-semibold">
                      {restaurant.name}
                    </span>
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
                  <RestaurantCard key={index}>
                    <li>{festival.name}</li>
                  </RestaurantCard>
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
