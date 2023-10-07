import {comma, toUpperCaseFirstWord} from "../../utils/convert";
import CardTitle from "../atoms/CardTitle";

const MenuCard = ({ menu }) => {
  return (
    <div
      className={"menu-card flex w-full gap-2 shadow-rounded-card p-2 md:flex-col"}>
      <div className={"menu-card-image h-[130px] w-[130px] md:h-[240px] md:w-[240px] flex-shrink-0 overflow-hidden rounded-xl"}>
        <img src={menu.image} alt={menu.name} />
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
