import logoImg from "assets/Frame 20.png";
import dropdownIconImg from "assets/Vector copy 2.svg"
import notifyImg from "assets/Frame 2114.svg"
import userImg from "assets/images/The-Cavemen2 1.png"

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
            <div className="sidebar"></div>
            <div className="main">
                {children}
            </div>
        </div>


    </>
}

export default Layout