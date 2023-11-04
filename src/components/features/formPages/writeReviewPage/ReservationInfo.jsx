import CardTitle from "../../../atoms/CardTitle";
import MapIcon from "../../../atoms/MapIcon";
import Photo from "../../../atoms/Photo";
import { useMemo } from "react";
import { getReserveText } from "../../reservationListPage/utils";
import Stamp from "../../../atoms/Stamp";

const ReservationInfo = ({ reservation, reviewable }) => {
  const status = useMemo(
    () => getReserveText(reservation.status),
    [reservation.status],
  );

  return (
    <div className="reservation-info-wrapper relative flex h-40 mx-4 ruonded-2xl overflow-hidden shadow-rounded-card cursor-default">
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
            className={"cursor-pointer"}
          ></CardTitle>
          <div className={"reservation-time "}>
            Time : {reservation?.date} {reservation?.time}
          </div>
          <div className={"reservation-location-wrapper flex items-center "}>
            <MapIcon color={"#FF4800"} />
            <div className={"reservation-location line-clamp-1 w-full"}>
              {reservation?.address}
            </div>
          </div>
          <div className={"reservation-message text-gray-500"}>
            {reservation?.message}{" "}
          </div>
        </div>
        <Stamp className={"absolute bottom-4 left-6 rotate-12 bg-white"}>
          {status}
        </Stamp>
      </div>
    </div>
  );
};

export default ReservationInfo;
