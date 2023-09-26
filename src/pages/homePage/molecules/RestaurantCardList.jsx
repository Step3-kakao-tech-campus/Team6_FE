import HorizontalListWrapperMediaQuery from "../atoms/HorizontalListWrapperMediaQuery";
import PlaceCard from "../atoms/PlaceCard";

const RestaurantCardList = ({ restaurants }) => {
  restaurants = [
    {
      id: 1,
      name: "정문토스트",
      summary: "정문토스트는..",
      image: "/image/restaurant/1", // 필요없을 수 있다. id로 대체되기 때문에
      address: "장소",
      averageScore: 4.4,
      liked: true,
    },
    {
      id: 2,
      name: "정문토스트",
      summary: "정문토스트는..",
      image: "/image/restaurant/1", // 필요없을 수 있다. id로 대체되기 때문에
      address: "장소 좀 많이 긴 장소",
      averageScore: 4.4,
      liked: true,
    },
    {
      id: 3,
      name: "정문토스트 정문 토스트 정문 토스트 정문 토스트 정문 토스트",
      summary: "정문토스트는..",
      image: "/image/restaurant/1", // 필요없을 수 있다. id로 대체되기 때문에
      address: "장소 아주 많이 긴 장소 아주 많이 긴 장소",
      averageScore: 4.4,
      liked: true,
    },
  ];
  return (
    <HorizontalListWrapperMediaQuery>
      {restaurants.map((restaurant) => {
        return (
          <PlaceCard
            key={restaurant.id}
            image={restaurant.image}
            alt={`poster of ${restaurant.name}`}
            to={`restaurant/${restaurant.id}`}
            name={restaurant.name}
            address={restaurant.address}
          />
        );
      })}
    </HorizontalListWrapperMediaQuery>
  );
};

export default RestaurantCardList;
