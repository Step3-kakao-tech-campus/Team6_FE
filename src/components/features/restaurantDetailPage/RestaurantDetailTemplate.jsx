import PageTitleBar from "../../molecules/PageTitleBar";
import InformationSection from "./organisms/InformationSection";
import Carousel from "../carousel/Carousel";
import ButtonReserve from "./atoms/ButtonReserve";
import { useState } from "react";
import ReservationCalender from "./organisms/ReservationCalender";
import ReviewCards from "../../organisms/ReviewCards";
import { imagesToSlides } from "../carousel/utils";
import SectionTitle from "../../atoms/SectionTitle";
import HorizontalListSection from "../../atoms/HorizontalListSection";
import MenuCard from "../../molecules/MenuCard";
import ButtonAllReviews from "./atoms/ButtonAllReviews";

const RestaurantDetailTemplate = ({ restaurant }) => {
  const [isActiveCalender, setIsActiveCalender] = useState(false);
  const [isActiveReview, setIsActiveReview] = useState(false);
  return (
    <>
      <PageTitleBar name={restaurant.name} />
      <div
        className={
          "restaurant-image-wrapper width-flex-layout fixed -z-10 w-full overflow-hidden"
        }
      >
        <img
          className={"w-full object-cover"}
          src={restaurant.mainImage}
          alt={restaurant.name}
        />
      </div>
      <div
        className={
          "restaurant-detail-content mt-[20rem] flex w-full flex-col bg-white pb-[8rem] sm:mt-[30rem]"
        }
      >
        <div className={"detail-content-container px-2"}>
          <SectionTitle title={"Menu"} />
          <HorizontalListSection>
            {restaurant.menu.map((menu, index) => (
              <MenuCard menu={menu} key={index} />
            ))}
          </HorizontalListSection>
          <InformationSection restaurant={restaurant} />
        </div>
        <div className={"carousel-wrapper height-flex-layout-medium mt-4"}>
          <Carousel slides={imagesToSlides(restaurant.images)} />
        </div>
        <div className={"detail-content-container px-2"}>
          <SectionTitle title={"Reviews"} />
          <ReviewCards placeType={"restaurant"} placeId={restaurant.id} count={isActiveReview?0:4} />
            {!isActiveReview && <ButtonAllReviews onClick={() => setIsActiveReview(true)} />}
        </div>
        <ReservationCalender
          isActive={isActiveCalender}
          setIsActive={setIsActiveCalender}
        />

        <ButtonReserve
          onClick={() => setIsActiveCalender(true)}
          enable={restaurant.reservable}
        />
      </div>
    </>
  );
};

export default RestaurantDetailTemplate;
