import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getRestaurantById } from "../../../apis/detail";
import RestaurantDetailTemplate from "./RestaurantDetailTemplate";
import LoadingPage from "../loadingPage/LoadingPage";
import ErrorPage from "../ErrorPage/ErrorPage";

const RestaurantDetailPage = () => {
  const params = useParams().id;
  const { data, isLoading, error } = useQuery(`restaurant${params}`, () =>
    getRestaurantById(params),
  );
  return (
    <div className={"restaurant-detail-page w-full"}>
      {isLoading && <LoadingPage />}
      {data && <RestaurantDetailTemplate restaurant={data} />}
      {error & <ErrorPage />}
    </div>
  );
};

export default RestaurantDetailPage;
