import { Link } from "react-router-dom";
import WishButton from "../atoms/WishButton";
import Photo from "../atoms/Photo";

const WishlistCard = ({ wishlist }) => {
  return (
    <Link to={`/festival/${wishlist.id}`} className="wishlist-card-container">
      <div className="wishlist-card shadow-rounded-card m-2 flex p-2">
        {wishlist.images && wishlist.images[0] && (
          <Photo
            src={wishlist.images[0]}
            alt="Wishlist Item"
            className="wishlist-card__image h-28 w-28 rounded-lg object-cover"
          />
        )}

        <div className="wishlist-card__content mx-2 flex h-1/4 w-full flex-col items-center justify-center">
          <h3 className="text-xl font-semibold">{wishlist.name}</h3>
          <span className="text-sm text-gray-400">{wishlist.address}</span>
        </div>
        <div>
          <WishButton filter={wishlist.type} id={wishlist.id} />
        </div>
      </div>
    </Link>
  );
};

export default WishlistCard;
