import { getRestaurantReviewById } from "../../apis/review";
import { useQuery } from "react-query";
import ReviewCard from "../molecules/ReviewCard";

const ReviewCards = ({ placeId, count }) => {
  const { data } = useQuery(`review${placeId}`, () =>
    getRestaurantReviewById(placeId),
  );
  return (
    <section className={"review-section"}>

      {data && (
        <div className={"review-cards flex flex-col gap-2 pb-2"}>
          {data.reviews
            .slice(0, count ? count : data.reviews.length)
            .map((review, index) => (
              <ReviewCard review={review} key={index} />
            ))}
        </div>
      )}
    </section>
  );
};

export default ReviewCards;
