import { comma } from "../../utils/convert";
import WishButton from "../atoms/WishButton";
import MapIcon from "../atoms/MapIcon";

const FestivalCard = ({ festival }) => {
  return (
    <div className="shadow-rounded-card mx-3 p-3">
      <div className="flex">
        <img src={festival.image} alt={festival.name} className="h-32 w-24" />
        <div className="ml-2 w-full items-center">
          <div className="flex items-start justify-between">
            <h4 className="text-lg font-semibold">{festival.name}</h4>
            <WishButton initialIsWished={festival.liked} />
          </div>

          <div className="mt-1 flex items-center">
            <MapIcon size={10} color={"#FF4800"} />
            <span className="ml-1 text-xs">{festival.address}</span>
          </div>
          <div className="mt-1 text-xs">{festival.period}</div>
          <div className="mt-1 text-xs text-indigo-900">
            {comma(festival.price)} ₩~
          </div>
        </div>
      </div>
      <div className="clamp-3 text-gray-400">{festival.summary}</div>
    </div>
  );
};

export default FestivalCard;
