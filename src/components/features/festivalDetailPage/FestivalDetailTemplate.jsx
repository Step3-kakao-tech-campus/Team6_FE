import PageTitleBar from "../../molecules/PageTitleBar";
import SectionTitle from "../../atoms/SectionTitle";
import InfoElement from "../restaurantDetailPage/atoms/InfoElement";
import { comma } from "../../../utils/convert";
import ReviewCards from "../../organisms/ReviewCards";
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

const FestivalDetailTemplate = ({ festival }) => {
  const [isActiveReview, setIsActiveReview] = useState(false);
  const [isActiveCalender, setIsActiveCalender] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const { data } = useQuery(`festival/review/${festival.id}`, () =>
    getReviewByIdAndType(festival.id, "festival"),
  );

  const { data: operatingInfo } = useQuery(
    `festival/unavailableDays/${festival.id}`,
    () => getCalenderByIdAndType(festival.id, "festival"),
  );

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
              <Button
                as="button"
                onClick={() => alert("clicked!")}
                variant="link"
                className="rounded-button-[tripKoOrange] bg-tripKoOrange text-white w-full h-12 rounded-full"
              >
                Click me!{" "}
              </Button>
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
          className={"w-full min-h-[50rem]"}
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
        <Button className={"reservation-button"} onClick={() => setIsActiveCalender(true)}>Calender</Button>
      </div>
    </div>
  );
};

export default FestivalDetailTemplate;
