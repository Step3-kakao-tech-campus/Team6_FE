import { useState } from "react";
import { useQuery } from "react-query";
import { getMyReview } from "../../../apis/review";
import LoadingPage from "../loadingPage/LoadingPage";
import MyReviewCard from "../../molecules/cards/MyReviewCard";
import PageTitleBar from "../../molecules/PageTitleBar";
import FilterBar from "../../molecules/FilterBar";

const ReviewlistPage = () => {
  const [filter, setFilter] = useState("all");
  const {
    data: reviewsData,
    isLoading,
  } = useQuery("myreviews", getMyReview);

  if (isLoading) return <LoadingPage />;

  const getFilteredReviews = () => {
    switch (filter) {
      case "restaurants":
        return reviewsData?.restaurant || [];
      case "festivals":
        return reviewsData?.festival || [];
      case "touristSpots":
        return reviewsData?.touristSpot || [];
      default:
        return [
          ...(reviewsData?.restaurant || []),
          ...(reviewsData?.festival || []),
          ...(reviewsData?.touristSpot || []),
        ];
    }
  };

  const filteredReviews = getFilteredReviews();

  return (
    <div className="main-layout-page mb-4 min-h-screen w-full">
      <PageTitleBar name={"My Reviews"} />
      <FilterBar filter={filter} setFilter={setFilter} />

      <div className="review-cards flex-grow flex flex-col gap-4 px-2">
        {filteredReviews.length > 0 ? (
          filteredReviews.map((review) => (
            <MyReviewCard review={review} key={review.reviewId} />
          ))
        ) : (
          <div className="no-review-comment flex h-20 items-center justify-center">
            <h1 className="text-xl text-gray-400">There are no reviews</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewlistPage;
