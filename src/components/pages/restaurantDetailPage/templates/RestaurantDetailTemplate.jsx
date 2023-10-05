import DetailTitleBar from "../molecules/DetailTitleBar";
import MenuSection from "../organisms/MenuSection";
import InformationSection from "../organisms/InformationSection";
import Carousel from "../../../common/organisms/Carousel";
import { imagesToSlides } from "../../../../utils/convert";
import ButtonReserve from "../atoms/ButtonReserve";
import { useState } from "react";
import ReservationCalender from "../organisms/ReservationCalender";
import ReviewSection from "../organisms/ReviewSection";
// import { useState } from "react";

const RestaurantDetailTemplate = ({ restaurant }) => {
  // const [width, setWidth] = useState(0);
  // const [height, setHeight] = useState(0);

  // const observer = new ResizeObserver((entries, observer) => {
  //   for (const entry of entries) {
  //     const { width, height } = entry.contentRect;
  //     setWidth(width);
  //     setHeight(height);
  //   }
  // });
  const [isActiveCalender, setIsActiveCalender] = useState(false);
  const reservable = restaurant.reservable;
  return (
    <div className={"restaurant-detail-template flex w-full flex-col"}>
      <DetailTitleBar
        name={restaurant.name}
        // resizeObserver={observer}
      />
      {/*<div*/}
      {/*  className={"dummy"}*/}
      {/*  style={{ width: `${width}px}`, height: `${height}px`}}*/}
      {/*></div>*/}
      <div
        className={
          "restaurant-image-wrapper height-flex-layout-small overflow-hidden"
        }
      >
        <img
          className={"w-full object-cover"}
          src={restaurant.mainImage}
          alt={restaurant.name}
        />
      </div>
      <div className={"detail-content-container px-2"}>
        <MenuSection menu={restaurant.menu} />
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
