import PageTitleBar from "../../molecules/PageTitleBar";
import SectionTitle from "../../atoms/SectionTitle";
import InfoElement from "../restaurantDetailPage/atoms/InfoElement";
import { comma } from "../../../utils/convert";
import ReviewCards from "../../organisms/ReviewCards";
import Carousel from "../carousel/Carousel";
import { imagesToSlides } from "../carousel/utils";
import ButtonAllReviews from "../restaurantDetailPage/atoms/ButtonAllReviews";
import {useState} from "react";

const FestivalDetailTemplate = ({ festival }) => {
    const [isActiveReview, setIsActiveReview] = useState(false);
  return (
    <>
      <PageTitleBar name={festival.name} />
      <div
        className={
          "festival-image-wrapper width-flex-layout fixed -z-10 w-full overflow-hidden"
        }
      >
        <img
          src={festival.mainImage}
          alt={festival.name}
          className={"w-full"}
        />
      </div>
      <div className={"festival-detail-content mt-[50rem] bg-white pb-[8rem]"}>
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
        <ReviewCards placeId={festival.id} placeType={"festival"} count={isActiveReview?0:4} />
          {!isActiveReview && <ButtonAllReviews onClick={() => setIsActiveReview(true)} />}
      </div>
    </>
  );
};

export default FestivalDetailTemplate;
