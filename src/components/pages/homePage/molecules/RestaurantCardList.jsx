import HorizontalListWrapperMediaQuery from "../atoms/HorizontalListWrapperMediaQuery";
import PlaceCard from "../atoms/PlaceCard";

const RestaurantCardList = ({ restaurants }) => {
  return (
    <HorizontalListWrapperMediaQuery>
      {restaurants.map((restaurant) => {
        return (
          <PlaceCard
            key={restaurant.id}
            image={restaurant.image}
            alt={`poster of ${restaurant.name}`}
            to={`restaurant/${restaurant.id}`}
            name={restaurant.name}
            address={restaurant.address}
          />
        );
      })}
    </HorizontalListWrapperMediaQuery>
  );
};

export default RestaurantCardList;
