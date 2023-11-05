import { useRef } from "react";
import { useComponentSize } from "../../../hooks/useComponentSize";
import ScrollButtonLeft from "./ScrollButtonLeft";
import ScrollButtonRight from "./ScrollButtonRight";

const HorizontalListSection = ({ hideButton, children }) => {
  const innerDivRef = useRef(null);
  const innerDivSize = useComponentSize(innerDivRef);
  return (
    <div className={"relative"}>
      {!hideButton && (
        <>
          <ScrollButtonLeft
            onClick={() => {
              innerDivRef.current.scrollBy({
                left: innerDivSize.width,
                behavior: "smooth",
              });
            }}
          />
          <ScrollButtonRight
            onClick={() => {
              innerDivRef.current.scrollBy({
                left: -innerDivSize.width,
                behavior: "smooth",
              });
            }}
          />
        </>
      )}
      <div
        className="horizontal-list-wrapper w-full overflow-x-scroll"
        ref={innerDivRef}
      >
        <div className="horizontal-list flex flex-row gap-4 px-4 py-3 ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default HorizontalListSection;
