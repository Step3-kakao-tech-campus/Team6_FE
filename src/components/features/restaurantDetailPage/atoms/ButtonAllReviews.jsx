const ButtonAllReviews = ({ onClick }) => {
  return (
    <div className={"flex w-full items-center justify-center pt-4"}>
      <button
        className={
          "text-lg font-bold text-tripKoOrange hover:text-tripKoOrange-500"
        }
        onClick={onClick}
      >
        See all reviews
      </button>
    </div>
  );
};

export default ButtonAllReviews;
