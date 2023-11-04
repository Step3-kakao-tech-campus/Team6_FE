import { AiOutlineClose } from "react-icons/ai";
import ModalBackground from "./ModalBackground";

const Modal = ({ children, isOpen, onClose }) => {
  return (
    <>
      <ModalBackground isOpened={isOpen}>
        <button
          className={
            "modal-close-button fixed bottom-4 left-[50%] z-[20] translate-x-[-50%] rounded-full bg-gray-700 p-2"
          }
          onClick={onClose}
        >
          <AiOutlineClose size={60} color={"#ffffff"} />
        </button>
      </ModalBackground>
      <div className={isOpen ? "modal-board__opened" : "modal-board__closed"}>
        {children}
      </div>
    </>
  );
};

export default Modal;
