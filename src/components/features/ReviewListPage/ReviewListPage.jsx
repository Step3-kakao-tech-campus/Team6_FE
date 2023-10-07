import {useParams} from "react-router-dom";

const ReviewListPage = ({placeType}) => {
    const placeId = useParams().id;
    return (
        <div>
        <h2>ReviewListPage</h2>
        </div>
    );
}

export default ReviewListPage;