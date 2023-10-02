import { Link } from "react-router-dom";

/**
 *
 * @param id {number} 해당 요소의 id
 * @param icon {JSX.Element} 해당 요소의 아이콘
 * @param label {string} 해당 요소의 라벨
 * @param link {string} 해당 요소의 링크
 * @param isActivated {boolean} 해당 요소가 활성화되었는지 여부
 * @returns {JSX.Element} BottomNavBar의 NavItem
 * @constructor
 */
const NavItem = ({ id, icon, label, to, isActivated }) => {
  return (
      <div className={`nav-item-${id} flex w-full flex-col items-center justify-center`}>
        <Link to={to} className={"w-full"}>
          <div className={"nav-bar-item-icon flex w-full flex-col items-center justify-center"}>
            {icon}
          </div>
          <div className={"nav-bar-item-label flex w-full flex-col items-center justify-center text-sm text-gray-500"}>
            {label}
          </div>
        </Link>
      </div>
  );
};

export default NavItem;
