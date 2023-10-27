import ReviewCard from "../molecules/ReviewCard";

const ReviewCards = ({ reviews }) => {
  return (
    <div className={"flex flex-col gap-4"}>
      {reviews.map((review, index) => (
        <ReviewCard review={review} key={index} />
      ))}
    </div>
  );
};

export default ReviewCards;
