import CardTitle from "../../atoms/CardTitle";
import UserAvatar from "../../atoms/UserAvatar";
import StarRating from "../../atoms/StarRating";
import { useState } from "react";
import Photo from "../../atoms/Photo";

const ReviewCard = ({ review }) => {
  const [isExtended, setExtended] = useState(false);
  return (
    <div
      className={
        "review-card shadow-rounded-card flex cursor-pointer flex-col gap-2 p-2 "
      }
      onClick={() => setExtended(!isExtended)}
    >
      <div className={"review-card-header flex gap-2"}>
        <UserAvatar
          image={review.authorImage}
          onClick={() => console.log("userinfo")}
          className={"h-[4rem] w-[4rem] overflow-hidden rounded-full"}
        />
        <div className={"review-card-header-info flex flex-col justify-evenly"}>
          <CardTitle title={review.authorNickname} lineClamp={1} />
          <span className={"text-sm text-gray-500"}>{review.visitTime}</span>
          <div className={"review-rating text-sm text-gray-500 flex"}><StarRating averageScore={review.rating} />{review.rating.toFixed(1)}</div>
        </div>
      </div>
      <div className={"review-card-body"}>
        <p className={"review-paragraph " + (isExtended ? "" : "line-clamp-3")}>
          {review.description}
        </p>

        {isExtended && (
          <>
            <CardTitle title={"Photo"} />{" "}
            <div
              className={"review-photo-section flex h-[15rem] w-full overflow-x-scroll"}
            >
              <Photo
                className={"h-[15rem] w-[15rem] "}
                src={review.image}
                alt={""}
                extendable={true}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ReviewCard;
