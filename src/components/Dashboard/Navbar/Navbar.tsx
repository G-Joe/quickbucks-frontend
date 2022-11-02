import { useState } from "react";
import logoImg from "assets/images/Frame 10.png";
import menuImg from "assets/Menu.png";
import dropdownIconImg from "assets/Vector copy 2.svg";
import notifyImg from "assets/Frame 2114.svg";
import userImg from "assets/images/The-Cavemen2 1.png";
import "./Navbar.scss";

const Navbar = ({ handleMenuClick }: any) => {
  const [bellIcon, setBellIcon] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="navbar-wrapper">
          <div className="navbar-logo">
            <img
              onClick={handleMenuClick}
              className="menu"
              src={menuImg}
              alt="menuImg"
            />
            <img className="logo" src={logoImg} alt="logoImg" />
          </div>
          <div className="navbar-right">
            <div
              className="navbar-right notify"
              onClick={() => setBellIcon(true)}
            >
              <img src={notifyImg} alt="notifyImg" />
            </div>
            <div className="navbar-right profile-img">
              <img src={userImg} alt="userImg" />
            </div>
            <div className="navbar-right dropdown">
              <p className="dropdown-text">Solomon</p>
              <img src={dropdownIconImg} alt="dropdownIconImg" />
            </div>
          </div>
        </div>

        <div
          onClick={() => setBellIcon(false)}
          className={`${bellIcon && "notification-overlay"}`}
        ></div>

        {bellIcon && (
          <div className="notification">
            <div className="notification-header">
              <h3>Notifications</h3>
            </div>
            <div className="notification-wrapper">
              <div className="notification-card">
                <div className="top">
                  <p>PayDayLoan</p>
                  <span>30 mins ago</span>
                </div>
                <p className="notification-message">
                  Lorem ipsum dolor sit amet, consectetur adipiscing facilisis
                  tincidunt nullam risus feugiat. Sollicitudin suspendisse{" "}
                </p>
              </div>
              <div className="notification-card">
                <div className="top">
                  <p>PayDayLoan</p>
                  <span>30 mins ago</span>
                </div>
                <p className="notification-message">
                  Lorem ipsum dolor sit amet, consectetur adipiscing facilisis
                  tincidunt nullam risus feugiat. Sollicitudin suspendisse{" "}
                </p>
              </div>
              <div className="notification-card">
                <div className="top">
                  <p>PayDayLoan</p>
                  <span>30 mins ago</span>
                </div>
                <p className="notification-message">
                  Lorem ipsum dolor sit amet, consectetur adipiscing facilisis
                  tincidunt nullam risus feugiat. Sollicitudin suspendisse{" "}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
