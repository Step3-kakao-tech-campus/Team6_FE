import FestivalCard from "../atoms/FestivalCard";
import HorizontalListWrapper from "../atoms/HorizontalListWrapper";

const FestivalCardList = ({ festivals }) => {
  festivals = [
    {
      id: 1,
      name: "2023 부산 국제 락 페스티벌",
      summary: "부산 국제 락 페스티벌은...",
      image: "/image/festival/1",
      address: "",
      averageScore: 4.4,
      liked: true,
    },
    {
      id: 2,
      name: "2023 부산 국제 락 페스티벌",
      summary: "부산 국제 락 페스티벌은...",
      image: "/image/festival/1",
      address: "",
      averageScore: 4.4,
      liked: true,
    },
    {
      id: 3,
      name: "2023 부산 국제 락 페스티벌",
      summary: "부산 국제 락 페스티벌은...",
      image: "/image/festival/1",
      address: "",
      averageScore: 4.4,
      liked: true,
    },
  ];
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
