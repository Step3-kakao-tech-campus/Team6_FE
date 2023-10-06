const HorizontalListWrapperMediaQuery = ({ children }) => {
  return (
    <div className="horizontal-list-wrapper w-full md:overflow-x-scroll">
      <div className="horizontal-list w-full gap-4 px-4 grid grid-cols-1 xs:grid-cols-2 md:flex md:w-auto md:flex-row overflow-y-hidden py-4">
        {children}
      </div>
    </div>
  );
};

export default HorizontalListWrapperMediaQuery;
