const ButtonAllReviews = ({onClick}) => {
  return (
    <button
      className={"text-lg font-bold text-tripKoOrange hover:text-tripKoOrange-500"}
      onClick={onClick}
    >
      See all reviews
    </button>
  );
};

export default ButtonAllReviews;
