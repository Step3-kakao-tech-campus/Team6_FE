const WishlistCard = () => {
  return (
    <div>
      <div className="wishlist-card flex h-80 w-80 flex-col justify-between rounded-lg bg-white shadow-lg">
        <div className="wishlist-card__image h-3/4 w-full rounded-t-lg bg-gray-300"></div>
        <div className="wishlist-card__content flex h-1/4 w-full flex-col items-center justify-center">
          <h3 className="text-2xl font-semibold">Product Name</h3>
          <p className="text-xl font-semibold">Rp. 100.000</p>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
