import {comma, toUpperCaseFirstWord} from "../../../utils/convert";
import CardTitle from "../../atoms/CardTitle";
import Photo from "../../atoms/Photo";

const MenuCard = ({ menu }) => {
  return (
    <div
      className={"menu-card flex w-full gap-2 shadow-rounded-card p-2 flex-col"}>
      <div className={"menu-card-image h-[15rem] w-[15rem] flex-shrink-0 overflow-hidden rounded-xl"}>
        <Photo src={menu.image} alt={menu.name} />
      </div>
      <div className={"menu-card-description"}>
        <CardTitle title={toUpperCaseFirstWord(menu.name)} />
        <p className={"line-clamp-3"}>{menu.description}</p>
        <span className={"menu-price text-sm text-tripKoOrange font-bold"}>₩ {comma(menu.price)}</span>
      </div>
    </div>
  );
};

export default MenuCard;
