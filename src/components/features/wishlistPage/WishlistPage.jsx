import { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getWishlist } from "../../../apis/wish";
import FilterBar from "../../molecules/FilterBar";
import PageTitle from "../../atoms/PageTitle";
import WishlistCard from "../../molecules/cards/WishlistCard";
import LoadingPage from "../loadingPage/LoadingPage";

const WishlistPage = () => {
  const { filter: urlFilter } = useParams();
  const navigate = useNavigate();
  const [filter, setFilter] = useState(urlFilter || "all");

  const {
    data: queryData,
    isLoading,
    error,
  } = useQuery("wishlist", getWishlist);
  const data = queryData?.result?.data?.response;

  useEffect(() => {
    if (urlFilter !== filter) {
      setFilter(urlFilter);
    }
  }, [urlFilter, filter]);

  const handleFilterChange = (newFilter) => {
    navigate(`/userinfo/wishlist/${newFilter}`);
  };

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

  if (isLoading) return <LoadingPage />;
  if (error) return <div>Error occurred: {error.message}</div>;

  return (
    <div className="wishlist-page h-screen w-full">
      <PageTitle title="Wishlist" />
      <div className="filter-bar my-2">
        <FilterBar filter={filter} setFilter={handleFilterChange} />
      </div>
      <div className="wishlist-items grid md:grid-cols-2">
        {filteredData.map((item) => (
          <WishlistCard key={item.id} wishlist={item} />
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
