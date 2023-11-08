// FilterBar에 FilterButton을 렌더링하는데, FilterButton에 onClick 함수를 전달하고 있습니다.
const FilterButton = ({ label, value, filter, setFilter, onClick }) => {
  return (
    <button
      onClick={() => {
        setFilter(value);
        if (onClick) {
          onClick();
        }
      }}
      className={`m-1 w-auto rounded-full px-3 ${
        filter === value
          ? "border border-[#ff4800] bg-[#fcefe7] text-[#ff4800]"
          : "border border-gray-300 text-black"
      }`}
      aria-label={`${value}-filter-button`}
    >
      {label}
    </button>
  );
};

export default FilterButton;
