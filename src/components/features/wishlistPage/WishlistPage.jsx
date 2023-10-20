import { useState } from "react";
import { useQuery } from "react-query";
import WishlistTemplate from "./WishlistTemplate";

const WishlistPage = () => {
  const [filter, setFilter] = useState("all");
  const { data } = useQuery(`wishlist${filter}`, () => filter);

  return (
    <div className="wishlist-page w-full">
      {data && <WishlistTemplate wishlist={data} filter={filter} />}
    </div>
  );
};

export default WishlistPage;
