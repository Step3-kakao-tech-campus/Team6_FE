import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import TouristSpotDetailTemplate from "./TouristSpotDetailTemplate";
import ErrorPage from "../../ErrorPage/ErrorPage";
import LoadingPage from "../../loadingPage/LoadingPage";
import {getSpotById} from "../../../../apis/detail";

const TouristSpotDetailPage = () => {
  const params = useParams().id;
  const { data, isLoading, error } = useQuery(`Spot${params}`, () =>
    getSpotById(params),
  );
  return (
    <div className={"festival-detail-page w-full"}>
      {isLoading && <LoadingPage />}
      {data && <TouristSpotDetailTemplate touristSpot={data} />}
      {error && <ErrorPage />}
    </div>
  );
};

export default TouristSpotDetailPage;
