import PageTitleBar from "../../../molecules/PageTitleBar";
import SectionTitle from "../../../atoms/SectionTitle";
import InfoElement from "../atoms/InfoElement";
import { comma } from "../../../../utils/convert";
import ReviewCards from "../../../molecules/cards/ReviewCards";
import ButtonAllReviews from "../atoms/ButtonAllReviews";
import { useState } from "react";
import { useQuery } from "react-query";
import BottomPopModal from "../../../atoms/Modals/BottomPopModal";
import Calendar from "../../calendar/Calendar";
import { getCalenderByIdAndType } from "../../../../apis/detail";
import Button from "../../../atoms/Button";
import Photo from "../../../atoms/Photo";
import CardTitle from "../../../atoms/CardTitle";
import { reserveFestival } from "../../../../apis/reservation";
import { useNavigate } from "react-router-dom";
import Article from "../../../organisms/Article";
import { getReviewByIdAndType } from "../../../../apis/review";

const FestivalDetailTemplate = ({ festival }) => {
  const [isActiveReview, setIsActiveReview] = useState(false);
  const [isActiveCalender, setIsActiveCalender] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPeople, setSelectedPeople] = useState(1);
  const [isReserving, setIsReserving] = useState(false);
  const navigate = useNavigate();

  const { data: operatingInfo } = useQuery(
    `festival/unavailableDays/${festival.id}`,
    () => getCalenderByIdAndType(festival.id, "festival"),
  );

  const { data } = useQuery(`festival/review/${festival.id}`, () =>
    getReviewByIdAndType(festival.id, "FESTIVAL"),
  );

  const onReserve = async () => {
    if (!selectedDate) {
      alert("Please select date to visit");
      return;
    }
    if (!selectedPeople) {
      alert("Please enter number of people");
      return;
    }
    // date 를 YYYY-MM-DD 형식으로 변환
    const dateString = selectedDate.toISOString().split("T")[0];
    setIsReserving(true);
    try {
      await reserveFestival(festival.id, dateString, selectedPeople);
      alert("Reservation success");
      setIsActiveCalender(false);
    } catch (error) {
      alert("Reservation failed");
    } finally {
      setIsReserving(false);
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
                startDate={operatingInfo.startDate}
                endDate={operatingInfo.endDate}
              />
              <div className={"time-select-form flex flex-col p-2 text-lg"}>
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
                      if (e.target.value <= 0 && e.target.value !== "") {
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
                  className="rounded-button-[tripKoOrange] mt-4 flex h-12 w-full items-center justify-center rounded-full bg-tripKoOrange text-white font-bold text-xl"
                  aria-label="reserve-button"
                  disabled={isReserving}
                >
                  Reserve
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
          "festival-detail-content relative mt-[20rem] bg-white pb-[8rem]"
        }
      >
        <SectionTitle title={"Information"} />
        {festival.contents.map((content) => (
          <Article
            key={content.page}
            description={content.description}
            images={content.image}
          />
        ))}
        <div className={"information-card grid gap-2 px-4 py-2 md:grid-cols-2"}>
          <InfoElement title={"Address"} value={festival.address} />
          <InfoElement title={"Period"} value={festival.period} />
          <InfoElement title={"Price"} value={`₩${comma(festival.price)}`} />
        </div>
        <SectionTitle title={"Reviews"} />
        <div className={"flex flex-row items-center justify-between font-bold text-2xl px-2 text-tripKoOrange-500"}>
          {festival?.averageRating}/5.0
        </div>
        {data && <ReviewCards reviews={data.reviews.slice(0, 2)} />}
        <ButtonAllReviews onClick={() => setIsActiveReview(true)} />
        <Button
          as={"button"}
          className={"reservation-button"}
          onClick={() => {
            if (localStorage.getItem("token") === null) {
              alert("Please login to reserve");
              navigate("/login");
            } else {
              setIsActiveCalender(true);
            }
          }}
          disabled={!festival?.isReservable}
          aria-label="reservation-button"
        >
          Reserve
        </Button>
      </div>
    </div>
  );
};

export default FestivalDetailTemplate;
