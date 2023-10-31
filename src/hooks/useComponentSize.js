import { useEffect, useState } from "react";

/**
 * 컴포넌트의 크기를 가져오는 훅
 * @param ref {React.MutableRefObject<HTMLElement>} - 컴포넌트의 ref, useRef로 생성하여 크기를 측정할 컴포넌트에 연결한 후 이 컴포넌트에 prop으로 전달
 * @returns {{width: number, height: number}} - 컴포넌트의 크기 정보 객체
 */
export const useComponentSize = (ref) => {
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });
  const observer = new ResizeObserver((entries, observer) => {
    entries.forEach((entry) => {
      setSize(entry.contentRect);
    });
  });
  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref, observer]);

  return size;
};
