import {AiOutlineSearch} from "react-icons/ai";

const SearchBar = ({ value, onChange }) => {
  return (
    <div
      className={
        "search-container h-[2.5rem] w-full flex flex-row justify-between rounded-3xl border-2 border-tripKoOrange-300 pl-4 text-lg focus:border-tripKoOrange"
      }
    >
      <input
        type="text"
        placeholder="Search"
        className={"search-form h-full w-full bg-transparent focus:outline-none"}
        value={value}
        onChange={onChange}
      />
        <button className={"h-full px-2 rounded-3xl outline outline-2 outline-tripKoOrange-300"}>
            <AiOutlineSearch size={20} fontWeight={""} />
        </button>
    </div>
  );
};

export default SearchBar;
