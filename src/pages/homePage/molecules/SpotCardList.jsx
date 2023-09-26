import PlaceCard from "../atoms/PlaceCard";
import HorizontalListWrapperMediaQuery from "../atoms/HorizontalListWrapperMediaQuery";

const SpotCardList = ({ spots }) => {
  spots = [
    {
      id: 1,
      name: "Signiel Busan",
      summary: "...",
      image: "image/touringSpot/1",
      address: "부산 해운대구",
      liked: true,
    },
    {
      id: 2,
      name: "Signiel Busan",
      summary: "...",
      image: "image/touringSpot/1",
      address: "부산 해운대구",
      liked: true,
    },
    {
      id: 3,
      name: "Signiel Busan",
      summary: "...",
      image: "image/touringSpot/1",
      address: "부산 해운대구",
      liked: true,
    },
  ];

  return (
    <HorizontalListWrapperMediaQuery>
      {spots.map((spot) => (
        <PlaceCard
          key={spot.id}
          image={spot.image}
          name={spot.name}
          address={spot.address}
          to={`touristSpot/${spot.id}`}
        />
      ))}
    </HorizontalListWrapperMediaQuery>
  );
};

export default SpotCardList;
