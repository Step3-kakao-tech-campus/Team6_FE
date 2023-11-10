import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { modifyReview } from "../../../../apis/review";
import Button from "../../../atoms/Button";
import ReviewForm from "../writeReviewPage/organisms/ReviewForm";

const EditReviewTemplate = ({
  prevReview: {
    placeId,
    placeName,
    address,
    type,
    rating: initRating,
    description: initDescription,
    image: initImage,
    visitDay,
  },
}) => {
  const [rating, setRating] = useState(initRating);
  const [file, setFile] = useState(""); // 이미지 파일
  const [description, setDescription] = useState(initDescription); // 리뷰 텍스트
  const [errorMsg, setErrorMsg] = useState(null); // 에러 메시지
  const [deleteFile, setDeleteFile] = useState([]); // 삭제할 파일];

  const onChangeReviewText = (e) => {
    setDescription(e.target.value);
  };

  const navigate = useNavigate();

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
    try {
      const result = await modifyReview[type](
        placeId,
        rating,
        description,
        file,
        deleteFile,
      );
      alert("Successfully modified review")
      navigate(-1);
    } catch (e) {
      alert("Failed to modify review due to server error");
      return;
    }
  };
  return (
    <div
      className={
        "edit-review-template flex w-full flex-col items-center pb-[4rem]"
      }
    >
      <div
        className={"place-name text-2xl font-semibold text-tripKoOrange-500"}
      >
        {placeName}
      </div>
      <div className={"place-address text-lg"}>{address}</div>
      <ReviewForm
        file={file}
        setFile={setFile}
        reviewText={description}
        onChangeReviewText={onChangeReviewText}
        score={rating}
        setScore={setRating}
        errorMsg={errorMsg}
        initImage={initImage}
        setDeletedImage={setDeleteFile}
      />
      <Button
        as={"button"}
        className={
          "review-form-submit-button rounded-full bg-tripKoOrange p-2 px-4 text-lg font-semibold text-white"
        }
        onClick={handleSubmit}
      >
        Edit Review
      </Button>
    </div>
  );
};

export default EditReviewTemplate;
