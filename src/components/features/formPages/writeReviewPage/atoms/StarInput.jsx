import { STAR_COMPONENT } from "./utils";

const StarInput = ({ on, setValue, index }) => {
  return (
    <div className={`score-star-${index} relative cursor-pointer`} key={index}>
      {STAR_COMPONENT[on]}
      <div className={"click-area-wrapper top-0 w-full h-full absolute z-10"}>
        <div
          className={"left-click-area absolute left-0 h-full w-1/2"}
          onClick={() => setValue(index - 0.5)}
        ></div>
        <div
          className={"right-click-area absolute right-0 h-full w-1/2"}
          onClick={() => setValue(index)}
        ></div>
      </div>
    </div>
  );
};

export default StarInput;
