import FestivalCardList from "../molecules/FestivalCardList";
import HorizontalListSection from "../../../common/molecules/HorizontalListSection";

const FestivalSection = ({festivals}) => {
  return (
    <HorizontalListSection
      className={"festival-section"}
      title={"Upcoming Events"}
    >
      <FestivalCardList festivals={festivals} />
    </HorizontalListSection>
  );
};

export default FestivalSection;
