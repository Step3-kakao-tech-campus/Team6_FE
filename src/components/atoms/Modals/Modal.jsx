import ModalBackground from "./ModalBackground";
import { useEffect } from "react";

const Modal = ({ children, isOpen, onClose }) => {
  useEffect(() => {
    window.addEventListener("keyup", (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    });

    window.onpopstate = () => {
      if (isOpen) {
        onClose();
        window.history.forward();
      }
    };
  }, []);

  return (
    <>
      <ModalBackground isOpened={isOpen} onClick={onClose} />
      <div className={isOpen ? "modal-board__opened" : "modal-board__closed"}>
        {children}
      </div>
    </>
  );
};

export default Modal;
