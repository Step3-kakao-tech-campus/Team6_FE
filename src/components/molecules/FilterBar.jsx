import FilterButton from "../atoms/FilterButton";
import { useNavigate } from "react-router-dom";

const FilterBar = ({ filter, setFilter }) => {
  const navigate = useNavigate();

  const filterButtons = [
    { label: "All", value: "all" },
    { label: "Restaurants", value: "restaurants" },
    { label: "Festivals", value: "festivals" },
    {
      label: "Tourist Spots",
      value: "touristSpots",
    },
  ];

  return (
    <div className="overflow-x-scroll whitespace-nowrap">
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
