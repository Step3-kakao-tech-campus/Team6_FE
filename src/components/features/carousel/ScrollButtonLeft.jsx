import { AiOutlineRight } from "react-icons/ai";

const ScrollButtonLeft = ({ onClick }) => (
  <button
    className={
      "carousel-button-left absolute bottom-[50%] right-0 top-[50%] z-[10] flex h-10 w-10 translate-y-[-50%] cursor-pointer items-center justify-center rounded-full bg-black text-white opacity-50"
    }
    onClick={onClick}
    aria-label="scroll-button-left"
  >
    <AiOutlineRight />
  </button>
);

export default ScrollButtonLeft;
