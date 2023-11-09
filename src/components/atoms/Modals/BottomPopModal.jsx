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
      <div
        className={
          opened ? "bottom-modal-board__opened" : "bottom-modal-board__closed"
        }
      >
        <div
          className={
            "modal-board-header width-flex-layout fixed z-[15] w-full rounded-t-3xl bg-white p-3"
          }
        >
          <button
            className={
              "modal-board-close-button flex items-center justify-center"
            }
            onClick={onCloseModal}
            aria-label="modal-close-button"
          >
            <AiOutlineClose size={30} />
          </button>
        </div>
        <div className={"modal-board-body z-[30] pt-10"}>{children}</div>
      </div>
    </>
  );
};

export default BottomPopModal;
