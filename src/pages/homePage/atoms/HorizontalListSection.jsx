import ListTitle from "./ListTitle";

const HorizontalListSection = ({ title, children, className }) => {
  return (
    <section className={className + " flex flex-col gap-2"}>
      <ListTitle>{title}</ListTitle>
      {children}
    </section>
  );
};

export default HorizontalListSection;
