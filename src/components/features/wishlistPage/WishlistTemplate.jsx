import { useState } from "react";
import Button from "../../atoms/Button";
import PageTitleBar from "../../molecules/PageTitleBar";
import FilterBar from "../../molecules/FilterBar";
import WishlistCard from "../../molecules/WishlistCard";

const WishlistTemplate = ({ wishlist }) => {
  const [filter, setFilter] = useState("all");
  const [isWished, setWished] = useState(false);

  return (
    <div className="wishlist-page w-full">
      <PageTitleBar name={"Wishlist"} />
      <div className="filter-bar mt-20">
        <FilterBar filter={filter} setFilter={setFilter} />
      </div>
      <div className="wishlist mt-20">
        <WishlistCard wishlist={wishlist} filter={filter} />
        {/* <Wishlist wishlist={wishlist} filter={filter} /> */}
      </div>
      {/* <Button as="a" href="/" variant="secondary">
        Go to Home
      </Button> */}
    </div>
  );
};

export default WishlistTemplate;
