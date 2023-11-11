import ModalBackground from "./ModalBackground";
import {useEffect} from "react";

const Modal = ({ children, isOpen, onClose }) => {
    useEffect(() => {
        window.addEventListener("keyup", (e) => {
            if (e.key === "Escape" && isOpen) {
                onClose();
            }
        });
    }, []);
    // 뒤로가기가 작동했을 경우, onClose()를 호출한다. 앞으로가기를 작동시킨다.
    useEffect(() => {
        window.onpopstate = () => {
            if (isOpen) {
              onClose();
              window.history.forward();
            }
        };
    }, []);


  return (
    <>
      <ModalBackground isOpened={isOpen} onClick={onClose}/>
      <div className={isOpen ? "modal-board__opened" : "modal-board__closed"}>
        {children}
      </div>
    </>
  );
};

export default Modal;
