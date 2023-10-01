import FestivalCardList from "../molecules/FestivalCardList";
import HorizontalListSection from "../atoms/HorizontalListSection";

const FestivalSection = () => {
  return (
    <HorizontalListSection
      className={"festival-section"}
      title={"Upcoming Events"}
    >
      <FestivalCardList />
    </HorizontalListSection>
  );
};

export default FestivalSection;
