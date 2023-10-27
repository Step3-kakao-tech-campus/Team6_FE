import PageTitleBar from "../../molecules/PageTitleBar";
import Carousel from "../carousel/Carousel";
import { useState } from "react";
import ReviewCards from "../../organisms/ReviewCards";
import { imagesToSlides } from "../carousel/utils";
import SectionTitle from "../../atoms/SectionTitle";
import HorizontalListSection from "../../atoms/HorizontalListSection";
import MenuCard from "../../molecules/MenuCard";
import ButtonAllReviews from "./atoms/ButtonAllReviews";
import { useQuery } from "react-query";
import { getReviewByIdAndType } from "../../../apis/review";
import BottomPopModal from "../../atoms/Modals/BottomPopModal";
import InfoElement from "./atoms/InfoElement";
import AddressElement from "./atoms/AddressElement";
import { getCalenderByIdAndType } from "../../../apis/detail";
import Calendar from "../calendar/Calendar";
import Photo from "../../atoms/Photo";
import Button from "../../atoms/Button";

const RestaurantDetailTemplate = ({ restaurant }) => {
  const [isActiveReview, setIsActiveReview] = useState(false);
  const [isActiveCalender, setIsActiveCalender] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const { data } = useQuery(`restaurant/review/${restaurant.id}`, () =>
    getReviewByIdAndType(restaurant.id, "restaurant"),
  );

  const { data: operatingInfo } = useQuery(
    `restaurant/unavailableDays/${restaurant.id}`,
    () => getCalenderByIdAndType(restaurant.id, "restaurant"),
  );

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
            <Calendar
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              unavailableDays={operatingInfo.holiday}
            />
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
          <AddressElement title={"Address"} value={restaurant.address} />
          <AddressElement title={"Contact"} value={restaurant.contactInfo} />
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
        <Button className={"reservation-button"} onClick={() => setIsActiveCalender(true)}>Calender</Button>
      </div>
    </div>
  );
};

export default RestaurantDetailTemplate;
