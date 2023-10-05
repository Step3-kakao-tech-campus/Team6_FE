import {comma, toUpperCaseFirstWord} from "../../../../utils/convert";

const MenuCard = ({ menu }) => {
  return (
    <div
      className={"menu-card flex w-full gap-2 rounded-xl border border-gray-300 p-2 md:flex-col"}>
      <div className={"menu-card-image h-[130px] w-[130px] md:h-[240px] md:w-[240px] flex-shrink-0 overflow-hidden rounded-xl"}>
        <img src={menu.image} alt={menu.name} />
      </div>
      <div className={"menu-card-description"}>
        <h3 className={"text-tripKoOrange-500 text-2xl font-semibold"}>
          {toUpperCaseFirstWord(menu.name)}
        </h3>
        <p className={"line-clamp-3"}>{menu.description}</p>
        <span className={"menu-price text-sm text-tripKoOrange font-bold"}>₩ {comma(menu.price)}</span>
      </div>
    </div>
  );
};

export default MenuCard;
