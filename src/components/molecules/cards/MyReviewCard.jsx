import { useState } from "react";
import CardTitle from "../../atoms/CardTitle";
import StarRating from "../../atoms/StarRating";
import Photo from "../../atoms/Photo";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "../../atoms/Button";
import { deleteReview } from "../../../apis/review";

const MyReviewCard = ({ review }) => {
  const [isExtended, setExtended] = useState(false);

  const onDeleteReview = async () => {
    try {
      await deleteReview(review.reviewId);
      alert("review deleted");
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="review-card shadow-rounded-card relative flex flex-col gap-2 p-4">
      <div className={"review-control-buttons absolute right-3 top-3 flex gap-4"}>
        <Link
          to={`/reviews/${review.reviewId}`}
          className="review-card-header flex gap-2"
        >
          <FiEdit size={30} color={"#444444"} />
        </Link>
        <Button
          as={"button"}
          className={"review-card-header flex gap-2"}
          onClick={onDeleteReview}
        >
          <FiTrash2 size={30} color={"#ff7777"} />
        </Button>
      </div>

      <div className="review-card-header-info flex flex-col justify-evenly">
        <CardTitle title={review.placeName} lineClamp={1} />
        <span className="text-sm text-gray-500">{review.visitDay}</span>
        <div className="review-rating flex text-sm text-gray-500">
          <StarRating averageRating={review.rating} />
          {review.rating.toFixed(1)}
        </div>
      </div>

      <div className="review-card-body">
        <p className={"review-paragraph " + (isExtended ? "" : "line-clamp-3")}>
          {review.description}
        </p>

        {!isExtended && (
          <button
            onClick={() => setExtended(true)}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            <MdKeyboardArrowDown className="inline-block" />
            Read More
          </button>
        )}

        {isExtended && (
          <button
            onClick={() => setExtended(false)}
            className="mt-2 text-sm text-gray-500 hover:text-gray-700"
          >
            <MdKeyboardArrowUp className="inline-block" />
            Read Less
          </button>
        )}

        <div className="review-photo-section mt-2 flex h-[15rem] w-full overflow-x-scroll">
          <Photo
            className="h-[15rem] w-[15rem]"
            src={review.image}
            alt="Review Image"
            extendable={true}
          />
        </div>
      </div>
    </div>
  );
};

export default MyReviewCard;
