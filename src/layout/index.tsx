import logoImg from "assets/Frame 20.png";
import dropdownIconImg from "assets/Vector copy 2.svg"
import notifyImg from "assets/Frame 2114.svg"
import userImg from "assets/images/The-Cavemen2 1.png"
import homeIcon from "assets/home.svg"
import loanImg from "assets/loans.svg"
import calcImg from "assets/calcImg.svg"
import liquidateImg from "assets/liquidate.svg"
import supportImg from "assets/support.svg"
import settingstImg from "assets/settings-avatar.svg"
import accountImg from "assets/account-avatar.svg"
import historyImg from "assets/history-icon.svg"


const Layout = ({ children }: any) => {
    return <>
        <div className="navbar">
            <div className="navbar-wrapper">
                <div className=" navbar-logo">
                    <img src={logoImg} alt="logoImg" />
                </div>
                <div className="navbar-right">
                    <div className="navbar-right notify">
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
        </div>
        <div className="page-wrapper">
            <div className="sidebar">

                    <ul className="sidebar-menu">
                        <li className="test"> <img src={homeIcon} alt="homeIcon"/>Home</li>
                        <li className="teste"> <img src={loanImg} alt="loanImg"/>My Loans</li>
                        <li> <img src={calcImg} alt="calcImg"/>Loan calculator</li>
                        <li> <img src={liquidateImg} alt="liquidateImg"/>Liquidate</li>
                        <li> <img src={supportImg} alt="supportImg"/>Support</li>
                        <li> <img src={settingstImg} alt="settingsImg"/>Settings</li>
                        <li> <img src={accountImg} alt="accountImg"/>Account</li>
                        <li> <img src={historyImg} alt="historyImg"/>History</li>
                    </ul>
             
            </div>
            <div className="main">
                {children}
            </div>
        </div>


    </>
}

export default Layout