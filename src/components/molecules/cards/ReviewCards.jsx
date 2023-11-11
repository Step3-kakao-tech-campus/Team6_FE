import ReviewCard from "./ReviewCard";

const ReviewCards = ({ reviews }) => {
  return (
    <div className={"flex flex-col gap-4 px-2"}>
      {reviews.length === 0 && (
        <div className={"flex w-full justify-center pt-3"}>
          <span className={"text-xl text-gray-700"}>
            There are no reviews yet. Be the first to review this
          </span>
        </div>
      )}
      {reviews.map((review, index) => (
        <ReviewCard review={review} key={index} />
      ))}
    </div>
  );
};

export default ReviewCards;
