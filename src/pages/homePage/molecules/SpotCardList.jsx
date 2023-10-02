import PlaceCard from "../atoms/PlaceCard";
import HorizontalListWrapperMediaQuery from "../atoms/HorizontalListWrapperMediaQuery";

const SpotCardList = ({ spots }) => {
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
