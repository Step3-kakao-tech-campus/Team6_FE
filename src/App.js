import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import HomePage from "./components/features/homePage/HomePage";
import SearchPage from "./components/features/searchPage/page/SearchPage";
import RestaurantDetailPage from "./components/features/restaurantDetailPage/RestaurantDetailPage";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App flex w-full flex-col items-center">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/restaurant/:id"
                element={<RestaurantDetailPage />}
              />
              <Route path="/search/:filter" element={<SearchPage />} />
              {/*<Route path="/festival/:id" element={<FestivalDetailPage />} />*/}
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
