import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getFoodById } from "../../../apis/detail";
import FoodDetailTemplate from "./FoodDetailTemplate";

const FoodDetailPage = () => {
  const params = useParams().id;
  const { data } = useQuery(`food${params}`, () => getFoodById(params));

  return (
    <div className={"food-detail-page w-full"}>
      {data && <FoodDetailTemplate food={data} />}
    </div>
  );
};

export default FoodDetailPage;
