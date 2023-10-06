import { useNavigate } from "react-router-dom";
import CardTitle from "../atoms/CardTitle";
import StarRating from "../common/atoms/StarRating";

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
        <img
          src={review.authorImage}
          alt={review.authorNickname}
          className={
            "h-[4rem] w-[4rem] rounded-full border-4 border-tripKoOrange-300"
          }
        />
        <div className={"review-card-header-info justify-evenly"}>
          <CardTitle title={review.authorNickname} lineClamp={1}/>
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
