import {useParams} from "react-router-dom";

const ReviewDetailPage = () => {
    const { id } = useParams()

    return (
        <div>
        <h1>Edit Review {id}</h1>
        </div>
    );
}

export default ReviewDetailPage;