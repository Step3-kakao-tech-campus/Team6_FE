import TOURIST_SPOTS from "./datas/touristSpots";

export const getTouristSpots = (length) => {
  const selectedKeys = ["id", "name", "summary", "address", "liked"];
  const touristSpot = Object.fromEntries(
    Object.entries(TOURIST_SPOTS[0]).filter(([key, value]) =>
      selectedKeys.includes(key),
    ),
  );
  touristSpot.image = "https://picsum.photos/200";
  return new Array(length).fill(touristSpot);
};

export const getTouristSpotDetail = (id) => {
  return TOURIST_SPOTS.find((restaurant) => restaurant.id === parseInt(id));
};
