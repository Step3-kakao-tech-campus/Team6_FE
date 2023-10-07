import StarRating from "../atoms/StarRating";
import { Link } from "react-router-dom";
import { comma } from "../../../utils/convert";
import WishButton from "../atoms/WishButton";
import { FaMapMarkerAlt } from "react-icons/fa";

const FestivalCard = ({ festival }) => {
  return (
    <div className="mx-4 my-2 bg-white px-6 py-2 text-xl shadow-md">
      <div className="font-semibold text-[#FF4800]">{festival.name}</div>
      <div className="my-2 flex">
        <img src={festival.image} alt={festival.name} className="h-32 w-24" />
        <div>
          <div className="text-sm">{festival.period}</div>
          <div className="flex text-sm">
            {festival.address}
            <FaMapMarkerAlt size={15} className=" text-orange-500" />
          </div>
          <div className="flex">
            <StarRating averageScore={festival.averageScore} />
            <div>{festival.averageScore}</div>
            <Link to="/festivalReviewList">reviews</Link>
          </div>
          <div className="text-sm">{comma(festival.price)}₩~</div>
          <div>
            <WishButton initialIsWished={festival.liked} />
            <Link to="/festivalDetail">details...</Link>
          </div>
        </div>
      </div>
      <div>
        <div className="text-sm">{festival.summary}</div>
      </div>
    </div>
  );
};

export default FestivalCard;
