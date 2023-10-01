import RestaurantCardList from "../molecules/RestaurantCardList";
import HorizontalListSection from "../atoms/HorizontalListSection";

const RestaurantSection = () => {
  return (
    <HorizontalListSection
      className={"restaurant-section"}
      title={"Restaurants"}
    >
      <RestaurantCardList />
    </HorizontalListSection>
  );
};

export default RestaurantSection;
