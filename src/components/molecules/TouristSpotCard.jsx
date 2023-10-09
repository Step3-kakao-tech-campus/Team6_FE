import MapIcon from "../atoms/MapIcon";
import WishButton from "../atoms/WishButton";

const TouristSpotCard = ({ touristSpot }) => {
  return (
    <div className="shadow-rounded-card mx-2 p-2">
      <div className="relative">
        <img
          className="h-32 w-full rounded-t-lg object-cover"
          src={touristSpot.image}
          alt={touristSpot.name}
        />
        <div className="absolute right-2 top-1">
          <WishButton initialIsWished={touristSpot.liked} />
        </div>
      </div>
      <div className="flex h-16 w-full flex-col items-center justify-center">
        <h3 className="mb-2 text-xl font-bold">{touristSpot.name}</h3>
        <div className="flex items-center">
          <MapIcon size={12} color={"#22c55e"} />
          <p className="text-xs">{touristSpot.address}</p>
        </div>
      </div>
    </div>
  );
};

export default TouristSpotCard;
