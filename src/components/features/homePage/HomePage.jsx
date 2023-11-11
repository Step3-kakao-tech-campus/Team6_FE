import Carousel from "../carousel/Carousel";
import { useQuery } from "react-query";
import { getHome } from "../../../apis/home";
import HorizontalListSection from "../carousel/HorizontalListSection";
import FestivalPoster from "../../molecules/cards/FestivalPoster";
import PlacePoster from "../../molecules/cards/PlacePoster";
import { utils } from "./utils";
import SectionTitle from "../../atoms/SectionTitle";
import HorizontalListSectionMediaQuery from "../carousel/HorizontalListSectionMediaQuery";
import SearchBar from "../../molecules/SearchBar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoadingPage from "../loadingPage/LoadingPage";
import ErrorPage from "../ErrorPage/ErrorPage";

const dummySlides = [
  {
    image: "/images/carousel/carousel1.jpg"
  },
  {
    image: "/images/carousel/carousel2.jpg"
  },
  {
    image: "/images/carousel/carousel3.webp"
  }
];

const HomePage = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useQuery("products", () => getHome());
  const [query, setQuery] = useState("");
  console.log(data)
  const handleSearch = async (searchQuery) => {
    navigate(`/search?location=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className={"home-page flex w-full flex-col gap-2 py-2 pb-16"}>
      <SearchBar
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onSearch={handleSearch}
      />
      <div className={"carousel-wrapper height-flex-layout-small"}>
        <Carousel slides={dummySlides} />
      </div>
      {data && (
        <>
          <SectionTitle title={"Festivals"} />
          <HorizontalListSection>
            {utils(data.festivals) &&
              data.festivals.map((festival, index) => {
                return (
                  <FestivalPoster
                    key={index}
                    image={festival.image}
                    alt={`poster of ${festival.name}`}
                    to={`festival/${festival.id}`}
                  />
                );
              })}
          </HorizontalListSection>
          <SectionTitle title={"Restaurants"} />
          <HorizontalListSectionMediaQuery>
            {utils(data.restaurants) &&
              data.restaurants.map((restaurant, index) => {
                return (
                  <PlacePoster
                    key={index}
                    image={restaurant.image}
                    alt={`poster of ${restaurant.name}`}
                    to={`restaurant/${restaurant.id}`}
                    name={restaurant.name}
                    address={restaurant.address}
                    averageRating={restaurant.averageRating}
                  />
                );
              })}
          </HorizontalListSectionMediaQuery>
          <SectionTitle title={"Tourist Spots"} />
          <HorizontalListSectionMediaQuery>
            {utils(data.touristSpots) &&
              data.touristSpots.map((spot, index) => (
                <PlacePoster
                  key={index}
                  image={spot.image}
                  name={spot.name}
                  address={spot.address}
                  to={`touristSpot/${spot.id}`}
                  averageRating={spot.averageRating}
                />
              ))}
          </HorizontalListSectionMediaQuery>
        </>
      )}
      {
        isLoading && <LoadingPage />
      }
      {
        error && <ErrorPage/>
      }
    </div>
  );
};

export default HomePage;
