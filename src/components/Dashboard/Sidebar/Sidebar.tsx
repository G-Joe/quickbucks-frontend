import { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import SidebarItems from "./SidebarItems";
import dropdownIconImg from "assets/Vector copy 2.svg";
import cancelImg from "assets/cancel.svg";
import "./Sidebar.scss";

const Sidebar = ({ menuIcon, handleMenuClick }: any) => {
  const [activeParent, setActiveParent] = useState("");

  return (
    <>
      <div className="sidebar-wrapper">
        <div className={`${menuIcon && `mobile`} sidebar`}>
          <img
            onClick={handleMenuClick}
            className="cancel-img"
            src={cancelImg}
            alt="cancelImg"
          />
          <ul className="sidebar-menu">
            {SidebarItems.map((item, i) => {
              return (
                <Fragment key={i}>
                  <NavLink
                    onClick={(e) => {
                      if (item.path === activeParent) {
                        setActiveParent("");
                      } else {
                        setActiveParent(item.path);
                        handleMenuClick();
                      }

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
                  <div className="sidebar-children">
                    <ul className="sidebar-children-item">
                      {item.children?.map(
                        (child_item, j) =>
                          item.path === activeParent && (
                            <Fragment key={j}>
                              <NavLink
                                onClick={handleMenuClick}
                                to={child_item.path}
                              >
                                {child_item.title}
                              </NavLink>
                            </Fragment>
                          )
                      )}
                    </ul>
                  </div>
                </Fragment>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

// item.children?.find((pItem) =>
//                     pItem.path.includes(item.path)
//                   ) && setShowChildren(!showChildren);
