import SectionTitle from "../../../atoms/SectionTitle";
import { ModalContext } from "../../../../App";
import { useContext, useState } from "react";
import ReservationInfo from "./ReservationInfo";
import Button from "../../../atoms/Button";
import RatingInput from "./organisms/RatingInput";
import ImageUploader from "./atoms/ImageUploader";
import ErrorBox from "../../../atoms/ErrorBox";
import {postReview} from "../../../../apis/review";

const ReviewForm = ({ reservation, onSubmit }) => {

  const [score, setScore] = useState(0);
  const [file, setFile] = useState(""); // 이미지 파일
  const [errorMsg, setErrorMsg] = useState(null); // 에러 메시지
  const [reviewText, setReviewText] = useState(""); // 리뷰 텍스트
  const onChangeReviewText = (e) => {
    setReviewText(e.target.value);
  }
  const { hide } = useContext(ModalContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (score === 0) {
      setErrorMsg("Please select score");
      return;
    }
    if (reviewText === "") {
      setErrorMsg("Please write review");
      return;
    }
    console.log('file', file)
    const result = await postReview[reservation.type](reservation.id, score, reviewText, file);
    alert(result.message);
    hide();
  };

  return (
    <div
      className={
        "review-form width-flex-layout relative flex flex-col rounded-lg bg-white px-2 gap-4 pb-4"
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
      <form
        onSubmit={onSubmit}
        className={"review-form-form flex w-full flex-col p-2"}
      >
        <div className={"image-upload-wrapper"}>
          <ImageUploader file={file} setFile={setFile} />
        </div>
        <div className={"review-form-text w-full"}>
          <textarea
            name="review"
            id="review"
            cols="30"
            rows="10"
            className={"h-40 w-full rounded-md border-2 border-gray-300 p-2"}
            placeholder={"Write your review here"}
            value={reviewText}
            onChange={onChangeReviewText}
          />
        </div>
        <div className={"review-form-score flex flex-col items-center"}>
          <RatingInput score={score} setScore={setScore} />
          <span
            className={
              "selected-score text-3xl font-semibold text-tripKoOrange-500"
            }
          >
            {score.toFixed(1)}/5.0
          </span>
        </div>
      </form>
      {errorMsg && <ErrorBox>{errorMsg}</ErrorBox>}
      <Button as={"button"} className={"review-form-submit-button p-2 px-4 font-semibold text-lg bg-tripKoOrange text-white rounded-full"} onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default ReviewForm;
