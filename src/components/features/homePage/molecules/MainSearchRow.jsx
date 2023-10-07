import MainDrawer from "../atoms/MainDrawer";
import SearchBar from "../atoms/SearchBar";
import UserAvatar from "../../../atoms/UserAvatar";
import useInput from "../../../../hooks/useInput";

const MainSearchRow = () => {
  const { value, onChange } = useInput("");

  return (
    <div className="main-top-row flex h-[50px] items-center justify-between gap-2 px-2">
      <MainDrawer />
      <SearchBar value={value} onChange={onChange} />
      <div className={"user-avatar-wrapper h-[2.5rem] w-[2.5rem] rounded-full overflow-hidden"}>
        <UserAvatar image={"https://picsum.photos/230"} />
      </div>
    </div>
  );
};

export default MainSearchRow;
