import SpotCardList from "../molecules/SpotCardList";
import HorizontalListSection from "../atoms/HorizontalListSection";

const TrendingNowSection = () => {
  return (
    <HorizontalListSection
      title={"Trending Now"}
      className={"trending-now-section"}
    >
      <SpotCardList />
    </HorizontalListSection>
  );
};

export default TrendingNowSection;
