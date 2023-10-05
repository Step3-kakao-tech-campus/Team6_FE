import SectionTitle from "../atoms/SectionTitle";
import HorizontalListSection from "../../../common/molecules/HorizontalListSection";
import MenuList from "../molecules/MenuList";

const MenuSection = ({ menu }) => {
  return (
    <section className={"menu-section"}>
      <SectionTitle title={"Menu"} />
      <HorizontalListSection>
        <MenuList menu={menu} />
      </HorizontalListSection>
    </section>
  );
};

export default MenuSection;
