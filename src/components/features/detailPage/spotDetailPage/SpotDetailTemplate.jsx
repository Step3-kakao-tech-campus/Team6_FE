import PageTitleBar from "../../../molecules/PageTitleBar";
import SectionTitle from "../../../atoms/SectionTitle";
import InfoElement from "../atoms/InfoElement";
import Photo from "../../../atoms/Photo";
import Article from "../../../organisms/Article";

const SpotDetailTemplate = ({ spot }) => {
  return (
    <div className={"spot-detail-template w-full"}>
      <PageTitleBar name={spot.name} />
      <div
        className={
          "spot-image-wrapper width-flex-layout fixed top-0 w-full "
        }
      >
        <Photo
          src={spot.mainImage}
          alt={spot.name}
          className={"min-h-[50rem] w-full"}
          extendable={true}
        />
      </div>
      <div
        className={
          "spot-detail-content relative mt-[30rem] bg-white pb-[8rem]"
        }
      >
        <SectionTitle title={"Information"}/>
        {spot.contents.map((content) => (
          <Article
              key={content.page}
              description={content.description}
              images={content.image}
          />
        ))}
        <div className={"information-card grid gap-2 px-4 py-2 md:grid-cols-2"}>
          <InfoElement title={"Address"} value={spot.address} />
        </div>
      </div>
    </div>
  );
};

export default SpotDetailTemplate;
