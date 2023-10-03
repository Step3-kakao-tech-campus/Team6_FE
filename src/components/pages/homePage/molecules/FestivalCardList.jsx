import FestivalCard from "../atoms/FestivalCard";
import HorizontalListWrapper from "../atoms/HorizontalListWrapper";

const FestivalCardList = ({ festivals }) => {
  return (
    <HorizontalListWrapper>
      {festivals.map((festival) => {
        return (
          <FestivalCard
            key={festival.id}
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
