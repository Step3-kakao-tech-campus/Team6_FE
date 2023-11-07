import SectionTitle from "../atoms/SectionTitle";
import Carousel from "../features/carousel/Carousel";
import { imagesToSlides } from "../features/carousel/utils";

const Article = ({ description, images }) => {
  return (
    <>
      <SectionTitle title={"Information"} />
      <div className={"detail-content-container px-2"}>
        {description}
      </div>
      <div className={"carousel-wrapper height-flex-layout-medium"}>
        <Carousel slides={imagesToSlides(images)} />
      </div>
    </>
  );
};

export default Article;
