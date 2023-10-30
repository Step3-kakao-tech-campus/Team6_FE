import PageTitleBar from "../../molecules/PageTitleBar";
import ReservationCard from "./organisms/ReservationCard";
import { sortReservation } from "./utils";
import { useMemo } from "react";

const ReservationListTemplate = ({ reservations }) => {

  const sortedReservation = useMemo(() => {
    if (!reservations) return [];
    return sortReservation([
      ...reservations.restaurant,
      ...reservations.festival,
    ]);
  }, [reservations]);

  return (
    <>
      <PageTitleBar name={"My Booking List"} />
      {reservations.length === 0 ? (
        <div className={"text-center text-2xl font-bold"}>
          You have no reservations yet.
        </div>
      ) : (
        <div className={"grid grid-cols-1 gap-4 sm:grid-cols-2 px-2"}>
          {sortedReservation.map((reservation) => (
            <ReservationCard key={reservation.id} reservation={reservation} />
          ))}
        </div>
      )}
    </>
  );
};

export default ReservationListTemplate;
