import SectionTitle from "../atoms/SectionTitle";
import { getRestaurantReviewById } from "../../../../services/review";
import { useQuery } from "react-query";
import ReviewCard from "../molecules/ReviewCard";
import ButtonAllReviews from "../atoms/ButtonAllReviews";

const ReviewSection = ({ placeId }) => {
  const { data } = useQuery(`review${placeId}`, () =>
    getRestaurantReviewById(placeId),
  );
  console.log(data);
  return (
    <section className={"review-section"}>
      <SectionTitle title={"Reviews"} />
      {data && (
        <div className={"review-cards flex flex-col gap-2 pb-2"}>
          {data.reviews.slice(0, 2).map((review) => (
            <ReviewCard review={review} />
          ))}
          <ButtonAllReviews />
        </div>
      )}
    </section>
  );
};

export default ReviewSection;
