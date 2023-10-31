import CardTitle from "../../../atoms/CardTitle";
import MapIcon from "../../../atoms/MapIcon";
import Photo from "../../../atoms/Photo";
import Stamp from "../atoms/Stamp";
import { getReserveText } from "../utils";
import { useMemo } from "react";
import {useNavigate} from "react-router-dom";

const ReservationCard = ({ reservation, reviewable }) => {

  const status = useMemo(
    () => getReserveText(reservation.status),
    [reservation.status],
  );

  const navigate = useNavigate();
  const navigateToDetail = (e) => {
    e.stopPropagation();
    navigate(`/${reservation.type}/${reservation.id}`);
  };
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
          {reviewable && (
            <button
              className={"reservation-bottom underline text-tripKoOrange-500 cursor-pointer"}
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/review/${reservation.type}/${reservation.id}`);
              }}
            >
              Submit Review
            </button>
          )}
        </div>
        <Stamp className={"absolute bottom-4 right-4 -rotate-12"}>
          {status}
        </Stamp>
      </div>
    </div>
  );
};

export default ReservationCard;
