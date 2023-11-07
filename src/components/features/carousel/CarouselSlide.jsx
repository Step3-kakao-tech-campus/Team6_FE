import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Photo from "../../atoms/Photo";

const SLIDE_STATE = {
  PREV_INDEX: -1,
  CURRENT_INDEX: 0,
  NEXT_INDEX: 1,
  HIDDEN_INDEX: 2,
};

const getSlideState = (index, current) => {
  if (index === current - 1) {
    return SLIDE_STATE.PREV_INDEX;
  } else if (index === current) {
    return SLIDE_STATE.CURRENT_INDEX;
  } else if (index === current + 1) {
    return SLIDE_STATE.NEXT_INDEX;
  } else {
    return SLIDE_STATE.HIDDEN_INDEX;
  }
};

const getTranslateX = (slideState) => {
  switch (slideState) {
    case SLIDE_STATE.PREV_INDEX:
      return "translate-x-[-100%]";
    case SLIDE_STATE.CURRENT_INDEX:
      return "translate-x-0";
    case SLIDE_STATE.NEXT_INDEX:
      return "translate-x-[100%]";
    default:
      return "hidden";
  }
};

/**
 *
 * @param image image url of slide
 * @param alt alt of image
 * @param index index of slide
 * @param state state of carousel that means which slide is current
 * @param to link to
 * @returns {JSX.Element}
 * @constructor
 */
const CarouselSlide = ({ image, index, state, to, alt }) => {
  const [slideState, setSlideState] = useState(SLIDE_STATE.HIDDEN_INDEX);
  useEffect(() => {
    setSlideState(getSlideState(index, state));
  }, [state, index]);
  return (
    <Link
      to={to}
      className={`carousel-slide-${index} absolute h-full w-full transform ${getTranslateX(slideState,)} duration-[400ms] ease-in-out ${slideState === SLIDE_STATE.CURRENT_INDEX ? "z-[10]" : "z-[0]"}`}
    >
      <Photo className={"h-full w-full object-cover"} src={image} alt={alt} />
    </Link>
  );
};

export default CarouselSlide;
