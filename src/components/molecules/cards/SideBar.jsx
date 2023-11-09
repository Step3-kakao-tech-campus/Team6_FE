const SideBar = ({ isOpen, toggle }) => {
  const containerStyles = `fixed inset-y-0 left-0 z-30 transform transition-transform duration-300 ease-in-out bg-white ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  }`;

  return (
    <div className={containerStyles} style={{ width: "256px" }}>
      <button
        onClick={toggle}
        className="absolute right-0 top-0 p-4"
        aria-label="close-button"
      >
        Close
      </button>
      <nav>
        <a
          href="/"
          className="block p-4 text-black hover:bg-gray-50"
          aria-label="home-button"
        >
          Home
        </a>
        <a
          href="/userinfo"
          className="block p-4 text-black hover:bg-gray-50"
          aria-label="my-profile-button"
        >
          My Profile
        </a>
        <a href="#" className="block p-4 text-black hover:bg-gray-50">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default SideBar;
