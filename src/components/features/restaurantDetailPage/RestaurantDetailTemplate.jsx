import PageTitleBar from "../../molecules/PageTitleBar";
import InformationSection from "./organisms/InformationSection";
import Carousel from "../carousel/Carousel";
import ButtonReserve from "./atoms/ButtonReserve";
import { useState } from "react";
import ReservationCalender from "./organisms/ReservationCalender";
import ReviewSection from "./organisms/ReviewSection";
import {imagesToSlides} from "./utils";
import SectionTitle from "../../atoms/SectionTitle";
import HorizontalListSection from "../../atoms/HorizontalListSection";
import MenuCard from "../../molecules/MenuCard";

const RestaurantDetailTemplate = ({ restaurant }) => {
  const [isActiveCalender, setIsActiveCalender] = useState(false);
  const reservable = restaurant.reservable;
  return (
    <div className={"restaurant-detail-template flex w-full flex-col"}>
      <PageTitleBar name={restaurant.name}/>
      <div className={"restaurant-image-wrapper height-flex-layout-small overflow-hidden"}>
        <img
          className={"w-full object-cover"}
          src={restaurant.mainImage}
          alt={restaurant.name}
        />
      </div>
      <div className={"detail-content-container px-2"}>
          <SectionTitle title={"Menu"} />
          <HorizontalListSection>
              {restaurant.menu.map((menu, index) => (<MenuCard menu={menu} key={index}/>))}
          </HorizontalListSection>
        <InformationSection restaurant={restaurant} />
      </div>
      <div className={"carousel-wrapper height-flex-layout-medium mt-4"}>
        <Carousel slides={imagesToSlides(restaurant.images)} />
      </div>
      <div className={"detail-content-container px-2"}>
        <ReviewSection placeId={restaurant.id} />
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
  );
};

export default RestaurantDetailTemplate;
