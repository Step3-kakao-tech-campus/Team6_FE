import { FaStar, FaStarHalf } from "react-icons/fa";
import { STAR_SIZE } from "./utils";

export const StarHalf = () => (
  <div className={"half-star relative"}>
    <FaStarHalf
      size={STAR_SIZE}
      color={"#ffc107"}
      className={"absolute left-0 top-0 z-5"}
    />
    <FaStar size={STAR_SIZE} color={"#e4e5e9"} />
  </div>
);
