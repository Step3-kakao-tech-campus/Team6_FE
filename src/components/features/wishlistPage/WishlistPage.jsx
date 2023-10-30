import React, { useState, useMemo } from "react";
import { useQuery } from "react-query";
import { getWishlist } from "../../../mocks/wished";
import FilterBar from "../../molecules/FilterBar";

const WishlistPage = () => {
  const [filter, setFilter] = useState("all");
  const {
    data: queryData,
    isLoading,
    error,
  } = useQuery("wishlist", getWishlist);

  const data = queryData?.data.response;

  const filteredData = useMemo(() => {
    if (!data) return [];
    switch (filter) {
      case "touristSpots":
        return data.touristSpots;
      case "restaurants":
        return data.restaurants;
      case "festivals":
        return data.festivals;
      default:
        return [...data.touristSpots, ...data.restaurants, ...data.festivals];
    }
  }, [filter, data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error.message}</div>;

  return (
    <div className="wishlist-page w-full">
      <div className="filters">
        <FilterBar filter={filter} setFilter={setFilter} />
      </div>

      <div className="wishlist-items">
        {filteredData.map((item) => (
          <div key={item.id} className="wishlist-item">
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
