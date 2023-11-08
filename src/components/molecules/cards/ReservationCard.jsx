import CardTitle from "../../atoms/CardTitle";
import MapIcon from "../../atoms/MapIcon";
import Photo from "../../atoms/Photo";
import Stamp from "../../atoms/Stamp";
import { getReserveText } from "../../features/reservationListPage/utils";
import { useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../../../App";
import ReviewForm from "../../features/formPages/writeReviewPage/ReviewForm";
import { useQuery } from "react-query";
import { getIsReviewed } from "../../../apis/review";
import Button from "../../atoms/Button";

const ReservationCard = ({ reservation, reviewable }) => {
  const status = useMemo(
    () => getReserveText(reservation.status),
    [reservation.status],
  );

  const { data } = useQuery(
    `isReviewable${reservation.type}/${reservation.id}`,
    () => {
      return getIsReviewed(reservation.id, reservation.type);
    },
  );

  const navigate = useNavigate();
  const navigateToDetail = (e) => {
    e.stopPropagation();
    navigate(`/${reservation.type}/${reservation.id}`);
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
          {reviewable && !data?.reviewed && (
            <Button
              as={"button"}
              className={
                "reservation-bottom cursor-pointer text-tripKoOrange-500 underline"
              }
              onClick={(e) => {
                e.stopPropagation();
                show(<ReviewForm reservation={reservation} />);
              }}
            >
              Write Review
            </Button>
          )}
          {data?.reviewed && (
            <span
              className={"reservation-bottom cursor-pointer text-tripKoOrange-500 underline"}
              onClick={(e) => {
                e.stopPropagation();
                show(<ReviewForm reservation={reservation} />);
              }}
            >
              Modify Review
            </span>
          )}
        </div>
        <Stamp className={"absolute bottom-4 left-1 rotate-12 bg-white"}>
          {status}
        </Stamp>
      </div>
    </div>
  );
};
export default ReservationCard;
