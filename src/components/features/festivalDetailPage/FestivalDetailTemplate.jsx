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
import BottomPopModal from "../../atoms/BottomPopModal/BottomPopModal";
import Calender from "../calender/Calender";
import { getCalenderByIdAndType } from "../../../apis/detail";

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
            <Calender
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              unavailableDays={operatingInfo.holiday}
            />
          )}
        </BottomPopModal>
      )}
      <div
        className={
          "festival-image-wrapper width-flex-layout fixed top-0 -z-10 w-full overflow-hidden "
        }
      >
        <img
          src={festival.mainImage}
          alt={festival.name}
          className={"w-full"}
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
        <button onClick={() => setIsActiveCalender(true)}>Calender</button>
      </div>
    </div>
  );
};

export default FestivalDetailTemplate;
