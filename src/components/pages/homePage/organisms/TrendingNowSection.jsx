import SpotCardList from "../molecules/SpotCardList";
import HorizontalListSection from "../../../common/molecules/HorizontalListSection";

const TrendingNowSection = ({touristSpots}) => {
  return (
    <HorizontalListSection
      title={"Trending Now"}
      className={"trending-now-section"}
    >
      <SpotCardList spots={touristSpots}/>
    </HorizontalListSection>
  );
};

export default TrendingNowSection;
