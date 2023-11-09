import { useQuery } from "react-query";
import { getMyReview } from "../../../apis/review";
import LoadingPage from "../loadingPage/LoadingPage";

const ReviewlistPage = () => {
  const { data, isLoading, error } = useQuery("myreviews", () => getMyReview());

  console.log(data?.restaurant);

  return (
    <div className="main-layout-page h-screen">
      <h1>ReviewlistPage</h1>
      {/* <div>{data?.restaurants.map((restaurant) => {})}</div> */}
      {isLoading && <LoadingPage />}
    </div>
  );
};

export default ReviewlistPage;
