import CardTitle from "../../../atoms/CardTitle";
import MapIcon from "../../../atoms/MapIcon";

const ReservationCard = ({ reservation }) => {
  console.log(reservation);
  return (
    <div className="reservation-card-wrapper ticket-card flex h-40 w-full">
      <div className={"reservation-cutting-line cutting-line"} />
      <img
        className={"reservation-image h-40 w-[8rem] object-cover"}
        src={reservation.image}
        alt={reservation.name}
      />
      <div
        className={
          "reservation-info-wrapper flex w-full flex-col px-2 py-2 font-semibold text-gray-700"
        }
      >
        <CardTitle title={reservation?.name} />
        <div className={"reservation-time "}>
          Time : {reservation?.date} {reservation?.time}
        </div>
        <div className={"reservation-location line-clamp-2 flex items-center "}>
          <MapIcon color={"#FF4800"} /> {reservation?.address}
        </div>
        <div className={"reservation-message text-gray-500"}>{reservation?.message} </div>
      </div>
    </div>
  );
};

export default ReservationCard;
