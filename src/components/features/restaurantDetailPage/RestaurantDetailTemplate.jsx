import PageTitleBar from "../../molecules/PageTitleBar";
import Carousel from "../carousel/Carousel";
import { useState } from "react";
import ReviewCards from "../../molecules/cards/ReviewCards";
import { imagesToSlides } from "../carousel/utils";
import SectionTitle from "../../atoms/SectionTitle";
import HorizontalListSection from "../carousel/HorizontalListSection";
import MenuCard from "../../molecules/cards/MenuCard";
import ButtonAllReviews from "./atoms/ButtonAllReviews";
import { useQuery } from "react-query";
import { getReviewByIdAndType } from "../../../apis/review";
import BottomPopModal from "../../atoms/Modals/BottomPopModal";
import InfoElement from "./atoms/InfoElement";
import { getCalenderByIdAndType } from "../../../apis/detail";
import Calendar from "../calendar/Calendar";
import Photo from "../../atoms/Photo";
import Button from "../../atoms/Button";
import TimeDropdown from "../../molecules/TimeDropdown";
import CardTitle from "../../atoms/CardTitle";
import { reserveRestaurant } from "../../../apis/reservation";

const RestaurantDetailTemplate = ({ restaurant }) => {
  const [isActiveReview, setIsActiveReview] = useState(false);
  const [isActiveCalender, setIsActiveCalender] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [requestMessage, setRequestMessage] = useState("");
  const [selectedTime, setSelectedTime] = useState("Time To Visit");
  const [selectedPeople, setSelectedPeople] = useState(0);

  const { data } = useQuery(`restaurant/review/${restaurant.id}`, () =>
    getReviewByIdAndType(restaurant.id, "restaurant"),
  );

  const { data: operatingInfo } = useQuery(
    `restaurant/unavailableDays/${restaurant.id}`,
    () => getCalenderByIdAndType(restaurant.id, "restaurant"),
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
    const response = await reserveRestaurant(
      restaurant.id,
      selectedDate,
      selectedTime,
      selectedPeople,
      requestMessage,
    );
    if (response.success) {
      alert("Reservation success");
      setIsActiveCalender(false);
    } else {
      alert("Reservation failed");
    }
  };

  return (
    <div className={"restaurant-detail-template w-full"}>
      <PageTitleBar name={restaurant.name} />
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
              <div className={"time-select-form flex flex-col py-2 text-lg"}>
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
                    onChange={(e) => setSelectedPeople(e.target.value)}
                  />
                </div>
              </div>
              <div className={"request-message-form"}>
                <CardTitle title={"Request Message"} />
                <textarea
                  className={
                    "request-message-input h-20 w-full rounded-md border-2 border-gray-300 p-2"
                  }
                  placeholder={"Please enter your request message"}
                  value={requestMessage}
                  onChange={(e) => setRequestMessage(e.target.value)}
                />
              </div>
              <Button
                as="button"
                onClick={onReserve}
                variant="link"
                className="rounded-button-[tripKoOrange] h-12 w-full rounded-full bg-tripKoOrange text-white"
              >
                Reserve
              </Button>
            </div>
          )}
        </BottomPopModal>
      )}
      <div
        className={
          "restaurant-image-wrapper width-flex-layout fixed top-0 w-full "
        }
      >
        <Photo
          src={restaurant.mainImage}
          alt={restaurant.name}
          className={"min-h-[30rem] w-full"}
          extendable={true}
        />
      </div>
      <div
        className={
          "restaurant-detail-content relative mt-[30rem] bg-white pb-[8rem]"
        }
      >
        <SectionTitle title={"Menu"} />
        <HorizontalListSection>
          {restaurant.menu.map((menu, index) => (
            <MenuCard menu={menu} key={index} />
          ))}
        </HorizontalListSection>
        <SectionTitle title={"Information"} />
        <div className={"detail-content-container px-2"}>
          {restaurant.description}
        </div>
        <div className={"information-card grid gap-2 px-4 py-2 md:grid-cols-2"}>
          <InfoElement title={"Address"} value={restaurant.address} />
          <InfoElement title={"Contact"} value={restaurant.contactInfo} />
          <InfoElement title={"Operating Hours"} value={restaurant.open} />
          <InfoElement title={"Break Time"} value={restaurant.breakTime} />
        </div>
        <SectionTitle title={"Photo"} />
        <div className={"carousel-wrapper height-flex-layout-medium"}>
          <Carousel slides={imagesToSlides(restaurant.images)} />
        </div>
        <SectionTitle title={"Reviews"} />
        {data && <ReviewCards reviews={data.reviews.slice(0, 2)} />}
        <ButtonAllReviews onClick={() => setIsActiveReview(true)} />
        <Button
          className={"reservation-button"}
          onClick={() => setIsActiveCalender(true)}
        >
          Reserve
        </Button>
      </div>
    </div>
  );
};

export default RestaurantDetailTemplate;
