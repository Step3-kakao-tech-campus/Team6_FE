import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getIsReviewed } from "../../../apis/review";

const ReviewlistPage = () => {
  const { type, placeId } = useParams();
  const { data } = useQuery("reviewlist", () => getIsReviewed());

  return (
    <div className="main-layout-page h-screen">
      <h1>ReviewlistPage</h1>
    </div>
  );
};

export default ReviewlistPage;
