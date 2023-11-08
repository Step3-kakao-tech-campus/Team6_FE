import { useState } from "react";
import MapIcon from "../../atoms/MapIcon";
import WishButton from "../../atoms/WishButton";
import Photo from "../../atoms/Photo";

const TouristSpotCard = ({ touristSpot }) => {
  const [isWished, setIsWished] = useState(touristSpot.isWished);

  return (
    <div className="shadow-rounded-card mx-2 p-2">
      <div className="relative">
        <Photo
          className="h-32 w-full rounded-t-lg object-cover"
          src={touristSpot.image}
          alt={touristSpot.name}
        />
        <div className="absolute right-2 top-1">
          <WishButton
            filter={"touristSpot"}
            id={touristSpot.id}
            initialIsWished={isWished}
            onWishChange={(newWishState) => setIsWished(newWishState)}
          />
        </div>
      </div>
      <div className="touristSpot-inform flex h-20 w-full flex-col items-center justify-center">
        <h3 className="my-2 text-xl font-bold">{touristSpot.name}</h3>
        <div className="flex items-center">
          <MapIcon size={12} color={"#22c55e"} />
          <p className="text-xs">{touristSpot.address}</p>
        </div>
      </div>
    </div>
  );
};

export default TouristSpotCard;
