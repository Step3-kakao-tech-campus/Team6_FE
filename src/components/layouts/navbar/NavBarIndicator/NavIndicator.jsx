const NavIndicator = ({ activatedTab }) => {
  return (
    <div className="navbar-indicator w-1/4 h-1 absolute top-0 flex justify-center items-center transition-all duration-200 ease-in-out"
         style={{ left: `${activatedTab * 25 - 25}%` }}>
      <div
        className="navbar-indicator-line bg-tripKoOrange-500 w-full h-full"
      ></div>
    </div>
  );
};

export default NavIndicator;
