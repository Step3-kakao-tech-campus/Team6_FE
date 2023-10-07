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
      className={`m-2 w-28 rounded-full shadow-xl  ${
        filter === value
          ? "bg-orange-500 text-white shadow-inner"
          : "text-orange-500"
      }`}
    >
      {label}
    </button>
  );
};

export default FilterButton;
