import ButtonBack from "../atoms/ButtonBack";
import PageTitle from "../atoms/PageTitle";

const PageTitleBar = ({ name, resizeObserver }) => {
  return (
      <>
          <div className={"nav-bar-dummy h-10"}></div>
    <div
      className={
        "width-flex-layout detail-title-bar fixed top-0 z-20 flex items-center justify-center rounded-b-3xl bg-white px-14 py-2 shadow-lg"
      }
      ref={(ref) => {
        if (resizeObserver && ref) resizeObserver.observe(ref);
      }}
    >
      <ButtonBack />
      <PageTitle title={name} />
    </div>
          </>
  );
};

export default PageTitleBar;
