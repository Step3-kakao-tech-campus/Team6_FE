import RestaurantCardList from "../molecules/RestaurantCardList";
import HorizontalListSection from "../atoms/HorizontalListSection";

const RestaurantSection = ({restaurants}) => {
  return (
    <HorizontalListSection
      className={"restaurant-section"}
      title={"Restaurants"}
    >
      <RestaurantCardList restaurants={restaurants}/>
    </HorizontalListSection>
  );
};

export default RestaurantSection;
