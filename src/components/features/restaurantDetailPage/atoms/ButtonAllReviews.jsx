import {useNavigate} from "react-router-dom";

const ButtonAllReviews = ({placeType, placeId}) => {
    const navigate = useNavigate();
  return (
    <button
      className={"text-lg font-bold text-tripKoOrange hover:text-tripKoOrange-500"}
      onClick={() => navigate(`/${placeType}/reviews/${placeId}`)}
    >
      See all reviews
    </button>
  );
};

export default ButtonAllReviews;
