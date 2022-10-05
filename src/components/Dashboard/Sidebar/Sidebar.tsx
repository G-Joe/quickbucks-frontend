import { NavLink } from "react-router-dom";

import SidebarItems from "./SidebarItems";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar">
        <ul className="sidebar-menu">
          {SidebarItems.map((item) => (
            <NavLink to={item.path}>
              <img src={item.icon} alt="sidebarIcon" />
              {item.title}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
