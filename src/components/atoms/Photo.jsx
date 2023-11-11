import { cursorPointer } from "../../utils/classNameUtils";

const Photo = ({ src, alt, className, onClick, extendable }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <>
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
