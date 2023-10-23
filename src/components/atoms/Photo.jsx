import { cursorPointer } from "../../utils/classNameUtils";
import Modal from "./Modals/Modal";
import { useState } from "react";

const Photo = ({ src, alt, className, onClick, extendable }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (extendable) {
      setIsModalOpen(true);
    } else {
    }
  };

  return (
    <>
      {/*{isModalOpen && (*/}
      {/*  <Modal*/}
      {/*    isOpen={isModalOpen}*/}
      {/*    onClose={() => setIsModalOpen(false)}*/}
      {/*  >*/}
      {/*      <img src={src} alt={alt} className="h-full w-full object-cover" />*/}
      {/*  </Modal>*/}
      {/*)}*/}
      <div className={"photo-wrapper " + className + " skeleton-wrapper "}>
        <img
          src={src}
          alt={alt}
          className={
            "h-full w-full object-cover " + cursorPointer(onClick || extendable)
          }
          onClick={handleClick}
        />
      </div>
    </>
  );
};

export default Photo;
