import {useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {getFestivalById} from "../../../apis/detail";

const FestivalDetailPage = () => {
  const params = useParams().id;
  const {data} = useQuery(`festival${params}`, () => getFestivalById(params));
    return (
        <div className={"festival-detail-page w-full"}>
            {data && <FestivalDetailPage festival={data.result} />}
        </div>
  );
};

export default FestivalDetailPage;
