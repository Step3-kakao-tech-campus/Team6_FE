import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getRestaurantById } from "../../../../services/detail";
import RestaurantDetailTemplate from "../templates/RestaurantDetailTemplate";

const RestaurantDetailPage = () => {
  const params = useParams().id;
  const { data } = useQuery(`restaurant${params}`, () =>
    getRestaurantById(params),
  );

  return (
    <div className={"restaurant-detail-page w-full pb-[50px]"}>
      {data && <RestaurantDetailTemplate restaurant={data.result} />}
    </div>
  );
};

export default RestaurantDetailPage;
