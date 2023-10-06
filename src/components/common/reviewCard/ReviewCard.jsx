import ReviewCardHeader from "./ReviewCardHeader";
import {useNavigate} from "react-router-dom";

const ReviewCard = ({ review }) => {
    const navigate = useNavigate();
  return (
    <div className={"review-card flex flex-col cursor-pointer gap-2 p-2 shadow-rounded-card"}
         onClick={() => navigate(`/review/${review.reviewId}`)}>
      <ReviewCardHeader
        image={review.authorImage}
        name={review.authorNickname}
        rating={review.rating}
      />
      <div className={"review-card-body"}>
        <p className={"review-paragraph line-clamp-3"}>{review.description}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
