import ReservationCard from "../../molecules/cards/ReservationCard";
import {sortReservation} from "./utils";
import { useMemo } from "react";

const ReservationListTemplate = ({ reservations }) => {

  const sortedReservation = useMemo(() => {

    if (!reservations) return [];

    reservations?.restaurant.forEach(
      (reservation) => (reservation.type = "RESTAURANT"),
    );
    reservations?.festival.forEach(
      (reservation) => (reservation.type = "FESTIVAL"),
    );
    return sortReservation([
      ...reservations.restaurant,
      ...reservations.festival,
    ]);
  }, [reservations]);

  return (
    <>
      {reservations.length === 0 ? (
        <div className={"text-center text-2xl font-bold"}>
          You have no reservations yet.
        </div>
      ) : (
        <div className={"grid grid-cols-1 gap-4 px-2 sm:grid-cols-2"}>
          {sortedReservation.map((reservation) => (
            <ReservationCard key={reservation.id} reservation={reservation}/>
          ))}
        </div>
      )}
    </>
  );
};

export default ReservationListTemplate;
