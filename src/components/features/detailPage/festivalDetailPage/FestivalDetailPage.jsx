import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getFestivalById } from "../../../../apis/detail";
import FestivalDetailTemplate from "./FestivalDetailTemplate";
import ErrorPage from "../../ErrorPage/ErrorPage";
import LoadingPage from "../../loadingPage/LoadingPage";

const FestivalDetailPage = () => {
  const params = useParams().id;
  const { data, isLoading, error } = useQuery(`festival${params}`, () =>
    getFestivalById(params),
  );
  return (
    <div className={"festival-detail-page w-full"}>
      {isLoading && <LoadingPage />}
      {data && <FestivalDetailTemplate festival={data} />}
      {error && <ErrorPage />}
    </div>
  );
};

export default FestivalDetailPage;
