import { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import {
  getRestaurantWishlist,
  getFestivalWishlist,
  getTouristSpotWishlist,
} from "../../../apis/wish";
import FilterBar from "../../molecules/FilterBar";
import PageTitle from "../../atoms/PageTitle";
import WishlistCard from "../../molecules/cards/WishlistCard";
import LoadingPage from "../loadingPage/LoadingPage";

const fetchWishlist = {
  restaurant: getRestaurantWishlist,
  festival: getFestivalWishlist,
  touristSpot: getTouristSpotWishlist,
};

const WishlistPage = () => {
  const { filter: urlFilter } = useParams();
  const navigate = useNavigate();
  const [filter, setFilter] = useState(urlFilter || "all");

  const {
    data: queryData,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery(["wishlist", filter], () => fetchWishlist[filter](), {
    keepPreviousData: true,
  });

  const data = queryData?.result;

  useEffect(() => {
    if (urlFilter !== filter) {
      setFilter(urlFilter);
      refetch();
    }
  }, [urlFilter, filter, refetch]);

  const handleFilterChange = (newFilter) => {
    navigate(`/userinfo/wishlist/${newFilter}`);
  };

  const filteredData = useMemo(() => {
    if (!data) return [];
    const { touristSpots, restaurants, festivals } = data;

    const isArray = (array) => (Array.isArray(array) ? array : []);

    switch (filter) {
      case "touristSpots":
        return isArray(touristSpots);
      case "restaurants":
        return isArray(restaurants);
      case "festivals":
        return isArray(festivals);
      case "all":
      default:
        return [
          ...isArray(touristSpots),
          ...isArray(restaurants),
          ...isArray(festivals),
        ];
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
        {filteredData?.map((item) => (
          <WishlistCard key={item.id} wishlist={item} />
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
