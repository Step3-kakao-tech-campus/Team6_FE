import ReviewCardHeader from "../atoms/ReviewCardHeader";

const ReviewCard = ({ review }) => {
  return (
    <div className={"review-card flex flex-col"}>
      <ReviewCardHeader
        image={review.authorImage}
        name={review.authorNickname}
        rating={review.rating}
      />
      <div className={"review-card__body"}>
        <p>{review.description}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
