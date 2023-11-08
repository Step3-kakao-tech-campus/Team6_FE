import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import SpotDetailTemplate from "./SpotDetailTemplate";
import ErrorPage from "../../ErrorPage/ErrorPage";
import LoadingPage from "../../loadingPage/LoadingPage";
import {getSpotById} from "../../../../apis/detail";

const SpotDetailPage = () => {
  const params = useParams().id;
  const { data, isLoading, error } = useQuery(`Spot${params}`, () =>
    getSpotById(params),
  );
  return (
    <div className={"festival-detail-page w-full"}>
      {isLoading && <LoadingPage />}
      {data && <SpotDetailTemplate spot={data} />}
      {error && <ErrorPage />}
    </div>
  );
};

export default SpotDetailPage;
