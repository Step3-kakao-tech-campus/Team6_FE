import MainDrawer from "../atoms/MainDrawer";
import SearchBar from "../atoms/SearchBar";
import UserInfoButton from "../atoms/UserInfoButton";
const MainSearchRow = () => {
  return (
      <div className="main-top-row flex justify-between items-center h-[50px] gap-2 px-2">
        <MainDrawer />
        <SearchBar />
        <UserInfoButton />
      </div>
  )
};

export default MainSearchRow;
