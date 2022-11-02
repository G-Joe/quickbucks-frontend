import { useState } from "react";
import Navbar from "components/Dashboard/Navbar/Navbar";
import Sidebar from "components/Dashboard/Sidebar/Sidebar";

import twitterImg from "assets/Frame 2025.png";
import instagramImg from "assets/Frame 2026.png";
import youtubeImg from "assets/Frame 2027.png";
import facebookImg from "assets/Frame 2028.png";

import "./DashboardLayout.scss";

const DashboardLayout = ({ children }: any) => {
  const [menuIcon, setMenuIcon] = useState(false);

  const handleMenuClick = () => {
    setMenuIcon(!menuIcon);
  };

  return (
    <>
      <Navbar handleMenuClick={handleMenuClick} />
      <div className="page-wrapper">
        <Sidebar handleMenuClick={handleMenuClick} menuIcon={menuIcon} />
        <div className="layout">{children}</div>
      </div>
      <div className="footer">
        <div className="copyright-wrapper">
          <p> Copyright © 2022 Quickbucks.</p>
          <div className="footer-links">
            <img src={twitterImg} alt="twitterImg" />
            <img src={youtubeImg} alt="youtubeImg" />
            <img src={instagramImg} alt="instagramImg" />
            <img src={facebookImg} alt="facebookImg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
