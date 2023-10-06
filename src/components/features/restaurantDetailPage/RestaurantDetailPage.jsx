import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getRestaurantById } from "../../../apis/detail";
import RestaurantDetailTemplate from "./RestaurantDetailTemplate";

const RestaurantDetailPage = () => {
  const params = useParams().id;
  const { data } = useQuery(`restaurant${params}`, () =>
    getRestaurantById(params),
  );

  return (
    <div className={"restaurant-detail-page w-full"}>
      {data && <RestaurantDetailTemplate restaurant={data.result} />}
    </div>
  );
};

export default RestaurantDetailPage;
