import PageTitleBar from "../../../molecules/PageTitleBar";
import SectionTitle from "../../../atoms/SectionTitle";
import InfoElement from "../atoms/InfoElement";
import Photo from "../../../atoms/Photo";
import Article from "../../../organisms/Article";
import ReviewCards from "../../../molecules/cards/ReviewCards";
import ButtonAllReviews from "../atoms/ButtonAllReviews";
import {useContext, useState} from "react";
import { useQuery } from "react-query";
import { getReviewByIdAndType } from "../../../../apis/review";
import BottomPopModal from "../../../atoms/Modals/BottomPopModal";
import Button from "../../../atoms/Button";
import {ModalContext} from "../../../../App";
import ReviewFormTouristSpot from "../../formPages/writeReviewPage/ReviewFormTouristSpot";

const TouristSpotDetailTemplate = ({ touristSpot }) => {
  const [isActiveReview, setIsActiveReview] = useState(false);

  const { data } = useQuery(`touristSpot/review/${touristSpot.id}`, () =>
    getReviewByIdAndType(touristSpot.id, "touristSpot"),
  );

  const { show } = useContext(ModalContext);
  return (
    <div className={"touristSpot-detail-template w-full"}>
      {isActiveReview && (
        <BottomPopModal
          onClose={() => {
            setIsActiveReview(false);
          }}
        >
          {isActiveReview && <ReviewCards reviews={data.reviews} />}
        </BottomPopModal>
      )}
      <PageTitleBar name={touristSpot.name} />
      <div
        className={"touristSpot-image-wrapper width-flex-layout fixed top-0 w-full "}
      >
        <Photo
          src={touristSpot.mainImage}
          alt={touristSpot.name}
          className={"min-h-[50rem] w-full"}
          extendable={true}
        />
      </div>
      <div
        className={"touristSpot-detail-content relative mt-[30rem] bg-white pb-[6rem]"}
      >
        <SectionTitle title={"Information"} />
        {touristSpot.contents.map((content) => (
          <Article
            key={content.page}
            description={content.description}
            images={content.image}
          />
        ))}
        <div className={"information-card grid gap-2 px-4 py-2 md:grid-cols-2"}>
          <InfoElement title={"Address"} value={touristSpot.address} />
        </div>
        <SectionTitle title={"Reviews"} />
        {data && <ReviewCards reviews={data.reviews.slice(0, 2)} />}
        <ButtonAllReviews onClick={() => setIsActiveReview(true)} />
        <div className={"review-input-wrapper flex flex-col gap-2"}>
          <Button
            as={"button"}
            className={
              "review-button rounded-full bg-tripKoOrange px-4 py-2 font-bold text-white"
            }
            onClick={(e) => {
              e.stopPropagation();
              show(<ReviewFormTouristSpot touristSpot={touristSpot} />);
            }}
          >
            Review
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TouristSpotDetailTemplate;
