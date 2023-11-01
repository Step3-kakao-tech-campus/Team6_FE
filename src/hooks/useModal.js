import { useState } from "react";

export const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const hide = () => {
    setIsShowing(false);
    setModalContent(null);
  };

    const show = (content) => {
    setIsShowing(true);
    setModalContent(content);
};


  return { hide, show, isShowing, modalContent };
};
