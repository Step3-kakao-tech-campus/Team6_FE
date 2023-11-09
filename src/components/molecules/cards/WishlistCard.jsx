import { useNavigate } from "react-router-dom";
import WishButton from "../../atoms/WishButton";
import Photo from "../../atoms/Photo";
import MapIcon from "../../atoms/MapIcon";

const WishlistCard = ({ wishlist }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/festival/${wishlist.id}`);
  };

  const handleWishButtonWrapperClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div onClick={handleCardClick} className="wishlist-card-container">
      <div className="wishlist-card shadow-rounded-card m-2 flex p-2">
        {wishlist.mainImage && (
          <Photo
            src={wishlist.mainImage}
            alt="Wishlist Item"
            className="wishlist-card__image h-28 w-28 rounded-lg object-cover"
          />
        )}

        <div className="wishlist-card__content mx-2 flex w-full flex-col items-center justify-center">
          <h3 className="text-xl font-semibold">{wishlist.name}</h3>
          <div className="flex items-center">
            <MapIcon size={13} color={"#22c55e"} />
            <span className="ml-1 text-sm text-gray-400">
              {wishlist.address}
            </span>
          </div>
        </div>
        <div onClick={handleWishButtonWrapperClick}>
          <WishButton
            filter={wishlist.type}
            id={wishlist.id}
            initialIsWished={wishlist.isWished}
          />
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
