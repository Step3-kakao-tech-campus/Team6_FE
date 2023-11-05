import ReviewCard from "./ReviewCard";

const ReviewCards = ({ reviews }) => {
  return (
    <div className={"flex flex-col gap-4 px-2"}>
      {reviews.map((review, index) => (
        <ReviewCard review={review} key={index} />
      ))}
    </div>
  );
};

export default ReviewCards;
