import MapIcon from "../atoms/MapIcon";

const TouristSpotCard = ({ touristSpot }) => {
  return (
    <div className="shadow-rounded-card m-2 p-2">
      <img
        className="h-32 w-full rounded-t-lg object-cover"
        src={touristSpot.image}
        alt={touristSpot.name}
      />
      <div className="flex h-28 w-full flex-col items-center justify-center">
        <h3 className="mb-2 text-xl font-bold">{touristSpot.name}</h3>
        <div className="flex">
          <MapIcon size={15} color="#22c55e" />
          <p className="text-sm">{touristSpot.address}</p>
        </div>
      </div>
    </div>
  );
};

export default TouristSpotCard;
