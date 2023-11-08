import { AiOutlineLeft } from "react-icons/ai";

const ScrollButtonRight = ({ onClick }) => (
  <button
    className={
      "carousel-button-right absolute bottom-[50%] left-0 top-[50%] z-[10] flex h-10 w-10 translate-y-[-50%] cursor-pointer items-center justify-center rounded-full bg-black text-white opacity-50"
    }
    onClick={onClick}
    aria-label="scroll-button-right"
  >
    <AiOutlineLeft />
  </button>
);
export default ScrollButtonRight;
