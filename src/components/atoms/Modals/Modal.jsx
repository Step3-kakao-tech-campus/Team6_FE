import ModalBackground from "./ModalBackground";
import { useEffect } from "react";

const Modal = ({ children, isOpen, onClose }) => {
  useEffect(() => {
    window.addEventListener("keyup", (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    });

    if (isOpen) {
      console.log("lock!");
      window.onpopstate = () => {
        window.history.forward();
        setTimeout(window.onpopstate = () => {
        }, 50)
        onClose();
      };
    }
    else {
      console.log("unlock!")
      window.onpopstate = () => onClose();
    }
  }, [isOpen, onClose]);
  console.log("isOpen", isOpen)
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
