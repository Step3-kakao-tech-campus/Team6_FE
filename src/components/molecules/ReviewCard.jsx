import { useNavigate } from "react-router-dom";
import CardTitle from "../atoms/CardTitle";
import UserAvatar from "../atoms/UserAvatar";
import StarRating from "../atoms/StarRating";

const ReviewCard = ({ review }) => {
  const navigate = useNavigate();
  return (
    <div
      className={
        "review-card shadow-rounded-card flex cursor-pointer flex-col gap-2 p-2"
      }
      onClick={() => navigate(`/review/${review.reviewId}`)}
    >
      <div className={"review-card-header flex gap-2"}>
        <div className={"review-card-header-image w-[4rem] h-[4rem] rounded-full overflow-hidden "}>
        <UserAvatar image={review.authorImage} onClick={()=>console.log("userinfo")}/>
        </div>
        <div className={"review-card-header-info justify-evenly flex flex-col"}>
          <CardTitle title={review.authorNickname} lineClamp={1}/>
            <span className={"text-sm text-gray-500"}>{review.visitTime}</span>
          <StarRating averageScore={review.rating} />
        </div>
      </div>
      <div className={"review-card-body"}>
        <p className={"review-paragraph line-clamp-3"}>{review.description}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
