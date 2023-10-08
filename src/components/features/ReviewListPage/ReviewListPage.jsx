import {useParams} from "react-router-dom";
import ReviewCards from "../../organisms/ReviewCards";
import SectionTitle from "../../atoms/SectionTitle";
import PageTitleBar from "../../molecules/PageTitleBar";
const ReviewListPage = ({placeType}) => {
    const placeId = useParams().id;
    return (
        <div className={"review-list-page pb-16"}>
            <PageTitleBar name={"Reviews"} />
            <div className={"title-bar-dummy h-[4rem] w-full"} />
            <SectionTitle title={"Reviews"} />
            <ReviewCards placeId={placeId} placeType={placeType} />
        </div>
    );
}

export default ReviewListPage;