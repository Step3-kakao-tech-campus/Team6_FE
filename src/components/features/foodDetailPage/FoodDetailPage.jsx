import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getFoodById } from "../../../apis/detail";
import FoodDetailTemplate from "./FoodDetailTemplate";
import ErrorPage from "../ErrorPage/ErrorPage";
import LoadingPage from "../loadingPage/LoadingPage";

const FoodDetailPage = () => {
  const params = useParams().id;
  const { data, isLoading, error } = useQuery(`food${params}`, () =>
    getFoodById(params),
  );

  return (
    <div className={"food-detail-page w-full"}>
      {isLoading && <LoadingPage />}
      {data && <FoodDetailTemplate food={data} />}
      {error && <ErrorPage />}
    </div>
  );
};

export default FoodDetailPage;
