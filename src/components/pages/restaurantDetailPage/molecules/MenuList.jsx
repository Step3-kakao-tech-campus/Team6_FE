import MenuCard from "../atoms/MenuCard";
import HorizontalListWrapperMediaQuery from "../../../common/atoms/HorizontalListWrapperMediaQuery";

const MenuList = ({ menu }) => {
  return (
    <HorizontalListWrapperMediaQuery>
      {menu.map((menu, index) => (
        <MenuCard menu={menu} key={index}/>
      ))}
    </HorizontalListWrapperMediaQuery>
  );
};

export default MenuList;
