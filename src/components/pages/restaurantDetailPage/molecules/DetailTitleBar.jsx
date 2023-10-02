import ButtonBack from "../atoms/ButtonBack";

const DetailTitleBar = ({ name, resizeObserver }) => {
  return (
    <div
      className={
        "width-flex-layout detail-title-bar fixed flex items-center justify-center rounded-b-3xl bg-white px-14 py-2 shadow-lg"
      }
      ref={(ref) => {
        if (resizeObserver && ref) resizeObserver.observe(ref);
      }}
    >
      <ButtonBack />
      <h1
        className={
          "line-clamp-2 w-full py-2 text-2xl font-bold text-tripKoOrange"
        }
      >
        {name}
      </h1>
    </div>
  );
};

export default DetailTitleBar;
