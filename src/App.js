import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import HomePage from "./components/features/homePage/HomePage";
import SearchPage from "./components/features/searchPage/SearchPage";
import RestaurantDetailPage from "./components/features/restaurantDetailPage/RestaurantDetailPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import FoodSearchPage from "./components/features/foodSearchPage/FoodSearchPage";
import WishlistPage from "./components/features/wishlistPage/WishlistPage";
import FestivalDetailPage from "./components/features/festivalDetailPage/FestivalDetailPage";
import ReservationListPage from "./components/features/reservationListPage/ReservationListPage";
import FoodDetailPage from "./components/features/foodDetailPage/FoodDetailPage";

import { store } from "./store";
import MyPage from "./components/features/myPage/MyPage";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App flex w-full flex-col items-center">
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/restaurant/:id"
                  element={<RestaurantDetailPage />}
                />
                <Route path="/festival/:id" element={<FestivalDetailPage />} />
                <Route path={"/search"} element={<SearchPage />} />

                <Route path={"/foods"} element={<FoodSearchPage />} />
                <Route path={"/foods/:id"} element={<FoodDetailPage />} />
                <Route
                  path={"/userinfo/wishlist/:filter"}
                  element={<WishlistPage />}
                />

                <Route
                  path={"/userinfo/reservations/:filter"}
                  element={<ReservationListPage />}
                />
                <Route path={"/userinfo"} element={<MyPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </Provider>
    </div>
  );
}

export default App;
