import ReviewCard from "./ReviewCard";

const ReviewCards = ({ reviews }) => {
  return (
    <div className={"flex flex-col gap-4 px-2"}>
      {reviews.map((review, index) => (
        <ReviewCard review={review} key={index} />
      ))}
      {reviews.length === 0 && (
        <div className={"flex h-20 items-center justify-center"}>
          <h1 className={"text-xl text-gray-400"}>There is no review</h1>
        </div>
      )}
    </div>
  );
};

export default ReviewCards;
