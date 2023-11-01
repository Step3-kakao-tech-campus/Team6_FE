import SectionTitle from "../../../atoms/SectionTitle";
import { ModalContext } from "../../../../App";
import { useContext } from "react";
import ReservationInfo from "./ReservationInfo";

const ReviewForm = ({ reservation, onSubmit }) => {
  const { hide } = useContext(ModalContext);
  return (
    <>
      <div className={"review-form flex flex-col rounded-lg bg-white"}>
        <SectionTitle title={"Review"}>Review Form</SectionTitle>
        <ReservationInfo reservation={reservation} />
        <form onSubmit={onSubmit} className={"review-form__form flex flex-col"}>
          <div className={"review-form__form__input"}>
            <label htmlFor="review">Review</label>
            <textarea
              name="review"
              id="review"
              cols="30"
              rows="10"
              placeholder={"Write your review here"}
            />
          </div>
          <div className={"review-form__form__input"}>
            <label htmlFor="rating">Rating</label>
            <input
              type="number"
              name="rating"
              id="rating"
              placeholder={"Rating"}
            />
          </div>
          <button className={"review-form__form__submit"}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default ReviewForm;
