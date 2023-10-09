import ReviewCard from "../molecules/ReviewCard";

const ReviewCards = ({ reviews }) => {
  return (
    <>
      {reviews.map((review, index) => (
        <ReviewCard review={review} key={index} />
      ))}
    </>
  );
};

export default ReviewCards;
