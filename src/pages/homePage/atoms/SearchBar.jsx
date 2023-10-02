import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ value, onChange }) => {
  return (
    <div
      className={
        "search-container flex h-[40px] w-full flex-row justify-between rounded-3xl border-2 border-tripKoOrange-300 pl-4 text-lg focus:border-tripKoOrange"
      }
    >
      <input
        type="text"
        placeholder="Search"
        className={
          "search-form bg-transparent h-full w-full focus:outline-none"
        }
        value={value}
        onChange={onChange}
        onClick={() => (window.location.href = "/search")}
      />
      <button
        className={
          "h-full rounded-3xl px-2 outline outline-2 outline-tripKoOrange-300"
        }
      >
        <AiOutlineSearch size={20} fontWeight={""} />
      </button>
    </div>
  );
};

export default SearchBar;
