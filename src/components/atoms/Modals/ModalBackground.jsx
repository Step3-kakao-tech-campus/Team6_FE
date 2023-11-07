import { lockBodyScroll } from "./utils";
import { useEffect } from "react";

const ModalBackground = ({ isOpened, children, onClick }) => {
  useEffect(() => lockBodyScroll(), []);
  return (
    <div
      className={isOpened ? "modal-background" : "modal-background__hidden"}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default ModalBackground;
