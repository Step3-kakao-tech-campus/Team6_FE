import SectionTitle from "../../../atoms/SectionTitle";
import { ModalContext } from "../../../../App";
import { useContext, useState } from "react";
import ReservationInfo from "./ReservationInfo";
import Button from "../../../atoms/Button";
import { postReview } from "../../../../apis/review";
import ReviewForm from "./organisms/ReviewForm";

const ReviewFormReservation = ({ reservation }) => {
  const [rating, setRating] = useState(0);
  const [file, setFile] = useState(""); // 이미지 파일
  const [errorMsg, setErrorMsg] = useState(null); // 에러 메시지
  const [description, setDescription] = useState(""); // 리뷰 텍스트
  const onChangeReviewText = (e) => {
    setDescription(e.target.value);
  };
  const { hide } = useContext(ModalContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0) {
      setErrorMsg("Please select score");
      return;
    }
    if (description === "") {
      setErrorMsg("Please write review");
      return;
    }
    const result = await postReview[reservation.type](
      reservation.placeId,
      rating,
      description,
      file,
    );
    alert(result.message);
    hide();
  };

  return (
    <div
      className={
        "review-form-modal width-flex-layout relative flex flex-col gap-4 rounded-lg bg-white px-2 pb-4"
      }
    >
        <div
          className={
            "review-form-header sticky top-0 z-10 flex items-center justify-between bg-white"
          }
        >
          <SectionTitle title={"Review"}>Review Form</SectionTitle>
        </div>
        <ReservationInfo reservation={reservation} />
      <ReviewForm file={file} setFile={setFile} reviewText={description} onChangeReviewText={onChangeReviewText} score={rating} setScore={setRating} errorMsg={errorMsg} />
      <Button
          as={"button"}
          className={
            "review-form-submit-button rounded-full bg-tripKoOrange p-2 px-4 text-lg font-semibold text-white"
          }
          onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
};

export default ReviewFormReservation;
