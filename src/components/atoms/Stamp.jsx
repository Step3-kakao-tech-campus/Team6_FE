/**
 * Stamp atom component
 * @param stamp
 * @returns {JSX.Element}
 * @constructor
 */
//TODO : Stamp 색 변경 가능하게 하기
const Stamp = ({ children, className }) => {
  return (
    <span
      className={
        "reservation-stamp rounded-xl border-8 border-double border-red-700 px-2 font-bold text-red-700 " +
        className
      }
    >
      {children}
    </span>
  );
};

export default Stamp;
