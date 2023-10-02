import ListTitle from "../../pages/homePage/atoms/ListTitle";

const HorizontalListSection = ({ title, children, className }) => {
  return (
    <section className={"horizontal-list-section flex flex-col gap-2 " + (className ? className : "")}>
      {title && <ListTitle>{title}</ListTitle>}
      {children}
    </section>
  );
};

export default HorizontalListSection;
