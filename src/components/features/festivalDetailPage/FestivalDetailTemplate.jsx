import PageTitleBar from "../../molecules/PageTitleBar";
import SectionTitle from "../../atoms/SectionTitle";
import InfoElement from "../restaurantDetailPage/atoms/InfoElement";
import { comma } from "../../../utils/convert";
import ReviewCards from "../../molecules/cards/ReviewCards";
import Carousel from "../carousel/Carousel";
import { imagesToSlides } from "../carousel/utils";
import ButtonAllReviews from "../restaurantDetailPage/atoms/ButtonAllReviews";
import { useState } from "react";
import { useQuery } from "react-query";
import { getReviewByIdAndType } from "../../../apis/review";
import BottomPopModal from "../../atoms/Modals/BottomPopModal";
import Calendar from "../calendar/Calendar";
import { getCalenderByIdAndType } from "../../../apis/detail";
import Button from "../../atoms/Button";
import Photo from "../../atoms/Photo";
import TimeDropdown from "../../molecules/TimeDropdown";
import CardTitle from "../../atoms/CardTitle";
import {reserveFestival} from "../../../apis/reservation";
import {useNavigate} from "react-router-dom";

const FestivalDetailTemplate = ({ festival }) => {
  const [isActiveReview, setIsActiveReview] = useState(false);
  const [isActiveCalender, setIsActiveCalender] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("Time To Visit");
  const [selectedPeople, setSelectedPeople] = useState(0);

  const navigate = useNavigate();

  const { data } = useQuery(`festival/review/${festival.id}`, () =>
    getReviewByIdAndType(festival.id, "festival"),
  );

  const { data: operatingInfo } = useQuery(
    `festival/unavailableDays/${festival.id}`,
    () => getCalenderByIdAndType(festival.id, "festival"),
  );

  const onReserve = async () => {
    if (!selectedDate || selectedTime === "Time To Visit") {
      alert("Please select date and time to visit");
      return;
    }
    if (!selectedDate) {
      alert("Please select date to visit");
      return;
    }
    const response = await reserveFestival(
      festival.id,
      selectedDate,
      selectedTime,
      selectedPeople,
    );
    if (response.success) {
      alert("Reservation success");
      setIsActiveCalender(false);
    } else {
      alert("Reservation failed");
    }
  };

  return (
    <div className={"festival-detail-template w-full"}>
      <PageTitleBar name={festival.name} />
      {(isActiveReview || isActiveCalender) && (
        <BottomPopModal
          onClose={() => {
            setIsActiveReview(false);
            setIsActiveCalender(false);
          }}
        >
          {isActiveReview && <ReviewCards reviews={data.reviews} />}
          {isActiveCalender && (
            <div className={"calendar-wrapper flex flex-col justify-center"}>
              <Calendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                unavailableDays={operatingInfo.holiday}
              />
              <div className={"time-select-form flex flex-col p-2 text-lg"}>
                <CardTitle title={"Visit Time"} />
                <div className={"dropdown-wrapper"}>
                  <TimeDropdown
                    startTime={operatingInfo.reservationAvailableStartTime}
                    endTime={operatingInfo.reservationAvailableEndTime}
                    interval={10}
                    value={selectedTime}
                    onChange={setSelectedTime}
                    startBreakTime={operatingInfo.breakStartTime}
                    endBreakTime={operatingInfo.breakEndTime}
                  />
                </div>
                <div className={"people-select-form flex flex-col"}>
                  <CardTitle title={"Number of People"} />
                  <input
                    className={
                      "people-select-input h-12 w-full rounded-md border-2 border-gray-300 p-2"
                    }
                    type={"number"}
                    placeholder={"Please enter number of people"}
                    value={selectedPeople}
                    onChange={(e) => {
                      if (e.target.value < 0) {
                        alert("Please enter positive number");
                        return;
                      }
                      setSelectedPeople(e.target.value);
                    }}
                  />
                </div>
                <Button
                  as="button"
                  onClick={onReserve}
                  variant="link"
                  className="rounded-button-[tripKoOrange] mt-4 flex h-12 w-full items-center justify-center rounded-full bg-tripKoOrange text-white"
                >
                  Reservation
                </Button>
              </div>
            </div>
          )}
        </BottomPopModal>
      )}
      <div
        className={
          "festival-image-wrapper width-flex-layout fixed top-0 w-full "
        }
      >
        <Photo
          src={festival.mainImage}
          alt={festival.name}
          className={"min-h-[50rem] w-full"}
          extendable={true}
        />
      </div>
      <div
        className={
          "festival-detail-content relative mt-[50rem] bg-white pb-[8rem]"
        }
      >
        <SectionTitle title={"Information"} />
        <div className={"detail-content-container px-2"}>
          {festival.description}
        </div>
        <div className={"information-card grid gap-2 px-4 py-2 md:grid-cols-2"}>
          <InfoElement title={"Address"} value={festival.address} />
          <InfoElement title={"Period"} value={festival.period} />
          <InfoElement title={"Price"} value={`₩${comma(festival.price)}`} />
        </div>
        <SectionTitle title={"Photo"} />
        <div className={"carousel-wrapper height-flex-layout-medium"}>
          <Carousel slides={imagesToSlides(festival.images)} />
        </div>
        <SectionTitle title={"Reviews"} />
        {data && <ReviewCards reviews={data.reviews.slice(0, 2)} />}
        <ButtonAllReviews onClick={() => setIsActiveReview(true)} />
        <Button
          className={"reservation-button"}
          onClick={() => {
            if (localStorage.getItem("token") === null) {
              alert("Please login to reserve")
              navigate("/login");
            }
            else {
              setIsActiveCalender(true);
            }
          }}
        >
          Reserve
        </Button>
      </div>
    </div>
  );
};

export default FestivalDetailTemplate;
