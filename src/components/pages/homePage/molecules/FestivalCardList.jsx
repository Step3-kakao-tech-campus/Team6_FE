import FestivalCard from "../atoms/FestivalCard";
import HorizontalListWrapper from "../../../common/atoms/HorizontalListWrapper";

const FestivalCardList = ({ festivals }) => {
  return (
    <HorizontalListWrapper>
      {festivals.map((festival, index) => {
        return (
          <FestivalCard
            key={index}
            image={festival.image}
            alt={`poster of ${festival.name}`}
            to={`festival/${festival.id}`}
          />
        );
      })}
    </HorizontalListWrapper>
  );
};

export default FestivalCardList;
