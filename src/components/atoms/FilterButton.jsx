const FilterButton = ({ filters, onFilterSelect }) => (
  <div>
    {filters.map((filter, index) => (
      <button key={index} onClick={() => onFilterSelect(filter)}>
        {filter.name}
      </button>
    ))}
  </div>
);

export default FilterButton;
