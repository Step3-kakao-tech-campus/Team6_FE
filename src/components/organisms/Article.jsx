import Carousel from "../features/carousel/Carousel";
import { imagesToSlides } from "../features/carousel/utils";

const Article = ({ description, images }) => {
  return (
    <>
      {description && (
        <div className={"detail-content-container px-2"}>{description}</div>
      )}
      {images && (
        <div className={"carousel-wrapper height-flex-layout-medium"}>
          <Carousel slides={imagesToSlides(images)} />
        </div>
      )}
    </>
  );
};

export default Article;
