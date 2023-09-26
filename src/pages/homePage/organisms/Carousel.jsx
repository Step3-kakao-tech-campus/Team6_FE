import { useMemo, useState } from "react";
import CarouselSlide from "../atoms/CarouselSlide";
import CarouselButtonLeft from "../atoms/CarouselButtonLeft";
import CarouselButtonRight from "../atoms/CarouselButtonRight";

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
    <div className={"carousel relative h-[400px] w-full bg-gray-300 overflow-hidden"}>
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
