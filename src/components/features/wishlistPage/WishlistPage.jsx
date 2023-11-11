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

const mergeResults = (apiResults) => {
  if (!Array.isArray(apiResults)) return [];

  return apiResults.reduce((acc, curr) => {
    if (curr?.isSuccess && Array.isArray(curr.result)) {
      return [...acc, ...curr.result];
    }
    return acc;
  }, []);
};

const fetchWishlist = {
  all: () =>
    Promise.all([
      getRestaurantWishlist(),
      getFestivalWishlist(),
      getTouristSpotWishlist(),
    ]),
  restaurants: getRestaurantWishlist,
  festivals: getFestivalWishlist,
  touristSpots: getTouristSpotWishlist,
};

const WishlistPage = () => {
  const { filter: urlFilter } = useParams();
  const navigate = useNavigate();
  const [filter, setFilter] = useState(urlFilter || "all");

  const {
    data: queryData,
    isLoading,
    error,
  } = useQuery(["wishlist", filter], () => fetchWishlist[filter](), {
    keepPreviousData: true,
  });

  useEffect(() => {
    if (urlFilter !== filter) {
      setFilter(urlFilter);
    }
  }, [urlFilter, filter]);

  const handleFilterChange = (newFilter) => {
    navigate(`/userinfo/wishlist/${newFilter}`, { replace: true });
  };

  const mergedData = useMemo(() => {
    if (filter === "all") {
      return mergeResults(queryData);
    }

    return queryData?.result || [];
  }, [filter, queryData]);

  if (isLoading) return <LoadingPage />;
  if (error) return <div>Error occurred: {error.message}</div>;

  return (
    <div className="wishlist-page mb-20 h-screen w-full overflow-auto">
      <PageTitle title="Wishlist" />
      <div className="filter-bar my-2">
        <FilterBar filter={filter} setFilter={handleFilterChange} />
      </div>
      <div className="wishlist-items grid md:grid-cols-2">
        {mergedData?.map((item) => (
          <WishlistCard key={item.id} wishlist={item} />
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
