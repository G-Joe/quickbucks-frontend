import { NavLink } from "react-router-dom";

import homeIcon from "assets/home.svg";
import loanImg from "assets/loans.svg";
import calcImg from "assets/calcImg.svg";
import liquidateImg from "assets/liquidate.svg";
import supportImg from "assets/support.svg";
import settingstImg from "assets/settings-avatar.svg";
import accountImg from "assets/account-avatar.svg";
import historyImg from "assets/history-icon.svg";

import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <NavLink to="/home">
          <img src={homeIcon} alt="homeIcon" />
          Home
        </NavLink>
        <NavLink to="/loans">
          <img src={loanImg} alt="loanImg" />
          My Loans
        </NavLink>
        <NavLink to="/loan-calculator">
          <img src={calcImg} alt="calcImg" />
          Loan calculator
        </NavLink>
        <NavLink to="/liquidate">
          <img src={liquidateImg} alt="liquidateImg" />
          Liquidate
        </NavLink>
        <NavLink to="/support">
          <img src={supportImg} alt="supportImg" />
          Support
        </NavLink>
        <NavLink to="/settings">
          <img src={settingstImg} alt="settingsImg" />
          Settings
        </NavLink>
        <NavLink to="/account">
          <img src={accountImg} alt="accountImg" />
          Account
        </NavLink>
        <NavLink to="/history">
          <img src={historyImg} alt="historyImg" />
          History
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
