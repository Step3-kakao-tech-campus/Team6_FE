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
const NavItem = ({ id, to, icon, label, labelColor}) => {
  // const {setActivatedTab} = useContext(NavContext)
  return (
    <div className={`nav-item-${id} flex w-full flex-col items-center justify-center`} >
      <Link to={to} className={"w-full hover:scale-110 duration-300 ease-in-out"}>
        <div className={"nav-bar-item-icon flex w-full flex-col items-center justify-center "}>
          {icon}
        </div>
        <div className={"nav-bar-item-label flex w-full flex-col items-center justify-center text-sm " + labelColor}>
          {label}
        </div>
      </Link>
    </div>
  );
};

export default NavItem;
