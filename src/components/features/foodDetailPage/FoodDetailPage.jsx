import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getFoodById } from "../../../apis/detail";
import FoodDetailTemplate from "./FoodDetailTemplate";
import ErrorPage from "../ErrorPage/ErrorPage";

const FoodDetailPage = () => {
  const params = useParams().id;
  const { data, error } = useQuery(`food${params}`, () => getFoodById(params));

  return (
    <div className={"food-detail-page w-full"}>
      {data && <FoodDetailTemplate food={data} />}
      {error && <ErrorPage />}
    </div>
  );
};

export default FoodDetailPage;
