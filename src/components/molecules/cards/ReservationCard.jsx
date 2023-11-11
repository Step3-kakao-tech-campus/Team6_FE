import CardTitle from "../../atoms/CardTitle";
import MapIcon from "../../atoms/MapIcon";
import Photo from "../../atoms/Photo";
import Stamp from "../../atoms/Stamp";
import { getReserveText } from "../../features/reservationListPage/utils";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../../../App";
import ReviewFormReservation from "../../features/formPages/writeReviewPage/ReviewFormReservation";
import Button from "../../atoms/Button";
import { isReviewable } from "./utils";
import { BsFillPersonFill } from "react-icons/bs";

const ReservationCard = ({ reservation }) => {

  const navigate = useNavigate();
  const navigateToDetail = (e) => {
    e.stopPropagation();
    navigate(`/${reservation.type.toLowerCase()}/${reservation.id}`);
  };
  const { show } = useContext(ModalContext);

  return (
    <div className="reservation-card-wrapper ticket-card flex h-40 w-full">
      <Photo
        className={"reservation-image cutting-line h-40 w-[12rem] object-cover"}
        src={reservation.image}
        alt={reservation.name}
      />
      <div
        className={
          "reservation-info-wrapper flex w-full flex-col justify-between px-2 py-2 font-semibold text-gray-700"
        }
      >
        <div className={"reservation-content-top flex w-full flex-col"}>
          <CardTitle
            title={reservation?.name}
            onClick={navigateToDetail}
            className={"cursor-pointer"}
          ></CardTitle>
          <div className={"reservation-time "}>
            Time : {reservation?.date} {reservation?.time}
          </div>
          <div
            className={"reservation-location line-clamp-2 flex items-center "}
          >
            <MapIcon color={"#FF4800"} /> {reservation?.address}
          </div>
          <div className={"reservation-message text-gray-500"}>
            {reservation?.message}{" "}
          </div>
        </div>
        <div
          className={
            "reservation-content-bottom flex items-center justify-between"
          }
        >
          {isReviewable(
            reservation.status,
            reservation.date,
            reservation.time,
          ) && (
            <Button
              as={"button"}
              className={
                "reservation-bottom cursor-pointer text-tripKoOrange-500 underline"
              }
              onClick={(e) => {
                e.stopPropagation();
                show(<ReviewFormReservation reservation={reservation} />);
              }}
              aria-label={"write-review-button"}
            >
              Write Review
            </Button>
          )}
          {reservation?.status === "리뷰완료" && (
            <span
              className={
                "reservation-bottom cursor-pointer text-tripKoOrange-500"
              }
            >
              Reviewed
            </span>
          )}
        </div>
        <Stamp className={"absolute bottom-4 left-1 rotate-12 bg-white"}>
          {getReserveText(reservation.status)}
        </Stamp>
        <div
          className={
            "absolute bottom-2 right-2 flex text-2xl text-tripKoOrange-500"
          }
          aria-label={`the number of people reserved ${reservation.headCount}`}
        >
          <BsFillPersonFill color={"#ff4000"} size={30} />
          {reservation?.headCount}
        </div>
      </div>
    </div>
  );
};
export default ReservationCard;
