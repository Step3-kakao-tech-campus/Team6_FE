import { useEffect, useState } from "react";

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
