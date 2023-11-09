import ReviewCard from "./ReviewCard";
import useFetchReview from "../../../hooks/useFetchReview";
import { useMemo } from "react";

const ReviewCards = ({ placeId, count }) => {
  const { reviews, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useFetchReview(placeId);

  const isFull = useMemo(
    () => reviews.length > count && count !== undefined,
    [count, reviews?.length],
  );

  const isMoreReview = useMemo(
    () => !isFull && hasNextPage,
    [hasNextPage, isFull],
  );

  return (
    <div className={"flex flex-col gap-4 px-2"}>
      {reviews.slice(0, count)?.map((review, index) => (
        <ReviewCard review={review} key={index} />
      ))}
      {isMoreReview && (
        <div className={"flex h-20 items-center justify-center"}>
          <button
            className={"text-xl text-gray-400 hover:text-gray-500"}
            onClick={fetchNextPage}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? "Loading more..." : "Load More"}
          </button>
        </div>
      )}
      {!isMoreReview && !isFull && (
        <div className={"flex h-20 items-center justify-center"}>
          <h1 className={"text-xl text-gray-400"}>There is no more review</h1>
        </div>
      )}
    </div>
  );
};

export default ReviewCards;
