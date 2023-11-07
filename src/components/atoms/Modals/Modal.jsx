import ModalBackground from "./ModalBackground";

const Modal = ({ children, isOpen, onClose }) => {
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
