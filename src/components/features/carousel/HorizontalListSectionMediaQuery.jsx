import { useRef } from "react";
import { useComponentSize } from "../../../hooks/useComponentSize";
import ScrollButtonLeft from "./ScrollButtonLeft";
import ScrollButtonRight from "./ScrollButtonRight";

/**
 * 화면 크기가 768px이 넘어가면 가로 스크롤이 생기는 컴포넌트입니다 768px 미만일 경우 새로 스크롤로 전환됩니다.
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const HorizontalListSectionMediaQuery = ({ children }) => {
  const innerDivRef = useRef(null);
  const divSize = useComponentSize(innerDivRef);
  return (
    <div className={"relative"}>
      <ScrollButtonLeft
        onClick={() => {
          innerDivRef.current.scrollBy({
            left: divSize.width,
            behavior: "smooth",
          });
        }}
      />
      <ScrollButtonRight
        onClick={() => {
          innerDivRef.current.scrollBy({
            left: -divSize.width,
            behavior: "smooth",
          });
        }}
      />
      <div
        className="horizontal-list-wrapper-media-query w-full md:overflow-x-scroll"
        ref={innerDivRef}
      >
        <div className="horizontal-list grid w-full grid-cols-1 gap-4 overflow-y-hidden px-4 py-4 xs:grid-cols-2 md:flex md:w-auto md:flex-row">
          {children}
        </div>
      </div>
    </div>
  );
};

export default HorizontalListSectionMediaQuery;
