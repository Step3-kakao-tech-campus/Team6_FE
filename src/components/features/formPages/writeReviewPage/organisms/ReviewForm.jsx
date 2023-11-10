import ImageUploader from "../atoms/ImageUploader";
import ErrorBox from "../../../../atoms/ErrorBox";
import RatingInput from "../molecules/RatingInput";
import ImageModifier from "../atoms/ImageModifier";

const ReviewForm = ({
  file,
  setFile,
  reviewText,
  onChangeReviewText,
  score,
  setScore,
  errorMsg,
  initImage,
  setDeletedImage,
}) => {
  return (
    <div className={"review-form-container flex w-full flex-col"}>
      <div className={"review-form-form flex w-full flex-col p-2"}>
        <div className={"image-upload-wrapper"}>
          {initImage && setDeletedImage ? (
            <ImageModifier
              file={file}
              setFile={setFile}
              multiple={true}
              setDeletedImage={setDeletedImage}
              initImage={initImage}
            />
          ) : (
            <ImageUploader file={file} setFile={setFile} multiple={true} />
          )}
        </div>
        <div className={"review-form-text w-full"}>
          <textarea
            name="description"
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
      </div>
      {errorMsg && <ErrorBox>{errorMsg}</ErrorBox>}
    </div>
  );
};

export default ReviewForm;
