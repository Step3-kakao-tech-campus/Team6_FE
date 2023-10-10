import { useMemo, useState } from "react";
import CarouselSlide from "./CarouselSlide";
import CarouselButtonLeft from "./CarouselButtonLeft";
import CarouselButtonRight from "./CarouselButtonRight";

/**
 * Carousel Component 입니다. height속성을 갖는 wrapper를 필요로 합니다.
 * @param slides carousel에 들어갈 slides, slides의 형태는 다음과 같습니다.
 * [{image: "image url",to: "link to"},...]
 * @returns {JSX.Element}
 * @constructor
 */
const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(1);

  // 들어온 slides를 토대로 edge slide를 추가합니다.
  const mountedSlides = useMemo(() => {
    if (slides.length === 1) {
      return [...slides, ...slides, ...slides];
    } else if (slides.length === 2) {
      return [...slides, ...slides];
    } else {
      return [slides[slides.length - 1], ...slides, slides[0]];
    }
  }, [slides]);

  const length = useMemo(() => mountedSlides.length, [mountedSlides.length]);

  const prevSlide = useMemo(
    () => () => {
      if (currentSlide === 1) {
        setCurrentSlide(0);
        setTimeout(() => {
          setCurrentSlide(length - 2);
        }, 400);
      } else {
        setCurrentSlide(currentSlide - 1);
      }
    },
    [currentSlide, length],
  );

  const nextSlide = useMemo(
    () => () => {
      if (currentSlide === length - 2) {
        setCurrentSlide(length - 1);
        setTimeout(() => {
          setCurrentSlide(1);
        }, 400);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    },
    [currentSlide, length],
  );

  const onClickLeftButton = () => {
    if (enabled) {
      nextSlide();
      setEnabled(false);
      setTimeout(() => {
        setEnabled(true);
      }, 400);
    }
  };

  const onClickRightButton = () => {
    if (enabled) {
      prevSlide();
      setEnabled(false);
      setTimeout(() => {
        setEnabled(true);
      }, 400);
    }
  };

  const [enabled, setEnabled] = useState(true);

  return (
    <div
      className={"carousel relative h-full w-full overflow-hidden bg-gray-300"}
    >
      {mountedSlides.map((slide, index) => (
        <CarouselSlide
          key={index}
          image={slide.image}
          index={index}
          state={currentSlide}
          to={slide.to}
        />
      ))}
      <CarouselButtonRight onClick={onClickRightButton} />
      <CarouselButtonLeft onClick={onClickLeftButton} />
    </div>
  );
};

export default Carousel;
