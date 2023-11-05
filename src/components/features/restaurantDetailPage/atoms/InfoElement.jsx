import { toUpperCaseFirstWord } from "../../../../utils/convert";

const InfoElement = ({ title, value }) => {
  return (
    <div className={"contact-info flex-col justify-between"}>
      <h3 className={"text-xl font-bold text-tripKoOrange-500"}>
        {toUpperCaseFirstWord(title)}
      </h3>
      <p className={"line-clamp-2 text-xl"}>{value}</p>
    </div>
  );
};

export default InfoElement;
