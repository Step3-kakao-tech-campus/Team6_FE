import {getRestaurantReviewById, getReviewByIdAndType} from "../../apis/review";
import { useQuery } from "react-query";
import ReviewCard from "../molecules/ReviewCard";

const ReviewCards = ({ placeId, placeType, count }) => {
  const { data } = useQuery(`${placeType}review${placeId}`, () =>
    getReviewByIdAndType(placeId, placeType)
  );
  return (
    <section className={"review-section"}>

      {data && (
        <div className={"review-cards flex flex-col gap-2 pb-2"}>
          {data.reviews
            .slice(0, count>0 ? count : data.reviews.length)
            .map((review, index) => (
              <ReviewCard review={review} key={index} />
            ))}
        </div>
      )}
    </section>
  );
};

export default ReviewCards;
