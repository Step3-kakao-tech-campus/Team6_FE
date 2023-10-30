import { lockBodyScroll } from "./utils";
import { useEffect } from "react";

const ModalBackground = ({ isOpened, children }) => {
  useEffect(() => lockBodyScroll(), []);
  return (
    <div
      className={isOpened ? "modal-background" : "modal-background__hidden"}
    >
      {children}
    </div>
  );
};

export default ModalBackground;