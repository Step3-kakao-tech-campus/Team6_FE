import { StarFull } from "./StarFull";
import { StarHalf } from "./StarHalf";
import { StarEmpty } from "./StarEmpty";

/**
 * @description 한 개 Star의 크기
 * @type {number}
 */
export const STAR_SIZE = 60;

/**
 * @description 한 개의 Star를 표현하는데 사용되는 상수
 * @type {{half: number, off: number, on: number}}
 */
export const STAR_INPUT = {
  off: 0,
  half: 1,
  on: 2,
};
/**
 * @description STAR_INPUT에 따라 다른 Star를 반환하는 상수
 * @type {{0: JSX.Element, 1: JSX.Element, 2: JSX.Element}}
 */
export const STAR_COMPONENT = {
  0: <StarEmpty />,
  1: <StarHalf />,
  2: <StarFull />,
};

/**
 * @description 별점을 표현하는데 사용되는 상수 각 별의 위치에 따라 알맞은 값을 반환한다.
 * @param value {number} 0~5 사이의 값, 표시할 별점
 * @param key {number} 0~5 사이의 값, 현재 별의 위치
 * @returns {number} STAR_INPUT의 값, 별의 상태, STAR_COMPONENT에서 사용된다.
 */
export const getStarOn = (value, key) => {
  if (value >= key) {
    return STAR_INPUT.on;
  } else if (value >= key - 0.5) {
    return STAR_INPUT.half;
  } else {
    return STAR_INPUT.off;
  }
};
