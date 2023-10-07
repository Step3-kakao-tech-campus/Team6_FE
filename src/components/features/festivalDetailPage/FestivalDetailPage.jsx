import {useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {getFestivalById} from "../../../apis/detail";
import FestivalDetailTemplate from "./FestivalDetailTemplate";

const FestivalDetailPage = () => {
  const params = useParams().id;
  const {data} = useQuery(`festival${params}`, () => getFestivalById(params));
    return (
        <div className={"festival-detail-page w-full"}>
            {data && <FestivalDetailTemplate festival={data.result} />}
        </div>
  );
};

export default FestivalDetailPage;
