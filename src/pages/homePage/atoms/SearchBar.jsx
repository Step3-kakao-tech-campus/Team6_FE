const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search"
      className={
        "h-[40px] w-full rounded-3xl border-2 border-tripKoOrange-300 px-4 py-2 text-lg focus:border-tripKoOrange"
      }
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchBar;
