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

const RestaurantDetailTemplate = ({ restaurant }) => {
  const [isActiveCalender, setIsActiveCalender] = useState(false);
  const reservable = restaurant.reservable;
  return (
      <>
      <PageTitleBar name={restaurant.name} />
      <div
        className={"restaurant-image-wrapper overflow-hidden fixed w-full -z-10 width-flex-layout"}>
        <img
          className={"w-full object-cover"}
          src={restaurant.mainImage}
          alt={restaurant.name}
        />
      </div>
    <div className={"restaurant-detail-template flex w-full flex-col mt-[20rem] sm:mt-[30rem] bg-white pb-[4.2rem]"}>
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
        <ReviewCards placeId={restaurant.id} count={4} />
      </div>
      <ReservationCalender
        isActive={isActiveCalender}
        setIsActive={setIsActiveCalender}
      />
      <ButtonReserve
        onClick={() => setIsActiveCalender(true)}
        enable={reservable}
      />
    </div>
          </>
  );
};

export default RestaurantDetailTemplate;
