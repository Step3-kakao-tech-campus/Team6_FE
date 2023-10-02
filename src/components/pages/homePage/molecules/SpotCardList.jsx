import PlaceCard from "../atoms/PlaceCard";
import HorizontalListWrapperMediaQuery from "../../../common/atoms/HorizontalListWrapperMediaQuery";

const SpotCardList = ({ spots }) => {
  return (
    <HorizontalListWrapperMediaQuery>
      {spots.map((spot, index) => (
        <PlaceCard
          key={index}
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
