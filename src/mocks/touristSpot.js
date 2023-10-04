import TOURIST_SPOTS from "./datas/touristSpots";

export const getTouristSpotCards = (length) => {
  const selectedKeys = ["id", "name", "address", "liked"];
  const touristSpotCard = Object.fromEntries(
    Object.entries(TOURIST_SPOTS[0]).filter(([key, value]) =>
      selectedKeys.includes(key),
    ),
  );
  touristSpotCard.image = "https://picsum.photos/200";
  return new Array(length).fill(touristSpotCard);
};

export const getTouristSpotDetail = (id) => {
  return TOURIST_SPOTS.find((touristSpot) => touristSpot.id === id);
};
