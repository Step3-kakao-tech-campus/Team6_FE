const HorizontalListWrapperMedia = ({ children }) => {
  return (
    <div className="horizontal-list-wrapper w-full overflow-x-scroll">
      <div className="horizontal-list flex w-full flex-row gap-4 px-4">
        {children}
      </div>
    </div>
  );
};

export default HorizontalListWrapperMedia;
