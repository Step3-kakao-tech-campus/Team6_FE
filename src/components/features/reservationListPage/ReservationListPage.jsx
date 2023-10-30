import PageTitleBar from "../../molecules/PageTitleBar";
import { useQuery } from "react-query";
import { getReservation } from "../../../apis/reservation";
import ReservationListTemplate from "./ReservationListTemplate";

const ReservationListPage = () => {
  const { data, error, isLoading } = useQuery("reservationList", () =>
    getReservation(),
  );

  return (
    <div className={"w-full h-screen"}>
      <PageTitleBar name={"My Booking List"} />
      {data && <ReservationListTemplate reservations={data} />}
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </div>
  );
};

export default ReservationListPage;
