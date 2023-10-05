import {toUpperCaseFirstWord} from "../../../../utils/convert";

const AddressElement = ({ title, value }) => {
  return (
    <div className={"contact-info flex-col justify-between"}>
      <h3 className={"text-tripKoOrange-500 text-xl font-bold"}>{toUpperCaseFirstWord(title)}</h3>
      <address className={"line-clamp-2 text-xl"}>{value}</address>
    </div>
  );
};

export default AddressElement;
