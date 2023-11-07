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

import LoginPage from "./components/features/formPages/loginPage/LoginPage";
import RegisterPage from "./components/features/formPages/registerPage/RegisterPage";
import MyPage from "./components/features/myPage/MyPage";

import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import ProfileEditPage from "./components/features/profileEditPage/ProfileEditPage";
import RequiredAuthLayout from "./components/layouts/RequiredAuthLayout";
import Modal from "./components/atoms/Modals/Modal";
import { createContext } from "react";
import { useModal } from "./hooks/useModal";
import ErrorPage from "./components/features/ErrorPage/ErrorPage";

const queryClient = new QueryClient();
export const ModalContext = createContext(null);

function App() {
  const { hide, show, isShowing, modalContent } = useModal();

  return (
    <div className="App flex w-full flex-col items-center">
      <ModalContext.Provider value={{ hide, show }}>
        {isShowing && (
          <Modal isOpen={isShowing} onClose={hide}>
            {modalContent}
          </Modal>
        )}
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <QueryClientProvider client={queryClient}>
              <BrowserRouter>
                <Routes>
                  <Route element={<MainLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route
                      path="/restaurant/:id"
                      element={<RestaurantDetailPage />}
                    />
                    <Route
                      path="/festival/:id"
                      element={<FestivalDetailPage />}
                    />
                    <Route path={"/search"} element={<SearchPage />} />

                    <Route path={"/foods"} element={<FoodSearchPage />} />
                    <Route path={"/foods/:id"} element={<FoodDetailPage />} />

                    <Route element={<RequiredAuthLayout />}>
                      <Route
                        path={"/userinfo/wishlist/:filter"}
                        element={<WishlistPage />}
                      />

                      <Route
                        path={"/userinfo/reservations/:filter"}
                        element={<ReservationListPage />}
                      />
                      <Route path={"/userinfo"} element={<MyPage />} />
                      <Route
                        path={"/userinfo/edit"}
                        element={<ProfileEditPage />}
                      />
                    </Route>

                    <Route path={"/login"} element={<LoginPage />} />
                    <Route path={"/register"} element={<RegisterPage />} />
                  </Route>

                  <Route path="*" element={<ErrorPage />} />
                </Routes>
              </BrowserRouter>
            </QueryClientProvider>
          </PersistGate>
        </Provider>
      </ModalContext.Provider>
    </div>
  );
}

export default App;
