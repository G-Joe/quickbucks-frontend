import { useState } from "react";
import { NavLink } from "react-router-dom";
import SidebarItems from "./SidebarItems";
import dropdownIconImg from "assets/Vector copy 2.svg";
import "./Sidebar.scss";

const Sidebar = () => {
  const [showChildren, setShowChildren] = useState(false);

  return (
    <div className="sidebar-wrapper">
      <div className="sidebar">
        <ul className="sidebar-menu">
          {SidebarItems.map((item) => (
            <>
              <NavLink
                onClick={(e) => {
                  item.children && setShowChildren(!showChildren);
                  item.children && e.preventDefault();
                }}
                to={item.path}
              >
                <div className="first">
                  <img src={item.icon} alt="sidebarIcon" />
                  {item.title}
                </div>
                {item.children && (
                  <img src={dropdownIconImg} alt="dropdownIconImg" />
                )}
              </NavLink>
              {showChildren && item.children && (
                <>
                  <div className="sidebar-children">
                    <ul className="sidebar-children-item">
                      {item.children.map((child_item) => (
                        <NavLink to={child_item.path}>
                          {child_item.title}
                        </NavLink>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
