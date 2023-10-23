import { AiOutlineClose } from "react-icons/ai";
import { useCallback, useEffect, useState } from "react";
import ModalBackground from "./ModalBackground";

const BottomPopModal = ({ onClose, children }) => {

  const [opened, setOpened] = useState(false);

  useEffect(() => {
    setOpened(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setOpened(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  return (
        <>
          <ModalBackground isOpened={opened} />
          <div className={opened ? "bottom-modal-board__opened" : "bottom-modal-board__closed"}>
            <div className={"modal-board-header width-flex-layout fixed z-[2] w-full rounded-t-3xl bg-white p-4"}>
              <button
                className={"modal-board-close-button flex items-center justify-center"}
                onClick={onCloseModal}
              >
                <AiOutlineClose size={30} />
              </button>
            </div>
            <div className={"modal-board-body pt-16"}></div>
            {children}
          </div>
        </>
  );
};

export default BottomPopModal;
