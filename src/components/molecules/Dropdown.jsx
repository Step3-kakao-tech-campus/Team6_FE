/**
 * Dropdown component
 * @param options {string[]} - options to be shown in dropdown
 * @param value {string} - selected value of dropdown
 * @param onChange {function} - function to be called when dropdown value is changed
 * @returns {JSX.Element} - dropdown component
 * @constructor
 */
const Dropdown = ({ options, value, onChange}) => {
  return (
    <select
      name={"dropdown"}
      className={"dropdown"}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
};

export default Dropdown;
