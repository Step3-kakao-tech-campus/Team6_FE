import MainDrawer from "../atoms/MainDrawer";
import SearchBar from "../atoms/SearchBar";
import UserInfoButton from "../atoms/UserInfoButton";
import useInput from "../../../hooks/useInput";

const MainSearchRow = () => {
  const { value, onChange } = useInput("");

  return (
    <div className="main-top-row flex h-[50px] items-center justify-between gap-2 px-2">
      <MainDrawer />
      <SearchBar value={value} onChange={onChange} />
      <UserInfoButton />
    </div>
  );
};

export default MainSearchRow;
