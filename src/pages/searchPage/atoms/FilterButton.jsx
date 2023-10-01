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
        filter === value ? "bg-orange-500 text-white" : "text-orange-500"
      }`}
    >
      {label}
    </button>
  );
};

export default FilterButton;
