import HorizontalListWrapperMediaQuery from "../../../common/atoms/HorizontalListWrapperMediaQuery";
import PlaceCard from "../atoms/PlaceCard";

const RestaurantCardList = ({ restaurants }) => {
  return (
    <HorizontalListWrapperMediaQuery>
      {restaurants.map((restaurant, index) => {
        return (
          <PlaceCard
            key={index}
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
