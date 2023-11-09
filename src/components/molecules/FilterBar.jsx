import FilterButton from "../atoms/FilterButton";

const FilterBar = ({ filter, setFilter }) => {
  const filterButtons = [
    { label: "All", value: "all" },
    { label: "Restaurants", value: "restaurants" },
    { label: "Festivals", value: "festivals" },
    { label: "Tourist Spots", value: "touristSpots" },
  ];

  return (
    <div className="mx-2 overflow-auto whitespace-nowrap">
      {filterButtons.map((button, index) => (
        <FilterButton
          key={index}
          label={button.label}
          value={button.value}
          filter={filter}
          setFilter={setFilter}
        />
      ))}
    </div>
  );
};

export default FilterBar;
