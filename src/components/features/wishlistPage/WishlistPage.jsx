import { useState } from "react";
import Button from "../../atoms/Button";
import PageTitleBar from "../../molecules/PageTitleBar";
import FilterBar from "../../molecules/FilterBar";

const WishlistPage = () => {
  const [filter, setFilter] = useState("all");

  return (
    <div className="wishlist-page w-full">
      <PageTitleBar name={"Wishlist"} />
      <div className="filter-bar mt-20">
        <FilterBar filter={filter} setFilter={setFilter} />
      </div>
      <Button as="a" href="/" variant="secondary">
        Go to Home
      </Button>
    </div>
  );
};

export default WishlistPage;
